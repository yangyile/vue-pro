import VueScroller from 'components/vueScroller/index';
import Mask from 'components/Mask/index';
import Dialog from 'components/Dialog/index';
import Loading from 'components/Loading/index';

let install = function(Vue, options = {}) {
    Vue.component('vueScroller', VueScroller);
    Vue.component('pageMask', Mask);

    Vue.use(Dialog);
    Vue.use(Loading);
};

export default install;