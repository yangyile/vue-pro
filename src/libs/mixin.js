var mixin = {
    data() {
        return {
            dataLists: [],
            scrollerOpts: {
                url: 'http://localhost:3000/getData',
                pageNum: 1,
                delay: 1500
            },
            topConf: {
                imgLoading: false,
                imgUrl: require('@/assets/images/pull-load.gif'),
                pullText: '下拉刷新~',
                triggerText: '松开刷新~',
                loadingText: '正在刷新~',
                doneText: '刷新完成~',
                stayDistance: '80',
                triggerDistance: '120'
            },
            bottomConf: {
                pullText: '上拉加载更多~',
                triggerText: '释放加载更多~',
                loadingText: '',
                doneText: '上拉加载更多~',
                noDataText: '没有更多数据了~',
                stayDistance: '0',
                triggerDistance: '120'
            }
        }
    },
    methods: {
        getData: function (options, callback) {
            setTimeout(() => {
                this.$http
                    .Ajax(options.url, {
                        data: {
                            pageNum: options.pageNum
                        }
                    })
                    .then(data => {
                        if (data.returnCode == "000000") {
                            callback && callback(data.dataLists);
                        }
                    });
            }, options.delay ? options.delay : 0);
        },

        px2rem: function($px) {
            let dpr = window.devicePixelRatio || 1;
            let bodyWidth = document.body.clientWidth;
            let baseRem = bodyWidth/10;
    
            return dpr * $px/(2 * baseRem) + 'rem';
        }
    }
};

export default mixin;