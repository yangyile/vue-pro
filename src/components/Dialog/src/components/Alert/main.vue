<template>
<transition name="fade">
    <page-mask v-if="show">
        <section
            class="alert-main"
            v-if="show"
        >
            <div class="alert-header">
                <span class="alert-title">{{ title }}</span>
                <a
                    href="javascript: void(0)"
                    class="close iconfont icon-close"
                    @click="hideAlert"
                ></a>
            </div>
            <div class="alert-body">{{ text }}</div>
            <div class="alert-btn">
                <span
                    class="btn btn-primary"
                    @click="hideAlert"
                >{{ okBtnText }}</span>
            </div>
            </section>
    </page-mask>
</transition>
</template>

<script>
import DialogConfig from '../../config/config.js';

export default {
    name: 'alert',
    data() {
        return {
            show: false,
            title: '',
            text: '',
            okBtnText: ''
        };
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        showAlert: function (msg, opts) {
            let text = msg;
            let options = opts ? opts : {};

            if(typeof msg === 'object') {
                text = '';
                options = msg;
            }

            this.show = true;
            this.text = text ? text : '';

            if (options) {
                this.title = options.title ? options.title : DialogConfig.AlertConfig.title;
                this.okBtnText = options.okBtnText ?
                    options.okBtnText :
                    DialogConfig.AlertConfig.okBtnText;
            } else {
                this.title = DialogConfig.AlertConfig.title;
                this.okBtnText = DialogConfig.AlertConfig.okBtnText;
            }
        },
        hideAlert: function () {
            this.show = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.alert-main {
    position: absolute;
    width: 80%;
    left: 0;
    right: 0;
    margin: px2rem(375) auto 0;
    background: #fff;
    border-radius: px2rem(20);
    z-index: 1000;
    .alert-header {
        display: flex;
        .alert-title {
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
    .alert-body {
        padding: px2rem(20) px2rem(60);
        text-align: left;
        word-break: break-all;
    }
    .alert-btn {
        padding: px2rem(30) 0;
        text-align: right;
        span {
            display: inline-block;
            margin-right: px2rem(30);
            font-weight: bold;
        }
    }
}
</style>
