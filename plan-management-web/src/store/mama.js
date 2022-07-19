import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        name: 1
    },
    mutations: {
     axiba(state) {
        state += 1
        console.log('axiba')
     }
    },
    actions: {},
    getters: {}
})
