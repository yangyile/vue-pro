<template>
<transition name="fade">
    <section
        class="dialog-toast"
        v-if="show"
        :class="{ 'toast-success': bSuccess,
        'toast-warning': bWarning,
        'toast-info': bInfo,
        'toast-error': bError }"
    >
        <span :class="{ 'iconfont': true,
              'icon-success': bSuccess,
              'icon-information': bInfo,
              'icon-warning': bWarning,
              'icon-wrong': bError }"></span> {{ msg }}
        </section>
</transition>
</template>

<script>
export default {
    name: 'toast',
    data() {
        return {
            name: 'toast',
            show: false,
            msg: 'ok',
            bSuccess: false,
            bInfo: false,
            bWarning: false,
            bError: false,
            timeoutId: ''
        }
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        success: function (msg) {
            this.resetState();
            this.bSuccess = true;
            this.show = true;

            if (msg) {
                this.msg = msg;
            }
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.bSuccess = false;
                this.show = false;
            }, 1500);
        },

        info: function (msg) {
            this.resetState();
            this.bInfo = true;
            this.show = true;

            if (msg) {
                this.msg = msg;
            }
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.bInfo = false;
                this.show = false;
            }, 1500);
        },

        warning: function (msg) {
            this.resetState();
            this.bWarning = true;
            this.show = true;

            if (msg) {
                this.msg = msg;
            }
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.bWarning = false;
                this.show = false;
            }, 1500);
        },

        error: function (msg) {
            this.resetState();
            this.bError = true;
            this.show = true;

            if (msg) {
                this.msg = msg;
            }
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.bError = false;
                this.show = false;
            }, 1500);
        },

        resetState: function () {
            this.bSuccess = false;
            this.bInfo = false;
            this.bWarning = false;
            this.bError = false;
        }
    }
}
</script>




<style lang="scss" scoped>
.dialog-toast {
    position: fixed;
    width: px2rem(450);
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    text-align: center;
    margin: 0 auto;
    height: px2rem(70);
    line-height: px2rem(70);
    border-radius: px2rem(40);
    bottom: px2rem(150);
    left: 0;
    right: 0;
    z-index: 999;
}

.toast-success {
    color: #67c23a;
    background-color: #f0f9eb;
}

.toast-info {
    color: #909399;
    background-color: #f4f4f5;
}

.toast-warning {
    color: #e6a23c;
    background-color: #fdf6ec;
}

.toast-error {
    color: #f56c6c;
    background-color: #fef0f0;
}
</style>
