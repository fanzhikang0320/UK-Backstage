import Vue from 'vue'
import Vuex from 'vuex'
import permission from './permission'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      username: 'Hello',
      role: 'admin'
    }
  },
  mutations: {
    // 设置用户信息
    SET_USERINFO: (state,userInfo) => {
      state.userInfo = {...userInfo}
    }
  },
  actions: {
    SetUserInfo: ({ commit },payload) => {
      commit('SET_USERINFO',payload);
    },
    GetUserInfo: ({commit},payload) => {
      commit('SETE_USERINFO',payload)
    }
  },
  modules: {
    permission: permission
  }
})
