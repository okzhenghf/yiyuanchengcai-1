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
import Calendar from 'vue-calendar-component';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

Vue.use(BootstrapVue);
Vue.use(ElementUI);
var captUrl = ''
var sourceUrl = ''
var gretUrl = '' 
var jobApiURL=''
 

if (process.env.NODE_ENV === 'development') {

  // development本地测试环境
  // npm run dev
 
  gretUrl=Axios.defaults.baseURL = 'http://localhost/yiyuanchengcai/fenda/public/'
  captUrl = 'http://localhost/yiyuanchengcai/fenda/public/api/capt/setCaptcha'
  sourceUrl = 'http://localhost/yiyuanchengcai/fenda/public/static/api'
  jobApiURL = 'http://localhost/20180305/zhixin/'   
} else {
  // npm run build
  gretUrl=Axios.defaults.baseURL = 'http://www.aoyuankj.com/fenda/public/'
  captUrl = 'http://www.aoyuankj.com/fenda/public/api/capt/setCaptcha/'
  sourceUrl = 'http://www.aoyuankj.com/fenda/public/static/api/'
  jobApiURL = 'http://www.aoyuankj.com/zhixin/'   
  
}

// 跨域请求post会提交option,同时数据要变成json字符串www.aoyuankj.com
var myInterceptor = Axios.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data)
  return config
}, function (error) {
  return Promise.reject(error)
})

Vue.use(MintUi)
Vue.use(ElementUI)
Vue.use(Calendar)
Vue.use(BootstrapVue)

Vue.prototype.$http = Axios
Vue.prototype.$myInterceptor = myInterceptor
Vue.prototype.$captUrl = captUrl
Vue.prototype.$sourceUrl = sourceUrl
Vue.prototype.$gretUrl = gretUrl
Vue.prototype.$jobApiURL = jobApiURL


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
Vue.filter("getDate",function (time) {
   let date = new Date()
   let nTime = date.getTime()-time*1000
   return Math.floor(nTime/86400000)
}) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
