import VueScroller from 'components/vueScroller/index';
import Mask from 'components/Mask/index';
import { Alert, Confirm, Toast } from 'components/Dialog/index';

let install = function(Vue, options = {}) {
    Vue.component('vueScroller', VueScroller);
    Vue.component('dialogMask', Mask);

    Vue.component('alert', Alert);
    Vue.component('confirm', Confirm);
    Vue.component('toast', Toast);
    Vue.prototype.$toast = Toast;
    Vue.prototype.$confirm = Confirm;
    Vue.prototype.$toast = Toast;
};

export default install;