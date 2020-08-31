import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Store from './index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './utils/api'
Vue.prototype.$http=http
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  Store,
  router,
  render: h => h(App),
}).$mount('#app')
