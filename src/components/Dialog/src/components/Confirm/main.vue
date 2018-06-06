<template>
<transition name="fade">
    <page-mask v-if="show">
        <section
            class="confirm-main"
            v-if="show"
        >
            <div class="confirm-header">
                <span class="confirm-title">{{ title }}</span>
                <a
                    href="javascript: void(0)"
                    class="close iconfont icon-close"
                    @click="hideConfirm('-1')"
                ></a>
            </div>
            <div class="confirm-body">{{ text }}</div>
            <div class="confirm-btn">
                <span
                    class="btn btn-primary"
                    @click="hideConfirm('1')"
                >{{ okBtnText }}</span>
                    <span
                        class="btn"
                        @click="hideConfirm('0')"
                    >{{ cancelBtnText }}</span>
            </div>
            </section>
    </page-mask>
</transition>
</template>

<script>
import DialogConfig from '../../config/config.js';

export default {
    name: 'confirm',
    data() {
        return {
            show: false,
            title: '',
            text: '',
            okBtnText: '',
            cancelBtnText: '',
            okCallback: null
        };
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        showConfirm: function (msg, opts, callFunc) {
            let text = msg;
            let options = opts;
            let callback = callFunc;

            if (typeof msg === 'object') {
                text = '';
                options = msg;
            } else if (typeof msg === 'function') {
                text = '';
                callback = msg;
            }

            if (typeof opts === 'function') {
                callback = opts;
                if (typeof callFunc === 'object') {
                    options = callFunc;
                }
            }

            this.show = true;
            this.text = text ? text : '';

            if (options) {
                this.title = options.title ? options.title : DialogConfig.ConfirmConfig.title;
                this.okBtnText = options.okBtnText ?
                    options.okBtnText :
                    DialogConfig.ConfirmConfig.okBtnText;
                this.cancelBtnText = options.cancelBtnText ? options.cancelBtnText : DialogConfig.ConfirmConfig.cancelBtnText;
            } else {
                this.title = DialogConfig.ConfirmConfig.title;
                this.okBtnText = DialogConfig.ConfirmConfig.okBtnText;
                this.cancelBtnText = DialogConfig.ConfirmConfig.cancelBtnText;
            }

            if (callback) {
                this.okCallback = callback;
            }
        },
        hideConfirm: function (status) {
            this.show = false;
            this.okCallback && this.okCallback(status);
        }
    }
};
</script>

<style lang="scss" scoped>
.confirm-main {
    position: absolute;
    width: 80%;
    left: 0;
    right: 0;
    margin: px2rem(375) auto 0;
    background: #fff;
    border-radius: px2rem(20);
    z-index: 1000;
    .confirm-header {
        display: flex;
        .confirm-title {
            display: inline-block;
            flex: 1;
            height: px2rem(70);
            line-height: px2rem(70);
            padding-left: px2rem(30);
            color: #666666;
            font-weight: bold;
        }
        .close {
            flex: 1;
            display: inline-block;
            width: px2rem(40);
            height: px2rem(40);
            padding: px2rem(20);
            text-align: right;
        }
    }
    .confirm-body {
        padding: px2rem(20) px2rem(60);
        text-align: left;
        word-break: break-all;
    }
    .confirm-btn {
        display: flex;
        padding: px2rem(30) 0;
        justify-content: center;
        span {
            display: inline-block;
            font-weight: bold;
        }
        span:first-child {
            margin-right: px2rem(50);
        }
    }
}
</style>
