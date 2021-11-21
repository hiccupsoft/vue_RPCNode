import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router)


const app = new Vue({
  render: h => h(App),
  router,
  store,
  ...App
}).$mount('#app')

export { app, router, store }
