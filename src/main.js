import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
	preload: 1.3,
	loading: require('./assets/imgs/loading.gif'),
	attempt: 1
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
