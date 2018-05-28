<template>
<section class="infinite-scroll">
    <c-header :title="$route.name"></c-header>
    <div class="wrapper">
        <vue-scroller @infinite-scroll="loadmore">
            <c-lists :items="dataLists"></c-lists>
        </vue-scroller>
    </div>
</section>
</template>

<script>
import CHeader from 'components/Header/index';
import CLists from 'components/Pages/scroller/list';

export default {
    name: "infinite-scroll",
    data() {
        return {};
    },
    components: {
        CHeader,
        CLists
    },
    mounted() {
        this.init();
    },
    methods: {
        init: function () {
            this.resetState();
            this.getData(this.scrollerOpts, (data) => {
                this.dataLists = data;
            });
        },
        loadmore: function () {
            this.scrollerOpts.pageNum++;
            this.getData(this.scrollerOpts, (data) => {
                this.items = this.dataLists.concat(data);
            });
        },
        resetState: function () {
            this.scrollerOpts.delay = 0;
        }
    }
};
</script>

<style lang="scss" scoped>
.infinite-scroll {
    display: -webkit-box;
    box-sizing: border-box;
    height: 100%;
    padding-top: px2rem(80);
}
</style>
