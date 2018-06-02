<template>
<div id="app">
    <router-view/>
</div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
@import '@/css/reset.scss';
#app {
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    max-width: 1024px;
    margin: 0 auto;
}
</style>
