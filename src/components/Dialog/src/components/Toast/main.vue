<template>
    <section class="dialog-toast" v-if="show">
        <div class="toast-main"></div>
        <dialog-mask></dialog-mask>
    </section>
</template>

<script>
export default {
    name: 'toast',
    data() {
        return {
            name: 'toast',
            show: false
        }
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        showToast: function() {
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 1500);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
