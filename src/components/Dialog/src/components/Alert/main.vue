<template>
    <section class="dialog-alert" v-if="show">
        <div class="dialog-main">{{ name }}</div>
        <dialog-mask></dialog-mask>
    </section>
</template>

<script>
export default {
    name: 'alert',
    data() {
        return {
            name: 'alert',
            show: false
        }
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        showAlert: function() {
            this.show = true;
        },
        hideAlert: function() {
            this.show = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.dialog-alert {
}
</style>
