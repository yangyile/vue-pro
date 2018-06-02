<template>
<section class="wrapper">
    <c-header :title="$route.name"></c-header>
    <vue-scroller @infinite-scroll="loadmore">
        <c-lists :items="dataLists"></c-lists>
    </vue-scroller>
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
</style>
