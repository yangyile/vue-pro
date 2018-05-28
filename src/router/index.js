import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/Home',
        component: (resolve) => {
            require(['@/pages/home/index'], resolve)
        }
    },
    {
        path: '/Home',
        name: 'Home',
        component: (resolve) => {
            require(['@/pages/home/index'], resolve)
        }
    },
    {
        path: '/ScrollHome',
        name: 'ScrollHome',
        component: (resolve) => {
            require(['@/pages/scroller/Home'], resolve)
        }
    },
    {
        path: '/BounceScroll',
        name: 'BounceScroll',
        component: (resolve) => {
            require(['@/pages/scroller/BounceScroll'], resolve)
        }
    },
    {
        path: '/InfiniteScroll',
        name: 'InfiniteScroll',
        component: (resolve) => {
            require(['@/pages/scroller/InfiniteScroll'], resolve)
        }
    },
    {
        path: '/RefreshLoadMore',
        name: 'RefreshLoadMore',
        component: (resolve) => {
            require(['@/pages/scroller/RefreshLoadMore'], resolve)
        }
    },
    {
        path: '/SimplePullToLoadMore',
        name: 'SimplePullToLoadMore',
        component: (resolve) => {
            require(['@/pages/scroller/SimplePullToLoadMore'], resolve)
        }
    },
    {
        path: '/SimplePullToRefresh',
        name: 'SimplePullToRefresh',
        component: (resolve) => {
            require(['@/pages/scroller/SimplePullToRefresh'], resolve)
        }
    },
    {
        path: '/DialogHome',
        name: 'DialogHome',
        component: (resolve) => {
            require(['@/pages/dialog/index'], resolve)
        }
    }
    ]
})
