import Loading from './main.vue';

let $vmLoading = null;
let install = function(Vue, options) {
    if(!$vmLoading) {
        let loadingPlugin = Vue.extend(Loading);
        $vmLoading = new loadingPlugin({
            el: document.createElement('div')
        });
        document.body.appendChild($vmLoading.$el);
    }
    if(!Vue.prototype.$loading) {
        Vue.prototype.$loading = $vmLoading;
    }
};
export default install;