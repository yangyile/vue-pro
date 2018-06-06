<template>
    <section class="loading-home">
        <my-header :title="$router.name"></my-header>
        <span class="btn btn-primary" @click="showLoading">loading</span>
    </section>
</template>

<script>
import MyHeader from "components/Header/index";

export default {
    name: 'loadingHome',
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
        showLoading: function() {
            this.$loading.showLoading();
            setTimeout(() => {
                this.$loading.closeLoading();
            }, 1500);
        }
    }
}
</script>

<style lang="scss" scoped>
.loading-home {
    padding-top: px2rem(80);
}
</style>
