<template>
<section class="dialog-home">
    <my-header :title="$route.name"></my-header>
    <div class="dialog-main">
        <div class="content-box">
            <span
                class="btn btn-primary"
                @click="showAlert"
            >alert</span>
        </div>

        <div class="content-box">
            <span
                class="btn btn-primary"
                @click="showConfirm"
            >confirm</span>
        </div>

        <div class="content-box">
            <span
                class="btn btn-success"
                @click="showSuccess"
            >success</span>
            <span
                class="btn btn-info"
                @click="showInfo"
            >info</span>
            <span
                class="btn btn-warning"
                @click="showWarning"
            >wraning</span>
            <span
                class="btn btn-error"
                @click="showError"
            >error</span>
        </div>
    </div>
</section>
</template>


<script>
import MyHeader from "components/Header/index";

export default {
    name: 'dialog-home',
    data() {
        return {}
    },
    components: {
        MyHeader
    },
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        showAlert: function () {
            this.$alert('this is a msg.', {});
        },
        showConfirm: function () {
            this.$confirm('this is a msg.', {
                okBtnText: '确定',
                cancelBtnText: '取消'
            }, (status) => {
                console.log(status);
            });
        },
        showSuccess: function() {
            this.$toast.success('success.');
        },
        showInfo: function () {
            this.$toast.info('this is a info.');
        },
        showWarning: function () {
            this.$toast.warning('this is a wraning.');
        },
        showError: function () {
            this.$toast.error('this is a error.');
        }
    }
}
</script>


<style lang="scss" scoped>
.dialog-main {
    padding-top: px2rem(100);
    .content-box {
        text-align: left;
        padding: px2rem(30) 0;
        span {
            display: inline-block;
            margin: px2rem(10);
        }
    }
}
</style>
