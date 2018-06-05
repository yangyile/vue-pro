<template>
<transition name="fade">
    <section class="dialog-toast" v-if="show" :class="{ 'toast-success': bSuccess, 'toast-info': bInfo, 'toast-warning': bWraning, 'toast-error': bError }">
        {{ msg }}
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
            bWraning: false,
            bError: false,
            timeoutId: ''
        }
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        success: function(msg) {
            this.bSuccess = true;
            this.show = true;

            if(msg) {
                this.msg = msg;
            }
            if(this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.bSuccess = false;
                this.show = false;
            }, 1500);
        },

        info: function(msg) {
            this.bInfo = true;
            this.show = true;

            if(msg) {
                this.msg = msg;
            }
            if(this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.bInfo = false;
                this.show = false;
            }, 1500);
        },

        warning: function(msg) {
            this.bWraning = true;
            this.show = true;
            if(msg) {
                this.msg = msg;
            }
            if(this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.bWraning = false;
                this.show = false;
            }, 1500);
        },

        error: function(msg) {
            this.bError = true;
            this.show = true;
            if(msg) {
                this.msg = msg;
            }
            if(this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this.bError = false;
                this.show = false;
            }, 1500);
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
