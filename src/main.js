import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import 'ant-design-vue/dist/antd.css'; 
// import * as mti from './assets/mti-gis-ol'
import router from "./router/router.js";
import store from "./store/store.js";
import AntDesignVue from 'ant-design-vue';
Vue.use(AntDesignVue);
Vue.use(ElementUI)

Vue.config.productionTip = false;
// Vue.prototype.$mti = mti
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
