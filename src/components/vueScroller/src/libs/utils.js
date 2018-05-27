let Utils = {
    throttle: function (fn, delay, mustRunDelay = 0) {
        let timer = null;
        let tStart;
        return function () {
            const context = this;
            const args = arguments;
            const tCurr = +new Date();
            clearTimeout(timer);
            if (!tStart) {
                tStart = tCurr;
            }
            if (mustRunDelay !== 0 && tCurr - tStart >= mustRunDelay) {
                fn.apply(context, args);
                tStart = tCurr;
            } else {
                timer = setTimeout(function () {
                    fn.apply(context, args);
                }, delay);
            }
        };
    },

    px2rem: function($px) {
        let dpr = window.devicePixelRatio || 1;
        let bodyWidth = document.body.clientWidth;
        let baseRem = bodyWidth/10;

        return dpr * $px/(2 * baseRem);
    }
};

export default Utils;