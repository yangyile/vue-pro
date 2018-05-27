<template>
    <header>
        <div class="header-left" @click="goBack"><span class="iconfont icon-back arrow-left"></span></div>
        <div class="header-title">{{ title ? title : defaultTitle }}</div>
        <div class="header-right" @click="goHome"><span class="iconfont icon-home"></span></div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            defaultTitle: 'home'
        };
    },
    props: ['title'],
    mounted() {},
    methods: {
        goBack: function() {
            this.$router.go(-1);
        },

        goHome: function() {
            this.$router.push({ name: 'Home' });
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: px2rem(80);
    line-height: px2rem(80);
    border-bottom: 1px solid #f2f2f2;
    background: #fff;
    z-index: 999;
    div {
        flex: 1;
    }
    div.header-title {
        flex: 2;
        font-weight: bold;
    }
    div.header-left {
        text-align: left;
        padding-left: px2rem(20);
        @include px2px('font-size', 20);
    }
    div.header-right {
        text-align: right;
        padding-right: px2rem(20);
        @include px2px('font-size', 16);
    }
}
</style>
