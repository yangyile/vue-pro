<template>
<div class="refresh-load-more">
    <c-header></c-header>
    <div class="wrapper">
        <vue-scroller
            :top-load-method="refresh"
            :bottom-load-method="loadmore"
            ref="myScroller"
            :topConfig="topConf"
            :bottomConfig="bottomConf"
            :topBlockHeight="px2rem(80)"
            :bottomBlockHeight="px2rem(80)"
        >
            <c-lists :items="dataLists"></c-lists>
        </vue-scroller>
    </div>
</div>
</template>

<script>
import CHeader from 'components/header/index';
import CLists from 'components/pages/scroller/list';

export default {
    name: 'refresh-loadmore',
    components: {
        CHeader,
        CLists
    },
    data() {
        return {
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init: function () {
            this.resetState();
            this.getData(this.scrollerOpts, (data) => {
                this.$refs.myScroller.actionLoaded();
                this.dataLists = data;
            });
        },

        refresh(loaded) {
            this.scrollerOpts.pageNum = 1;
            this.scrollerOpts.delay = 1500;
            this.getData(this.scrollerOpts, (data) => {
                setTimeout(() => {
                    this.dataLists = [];
                    this.dataLists.push(...data);
                    loaded('done');
                });
            });
        },

        loadmore(loaded) {
            this.scrollerOpts.pageNum ++;
            this.scrollerOpts.delay = 1500;
            this.getData(this.scrollerOpts, (data) => {
                setTimeout(() => {
                    if (data && this.scrollerOpts.pageNum <= 3) {
                        this.dataLists.push(...data);
                        loaded('done');
                    } else {
                        loaded('done');
                        this.$refs.myScroller.finishInfinite();
                    }
                });
            });
        },

        resetState: function() {
            this.scrollerOpts.pageNum = 1;
            this.scrollerOpts.delay = 0;
        }
    }
};
</script>

<style lang="scss" scoped>
.refresh-load-more {
    display: -webkit-box;
    box-sizing: border-box;
    height: 100%;
    padding-top: px2rem(80);
}
</style>
