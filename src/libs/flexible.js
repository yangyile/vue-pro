(function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // 针对Android屏幕多dpr的情况，设置dpr为1~3的整数
    if(dpr >= 3) {
        dpr = 3;
    } else if(dpr >= 2) {
        dpr = 2;
    } else {
        dpr = 1;
    }

    // adjust body font size
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (14 * dpr) + 'px'
        }
        else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }

    function setInitialScale() {
        var metaEle = document.createElement('meta');
        var firstMetaEle = document.getElementsByTagName('meta')[0];
        var headEle = document.getElementsByTagName('head')[0];
        var initialScale = 1/parseInt(dpr);

        metaEle.setAttribute('name', 'viewport');
        metaEle.setAttribute('content', 'width=device-width,initial-scale=' + initialScale 
        + ',maximum-scale=' + initialScale 
        + ',minimum-scale=' + initialScale);

        headEle.insertBefore(metaEle, firstMetaEle);
    }

    setBodyFontSize();
    setInitialScale();

    // set 1rem = viewWidth / 10
    function setRemAndDpr() {
        var rem = docEl.clientWidth / 10;
        docEl.style.fontSize = rem + 'px'

        docEl.setAttribute('data-dpr', parseInt(dpr))
    }

    setRemAndDpr()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemAndDpr)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemAndDpr()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))