<template>
    <section id="loading_main" v-if="bShow">
        <div class="loading-cont">
            <span class="iconfont icon-loading spin"></span>
            <div>loading</div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'loading',
    data() {
        return {
            bShow: false
        }
    },
    components: {
    },
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        showLoading: function() {
            this.bShow = true;
        },

        closeLoading: function() {
            this.bShow = false;
        }
    }

}
</script>

<style lang="scss" scoped>
#loading_main {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding-top: px2rem(80);
    z-index: 999;
    .loading-cont {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: px2rem(160);
        height: px2rem(160);
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        text-align: center;
        padding: px2rem(30);
        border-radius: px2rem(20);
        span {
            @include px2px('font-size', 40);
        }
        div {
            margin-top: px2rem(40);
        }
    }
}
</style>
