import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    isLogin: false,
    no_access: true,
    info: JSON.parse(localStorage.getItem('info')) || {},
    todaymoney:false,
    askContent: '',
    isFooter: true,
    nFooter: true
  },
  mutations: {
    setInfo: function (state, info) {
      state.info = info
    },
    setFooterStatus: function (state, status) {
      state.nFooter = status
    },
    setAccess:function (state,status) {
      state.no_access = status
    },
    setTodaymoney: function (state, status) {
      state.todaymoney = status
    },
    logOut: function (state) {
      state.info = {}
      localStorage.removeItem('info')
      localStorage.removeItem('history')
    },
    setAskContent: function (state, askContent) {
      state.askContent = askContent
    },
    setSearchContent: function (state, content) {
      state.searchContent = content
    }
  },
  getters: {
    isLogin: state => {
      if (state.info.user_id) {
        return true
      } else {
        return false
      }
    },
    isFooter: state => {
      if (state.nFooter) {
        return true
      } else {
        return false
      }
    },
    is_access: state => {
      if (state.no_access) {
        return true
      } else {
        return false
      }
    }
  }
})
export default Store

