import Vue from 'vue'
import Vuex from 'vuex'

import task from './modules/task'

import persistedState from '@/plugins/persistedState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    task
  },
  plugins: [persistedState]
})
