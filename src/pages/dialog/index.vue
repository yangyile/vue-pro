<template>
<section class="dialog-home">
    <my-header :title="$route.name"></my-header>
    <div class="dialog-main">
        {{ name }}
    </div>
</section>
</template>

<script>
import MyHeader from "components/Header/index";

export default {
    name: 'dialog-home',
    data() {
        return {
            name: 'dialog-home'
        }
    },
    components: {
        MyHeader
    },
    props: [],
    beforeMount() {},
    mounted() {
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.dialog-main {
    margin-top: px2rem(80);
}
</style>
