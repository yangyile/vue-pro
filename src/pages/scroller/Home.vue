<template>
<section class="wrapper">
    <my-header :title="title"></my-header>
    <vue-scroller class="scroller-view">
        <ul>
            <li></li>
            <li>
                <router-link :to="{ path: '/BounceScroll' }">
                    Bounce scroll<span class="iconfont icon-more"></span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/InfiniteScroll' }">
                    Infinite scroll<span class="iconfont icon-more"></span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/RefreshLoadMore' }">
                    Refresh Load more<span class="iconfont icon-more"></span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/SimplePullToLoadMore' }">
                    Simple pull to load more<span class="iconfont icon-more"></span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/SimplePullToRefresh' }">
                    Simple pull to refresh<span class="iconfont icon-more"></span>
                </router-link>
            </li>
        </ul>
    </vue-scroller>
</section>
</template>

<script>
import MyHeader from "components/Header/index";

export default {
    name: "home",
    data() {
        return {
            title: "scroller"
        };
    },
    components: {
        MyHeader
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    .scroller-view {
        flex: 1;
        ul {
            li {
                padding: 0 px2rem(30);
                height: px2rem(100);
                line-height: px2rem(100);
                background: #fff;
                text-align: left;
                a {
                    display: block;
                    height: 100%;
                    span {
                        float: right;
                    }
                }
            }
            li:first-child {
                height: px2rem(80);
            }
            li:nth-child(even) {
                background: #f3f3f3;
            }
        }
    }
}
</style>
