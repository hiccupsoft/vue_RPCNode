import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const defaultState = {
  clickedItem: null
}

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {

  CLICKNODE: (state, itemNum) => {
    state.clickedItem = itemNum
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
