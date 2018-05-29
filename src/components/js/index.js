import VueScroller from 'components/vueScroller/index';
import Mask from 'components/Mask/index';
import Dialog from 'components/Dialog/index';

let install = function(Vue, options = {}) {
    Vue.component('vueScroller', VueScroller);
    Vue.component('dialogMask', Mask);

    Vue.use(Dialog);
};

export default install;