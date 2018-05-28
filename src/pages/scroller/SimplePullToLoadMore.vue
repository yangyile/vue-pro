<template>
<section class="pull-to-loadmore">
    <c-header :title="$route.name"></c-header>
    <div class="wrapper">
        <vue-scroller
            :bottom-load-method="loadmore"
            ref="myScroller"
            :bottomConfig="bottomConf"
            :bottomBlockHeight="px2rem(80)"
        >
            <c-lists :items="dataLists"></c-lists>
        </vue-scroller>
    </div>
</section>
</template>

<script>
import CHeader from 'components/Header/index';
import CLists from 'components/Pages/scroller/list';

export default {
    name: 'simple-pull-to-loadmore',
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
        init: function() {
            this.resetState();
            this.getData(this.scrollerOpts, (data) => {
                this.$refs.myScroller.actionLoaded();
                this.dataLists = data;
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
.pull-to-loadmore {
    display: -webkit-box;
    box-sizing: border-box;
    height: 100%;
    padding-top: px2rem(80);
}
</style>
