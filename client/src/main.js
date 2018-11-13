import Vue from 'vue'
import App from './App'
import router from './router'
//import axios from 'axios'
import qs from 'qs'
import Hashids from 'hashids'
import { WechatPlugin , AlertPlugin, ConfirmPlugin, DatetimePlugin,  LoadingPlugin, ToastPlugin, AjaxPlugin} from 'vux'
import store from './store'
import Public from './assets/js/public'
Vue.use(WechatPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
/*Vue.use(DatetimePlugin);*/
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
Vue.use(AjaxPlugin)
Vue.use(Public);
Vue.prototype.qs = qs;
Vue.prototype.hashids = new Hashids();
Vue.config.productionTip = false;
/*
 Vue.http.post(url1,this.parameter(param)).then((data) => {
  console.log(data)
  return data;
 }).then((data) => {
  console.log(data)
 })
*/

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
