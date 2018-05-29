<template>
    <section class="dialog-confirm" v-if="show">
        <div class="confirm-main"></div>
        <dialog-mask></dialog-mask>
    </section>
</template>

<script>
export default {
    name: 'confirm',
    data() {
        return {
            name: 'confirm',
            show: false
        }
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        showConfirm: function() {
            this.show = true;
        },
        hideConfirm: function() {
            this.show = false;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
