<template>
<div
    class="vue-pull-to-wrapper"
    :style="{ height: wrapperHeight, transform: `translate3d(0, ${diff}rem, 0)` }"
>

    <!-- 下拉刷新块 -->
    <div
        v-if="topLoadMethod"
        :style="{ height: `${topBlockHeight}`, marginTop: `-${topBlockHeight}`, lineHeight: `${topBlockHeight}` }"
        class="action-block"
    >
        <div class="top-load-wrapper">
            <img
                v-if="_topConfig.imgLoading"
                :src="_topConfig.imgUrl"
            />
            <p v-else>
                <svg
                    class="icon"
                    :class="{
                  'icon-arrow': state === 'trigger',
                  'icon-loading': state === 'loading'
              }"
                    aria-hidden="true"
                >
                    <use :xlink:href="iconLink"></use>
                    </svg>
                    {{ topText }}
            </p>
        </div>
        </div>

        <!-- 内容部分和上拉加载块 -->
        <div class="scroll-container">
            <slot></slot>
            <!-- vue 2.5 use slot-scope -->
            <div
                v-if="bottomLoadMethod"
                :style="{ height: `${bottomBlockHeight}`, lineHeight: `${bottomBlockHeight}` }"
                class="action-block"
            >
                <div class="bottom-load-wrapper">
                    <spinner
                        :style="{fill: '#aaa', stroke: '#aaa', height: `${bottomBlockHeight}`}"
                        v-if="state == 'loading'"
                    ></spinner>
                        <div v-else>
                            <svg
                                class="icon"
                                :class="{
                    'icon-arrow': state === 'trigger',
                    'icon-loading': state === 'loading',
                    'icon-none': state === 'no-data',
                    'icon-done': state === 'loaded-done'
                }"
                                aria-hidden="true"
                            >
                                <use :xlink:href="iconLink"></use>
                                </svg>
                                {{ bottomText }}
                        </div>
                </div>
        </div>
        </div>

        </div>
</template>


<script>
import Utils from "./src/libs/utils";
import {
    TOP_DEFAULT_CONFIG,
    BOTTOM_DEFAULT_CONFIG
} from "./src/config/config";
import Spinner from "./src/components/Spinner";
import "./src/assets/fonts/iconfont.js";

