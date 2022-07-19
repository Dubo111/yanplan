import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import user from './modules/user'
import mama from './mama'
// default router permission control
// import permission from './modules/permission'

// dynamic router permission control (Experimental)
import permission from './modules/async-router'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    app,
    user,
    permission,
    mama
  },
  state: {},
  mutations: {
    changes(state, dispath) {
      console.log(state, 'Beidiao', dispath)
      state.mama.name += 1
  }
  },
  actions: {
    aaaa(a, b, c) {
      a.state.mama.name += 111
      console.log(a, b, c)
    }
  },
  getters
})
