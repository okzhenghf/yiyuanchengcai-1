// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import qs from 'qs'
import VueTimeago from 'vue-timeago'
Axios.defaults.withCredentials = true
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
var captUrl = ''
var sourceUrl = ''
if (process.env.NODE_ENV === 'development') {
  // development本地测试环境
  Axios.defaults.baseURL = 'http://localhost/yiyuanchengcai/fenda/public'
  captUrl = 'http://localhost/yiyuanchengcai/fenda/public/api/capt/setCaptcha'
  sourceUrl = 'http://localhost/yiyuanchengcai/fenda/public/static/api'
} else {
  Axios.defaults.baseURL = 'http://192.168.0.150/fenda/public/index.php'
  captUrl = 'http://192.168.0.150/fenda/public/index.php/api/capt/setCaptcha'
  sourceUrl = 'http://192.168.0.150/fenda/public/static/api'
}

// 跨域请求post会提交option,同时数据要变成json字符串www.aoyuankj.com
var myInterceptor = Axios.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config
}, function (error) {
  return Promise.reject(error)
})

Vue.use(MintUi)
Vue.prototype.$http = Axios
Vue.prototype.$myInterceptor = myInterceptor
Vue.prototype.$captUrl = captUrl
Vue.prototype.$sourceUrl = sourceUrl
Vue.config.productionTip = false
router.beforeEach(function (to, from, next) {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  window.scrollTo(0, 0)
  next()
})
Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'zh-CN',
  locales: {
    // you will need json-loader in webpack 1
    'zh-CN': require('vue-timeago/locales/zh-CN.json')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
