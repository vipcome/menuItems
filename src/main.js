import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import request from './utils/request'
import global from "../src/utils/global_variable"

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.http = request
Vue.prototype.ImgPreUrl = global.webRealPath

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");