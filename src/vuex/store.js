import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions/action-RPCnode'
import * as getters from './getters/getter-RPCnode'

Vue.use(Vuex)

const defaultState = {
  clickedItem: null,
  RPCNodeUrl: '',
  RPCInstance: null
}

const inBrowser = typeof window !== 'undefined'

// if in browser, use pre-fetched state injected by SSR
const state = (inBrowser && window.__INITIAL_STATE__) || defaultState

const mutations = {

  SELECTNODE: (state, object) => {
    state.clickedItem = object.itemNum
    state.RPCNodeUrl = object.rpcUrl
  },
  // eslint-disable-next-line no-unused-vars
  CONNECTRPC: (state, instance) => {
    state.RPCInstance = instance;
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
