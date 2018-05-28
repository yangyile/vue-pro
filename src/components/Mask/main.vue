<template>
    <section class="mask"></section>
</template>

<script>
export default {
    name: 'DialogMask',
    data() {
        return {}
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {}
}
</script>

<style lang="scss" scoped>
.mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: 999;
}
</style>
