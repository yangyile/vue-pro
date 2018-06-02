<template>
<section class="wrapper">
    <c-header :title="$route.name"></c-header>
    <vue-scroller
        ref="myScroller"
        :topConfig="topConf"
        :top-load-method="refresh"
        :topBlockHeight="px2rem(80)"
    >
        <c-lists :items="dataLists"></c-lists>
        </vue-scroller>
</section>
</template>

<script>
import CHeader from 'components/Header/index';
import CLists from 'components/Pages/scroller/list';

export default {
    name: 'simple-pull-to-refresh',
    components: {
        CHeader,
        CLists
    },
    data() {
        return {};
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

        resetState: function () {
            this.scrollerOpts.pageNum = 1;
            this.scrollerOpts.delay = 0;
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
