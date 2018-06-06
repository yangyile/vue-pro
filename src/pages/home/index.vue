<template>
<section class="home">
    <my-header :title="$router.name"></my-header>
    <ul>
        <router-link
            :to="{ path: '/ScrollHome' }"
            tag="li"
        >scroller<span class="iconfont icon-more arrow-more"></span></router-link>
        <router-link
            :to="{ path: '/DialogHome' }"
            tag="li"
        >dialog<span class="iconfont icon-more arrow-more"></span></router-link>
        <router-link
            :to="{ path: '/LoadingHome' }"
            tag="li"
        >loading<span class="iconfont icon-more arrow-more"></span></router-link>
    </ul>
</section>
</template>

<script>
import MyHeader from "components/Header/index";

export default {
    name: "home",
    data() {
        return {
            msg: "welcome"
        };
    },
    components: {
        MyHeader
    },
    methods: {},
    mounted() {}
};
</script>


<style lang="scss" scoped>
.home {
    width: 100%;
    ul {
        padding-top: px2rem(80);
        li {
            height: px2rem(100);
            line-height: px2rem(100);
            text-align: left;
            padding: 0 px2rem(30);
            border-bottom: 1px solid #ccc;
            .arrow-more {
                float: right;
            }
        }
    }
}
</style>
