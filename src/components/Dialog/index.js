import Alert from './src/components/Alert/index';
import Confirm from './src/components/Confirm/index';
import Toast from './src/components/Toast/index';

let $vmAlert = null;
let $vmConfirm = null;
let $vmToast = null;
let dialogEle = null;

export default {
    install: function(Vue, options) {
        if(!dialogEle) {
            dialogEle = document.createElement('div');
            dialogEle.setAttribute('name', 'dialog');
        }
        // 创建alert实例并挂载
        if(!$vmAlert) {
            let alertPlugin = Vue.extend(Alert);

            $vmAlert = new alertPlugin({
                el: document.createElement('div')
            });

            dialogEle.appendChild($vmAlert.$el);
        }
        if(!Vue.prototype.$alert) {
            Vue.prototype.$alert = $vmAlert.showAlert;
        }


        // 创建confirm实例并挂载
        if(!$vmConfirm) {
            let confirmPlugin = Vue.extend(Confirm);

            $vmConfirm = new confirmPlugin({
                el: document.createElement('div')
            });
            dialogEle.appendChild($vmConfirm.$el);
        }
        if(!Vue.prototype.$confirm) {
            Vue.prototype.$confirm = $vmConfirm.showConfirm;
        }


        // 创建toast实例并挂载
        if(!$vmToast) {
            let toastPlugin = Vue.extend(Toast);

            $vmToast = new toastPlugin({
                el: document.createElement('div')
            });
            dialogEle.appendChild($vmToast.$el);
        }
        if(!Vue.prototype.$toast) {
            Vue.prototype.$toast = $vmToast.showToast;
        }
        document.body.appendChild(dialogEle);
    }
}