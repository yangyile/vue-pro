<template>
<ul class="list">
    <li
        v-for="(item, index) in items"
        :key="index"
    >{{ item.name }}</li>
</ul>
</template>

<script>
export default {
    data() {
        return {};
    },
    name: "list",
    props: ['items'],
    components: {},
    mounted() {},
    methods: {}
};
</script>



<style lang="scss" scoped>
ul.list {
    li {
        width: 100%;
        height: px2rem(100);
        line-height: px2rem(100);
        padding-left: px2rem(20);
        text-align: left;
    }
    li:nth-child(odd) {
        background-color: #f2f2f2;
    }
}
</style>
