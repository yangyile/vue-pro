<template>
<div class="bounce-scroller">
    <c-header></c-header>
    <div class="wrapper">
        <vue-scroller>
            <c-lists :items="dataLists"></c-lists>
        </vue-scroller>
    </div>
</div>
</template>

<script>
import CHeader from 'components/header/index';
import CLists from 'components/pages/scroller/list';

export default {
    data() {
        return {
        };
    },
    name: "bounce-scroll",
    components: {
        CHeader, CLists
    },
    mounted() {
        this.init();
    },
    methods: {
        init: function() {
            this.resetState();
            this.getData(this.scrollerOpts, (data) => {
                this.dataLists = data;
            });
        },
        resetState: function() {
            this.scrollerOpts.delay = 0;
        }
    }
};
</script>

<style lang="scss" scoped>
.bounce-scroller {
    display: -webkit-box;
    box-sizing: border-box;
    height: 100%;
    padding-top: px2rem(80);
}
</style>
