<template>
<transition name="fade">
    <section class="dialog-toast" v-if="show">
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
            msg: 'ok'
        }
    },
    components: {},
    props: [],
    beforeMount() {},
    mounted() {},
    methods: {
        info: function(msg) {
            if(msg) {
                this.msg = msg;
            }
            this.show = true;
            setTimeout(() => {
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
</style>
