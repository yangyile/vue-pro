<template>
<section
    class="dialog-alert"
    v-if="show"
>
    <dialog-mask>
        <div class="alert-main">
            <div class="close">
                <a
                    href="javascript: void(0)"
                    class="iconfont icon-close"
                    @click="hideAlert"
                ></a>
            </div>
            <div class="alert-body">{{ text }}</div>
            <div class="alert-btn clearfix">
                <span
                    class="btn btn-primary"
                    @click="hideAlert"
                >{{ okBtnText }}</span>
                    <span
                        class="btn"
                        @click="hideAlert"
                    >{{ cancelBtnText }}</span>
            </div>
        </div>
    </dialog-mask>
    </section>
</template>

<script>
import DialogConfig from "../../config/config.js";

export default {
    name: "alert",
    data() {
        return {
            show: false,
            text: "",
            okBtnText: "",
            cancelBtnText: "",
            okCallback: null
        };
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        showAlert: function (options, callback) {
            this.show = true;
            if (options) {
                this.text = options.text ? options.text : DialogConfig.AlertConfig.text;
                this.okBtnText = options.okBtnText ?
                    options.okBtnText :
                    DialogConfig.AlertConfig.okBtnText;
                this.cancelBtnText = options.cancelBtnText ?
                    options.cancelBtnText :
                    DialogConfig.AlertConfig.cancelBtnText;
            } else {
                this.text = DialogConfig.AlertConfig.text;
                this.okBtnText = DialogConfig.AlertConfig.okBtnText;
                this.cancelBtnText = DialogConfig.AlertConfig.cancelBtnText;
            }

            if (callback) {
                this.callback = callback ? callback : null;
            }
        },
        hideAlert: function () {
            this.show = false;
            this.okCallback && this.okCallback();
        }
    }
};
</script>

<style lang="scss" scoped>
.dialog-alert {
    .alert-main {
        position: absolute;
        width: 80%;
        left: 0;
        right: 0;
        margin: px2rem(375) auto 0;
        background: #fff;
        border-radius: px2rem(20);
        z-index: 1000;
        .close {}
        .alert-body {}
        .alert-btn {}
    }
}
</style>
