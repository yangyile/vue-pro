<template>
<div class="pull-to-refresh">
    <c-header></c-header>
    <div class="wrapper">
        <vue-scroller
            ref="myScroller"
            :topConfig="topConf"
            :top-load-method="refresh"
            :topBlockHeight="px2rem(80)"
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
    name: 'simple-pull-to-refresh',
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

        resetState: function() {
            this.scrollerOpts.pageNum = 1;
            this.scrollerOpts.delay = 0;
        }
    }
};
</script>

<style lang="scss" scoped>
.pull-to-refresh {
    display: -webkit-box;
    box-sizing: border-box;
    height: 100%;
    padding-top: px2rem(80);
}
</style>