export default {
    name: "vue-pull-to",
    components: {
        Spinner
    },
    props: {
        distanceIndex: {
            type: Number,
            default: 2
        },
        topBlockHeight: {
            type: String,
            default: '50'
        },
        bottomBlockHeight: {
            type: String,
            default: '50'
        },
        wrapperHeight: {
            type: String,
            default: "100%"
        },
        topLoadMethod: {
            type: Function
        },
        bottomLoadMethod: {
            type: Function
        },
        isThrottleTopPull: {
            type: Boolean,
            default: true
        },
        isThrottleBottomPull: {
            type: Boolean,
            default: true
        },
        isThrottleScroll: {
            type: Boolean,
            default: true
        },
        isTopBounce: {
            type: Boolean,
            default: true
        },
        isBottomBounce: {
            type: Boolean,
            default: true
        },
        topConfig: {
            type: Object,
            default: () => {
                return {};
            }
        },
        bottomConfig: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            scrollEl: null,
            startScrollTop: 0,
            startY: 0,
            currentY: 0,
            distance: 0,
            direction: 0,
            diff: 0,
            beforeDiff: 0,
            topText: "",
            bottomText: "上拉加载更多~",
            state: "loading",
            bottomReached: false,
            throttleEmitTopPull: null,
            throttleEmitBottomPull: null,
            throttleEmitScroll: null,
            throttleOnInfiniteScroll: null,
            loadFinished: false,
            iconLink: "#icon-arrow-bottom"
        };
    },
    computed: {
        _topConfig: function () {
            return Object.assign({}, TOP_DEFAULT_CONFIG, this.topConfig);
        },
        _bottomConfig: function () {
            return Object.assign({}, BOTTOM_DEFAULT_CONFIG, this.bottomConfig);
        }
    },
    watch: {},
    methods: {
        // 开始下拉
        actionPull() {
            this.state = "pull";
            this.iconLink = "#icon-arrow-bottom";
            this.direction === "down" ?
                (this.topText = this._topConfig.pullText) :
                (this.bottomText = this._bottomConfig.pullText);
        },

        actionTrigger() {
            this.state = "trigger";
            this.iconLink = "#icon-arrow-bottom";
            this.direction === "down" ?
                (this.topText = this._topConfig.triggerText) :
                (this.bottomText = this._bottomConfig.triggerText);
        },

        // 正在加载
        actionLoading() {
            this.state = "loading";
            this.iconLink = "#icon-loading";
            if (this.direction === "down") {
                this.resetState();
                this.topText = this._topConfig.loadingText;
                /* eslint-disable no-useless-call */
                this.topLoadMethod.call(this, this.actionLoaded);
                this.scrollTo(this._topConfig.stayDistance);
            } else if (!this.loadFinished) {
                this.bottomText = this._bottomConfig.loadingText;
                this.bottomLoadMethod.call(this, this.actionLoaded);
                this.scrollTo(-this._bottomConfig.stayDistance);
            }
        },

        // 加载完成
        actionLoaded(loadState = "done") {
            this.state = `loaded-${loadState}`;

            let loadedStayTime;
            if (this.direction === "down") {
                this.iconLink = "#icon-finish";
                this.topText =
                    loadState === "done" ?
                    this._topConfig.doneText :
                    this._topConfig.failText;
                loadedStayTime = this._topConfig.loadedStayTime;
            } else {
                this.iconLink = "#icon-arrow-bottom";
                this.bottomText =
                    loadState === "done" ?
                    this._bottomConfig.doneText :
                    this._bottomConfig.failText;
                loadedStayTime = this._bottomConfig.loadedStayTime;
            }
            setTimeout(() => {
                this.scrollTo(0);

                // reset state
                setTimeout(() => {
                    if (this.direction === "down") {
                        this.state = "";
                        this.iconLink = "#icon-arrow-bottom";
                    }
                }, 200);
            }, loadedStayTime);
        },

        //没有数据的情况
        finishInfinite() {
            this.state = "no-data";
            this.loadFinished = true;
            this.bottomText = this._bottomConfig.noDataText;
        },

        //重置当前状态
        resetState() {
            this.loadFinished = false;
            this.bottomText = this._bottomConfig.pullText;
        },

        // 跳转至
        scrollTo(y, duration = 200) {
            this.$el.style.transition = `${duration}ms`;
            this.diff = Utils.px2rem(y);
            setTimeout(() => {
                this.$el.style.transition = "";
            }, duration);
        },

        // 检测是否到达底部
        checkBottomReached() {
            return (
                this.scrollEl.scrollTop + this.scrollEl.offsetHeight + 1 >=
                this.scrollEl.scrollHeight
            );
        },

        // 触摸开始
        handleTouchStart(event) {
            this.startY = event.touches[0].clientY;
            this.beforeDiff = Utils.px2rem(this.diff);
            this.startScrollTop = this.scrollEl.scrollTop;
            this.bottomReached = this.checkBottomReached();
            this.scrollEl.removeEventListener("scroll", this.handleScroll);
        },

        // 滑动屏幕
        handleTouchMove(event) {
            this.currentY = event.touches[0].clientY;
            this.distance =
                (this.currentY - this.startY) / this.distanceIndex + this.beforeDiff;
            this.direction = this.distance > 0 ? "down" : "up";

            if (
                this.startScrollTop === 0 &&
                this.direction === "down" &&
                this.isTopBounce
            ) {
                event.preventDefault();
                event.stopPropagation();
                this.diff = Utils.px2rem(this.distance);
                this.isThrottleTopPull &&
                    this.throttleEmitTopPull(Utils.px2rem(this.diff));

                if (typeof this.topLoadMethod !== "function") return;

                if (
                    this.distance < this._topConfig.triggerDistance &&
                    this.state !== "pull" &&
                    this.state !== "loading"
                ) {
                    this.actionPull();
                } else if (
                    this.distance >= this._topConfig.triggerDistance &&
                    this.state !== "trigger" &&
                    this.state !== "loading"
                ) {
                    this.actionTrigger();
                }
            } else if (
                this.bottomReached &&
                this.direction === "up" &&
                this.isBottomBounce
            ) {
                event.preventDefault();
                event.stopPropagation();
                this.diff = Utils.px2rem(this.distance);
                this.isThrottleBottomPull &&
                    this.throttleEmitBottomPull(Utils.px2rem(this.diff));

                if (typeof this.bottomLoadMethod !== "function") return;

                if (!this.loadFinished) {
                    if (
                        Math.abs(this.distance) < this._bottomConfig.triggerDistance &&
                        this.state !== "pull" &&
                        this.state !== "loading"
                    ) {
                        this.actionPull();
                    } else if (
                        Math.abs(this.distance) >= this._bottomConfig.triggerDistance &&
                        this.state !== "trigger" &&
                        this.state !== "loading"
                    ) {
                        this.actionTrigger();
                    }
                }
            }
        },

        // 滑动结束
        handleTouchEnd() {
            if (this.diff !== 0) {
                if (this.state === "trigger") {
                    this.actionLoading();
                    return;
                }

                // pull cancel
                this.scrollTo(0);
            }
            // this.scrollEl.addEventListener('scroll', this.handleScroll);
        },

        // 处理滚动
        handleScroll(event) {
            this.isThrottleScroll && this.throttleEmitScroll(event);
            this.throttleOnInfiniteScroll();
            this.startScrollTop = this.scrollEl.scrollTop;
            this.bottomReached = this.checkBottomReached();
        },

        // 无限加载
        onInfiniteScroll() {},

        // 函数节流
        throttleEmit(delay, mustRunDelay = 0, eventName) {
            const throttleMethod = function () {
                const args = [...arguments];
                args.unshift(eventName);
                this.$emit.apply(this, args);
            };

            return Utils.throttle(throttleMethod, delay, mustRunDelay);
        },

        bindEvents() {
            this.scrollEl.addEventListener("touchstart", this.handleTouchStart);
            this.scrollEl.addEventListener("touchmove", this.handleTouchMove);
            this.scrollEl.addEventListener("touchend", this.handleTouchEnd);
            this.scrollEl.addEventListener("scroll", this.handleScroll);
        },

        createThrottleMethods() {
            this.throttleEmitTopPull = this.throttleEmit(200, 300, "top-pull");
            this.throttleEmitBottomPull = this.throttleEmit(200, 300, "bottom-pull");
            this.throttleEmitScroll = this.throttleEmit(100, 150, "scroll");
            this.throttleOnInfiniteScroll = Utils.throttle(
                this.onInfiniteScroll,
                400
            );
        },

        init() {
            this.createThrottleMethods();
            this.scrollEl = this.$el.querySelector(".scroll-container");
            this.bindEvents();
        }
    },
    mounted() {
        this.init();
    }
};
</script>

<style lang="scss" scoped>
@import "./src/css/common.scss";
@import "./src/assets/fonts/iconfont.css";
.vue-pull-to-wrapper {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    .action-block {
        position: relative;
        width: 100%;
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .icon-arrow {
        display: inline-block;
        color: #444;
        transition: 0.2s;
        transform: rotate(180deg);
    }
    .icon-loading {
        transform: rotate(0deg);
        animation-name: loading;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }
    @keyframes loading {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .top-load-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        text-align: center;
        img {
            display: block;
            height: 100%;
            margin: 0 auto;
        }
    }
    .bottom-load-wrapper {
        height: 100%;
        text-align: center;
        .icon {
            transform: rotate(180deg);
        }
        .icon-none {
            display: none;
        }
        .icon-done {
            transform: rotate(180deg);
        }
        .icon-arrow {
            transform: rotate(0deg);
        }
        @keyframes loading {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
    .scroll-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .default-text {
        height: 100%;
        text-align: center;
    }
}
</style>
