import VueScroller from 'components/vueScroller/index';

let install = function(Vue, options = {}) {
    Vue.component('vue-scroller', VueScroller);
};

export default install;