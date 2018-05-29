<template>
<section class="dialog-home">
    <my-header :title="$route.name"></my-header>
    <div class="dialog-main">
        <span class="btn btn-primary" @click="showAlert">alert</span>
        <span class="btn btn-primary" @click="showConfirm">confirm</span>
        <span class="btn btn-primary" @click="showToast">toast</span>
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
        showAlert: function() {
            this.$alert();
        },
        showConfirm: function() {
            this.$confirm();
        },
        showToast: function() {
            this.$toast();
        }
    }
}
</script>


<style lang="scss" scoped>
.dialog-main {
    padding-top: px2rem(100);
}
</style>
