import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forget_pheormal:'',
    forget_code:''
  },
  mutations: {
    setForget_Pheormal(state,pheormal){
      state.forget_pheormal = pheormal
    },
    setForget_Code(state,code){
      state.forget_code = code
    }
  },
  actions: {
  },
  modules: {
  }
})
