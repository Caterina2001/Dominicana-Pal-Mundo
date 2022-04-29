import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: "",
    user: (localStorage.getItem("currentUser") != "undefined") ? (JSON.parse(localStorage.getItem("currentUser")!)) : null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
