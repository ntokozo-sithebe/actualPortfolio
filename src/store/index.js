import { createStore } from 'vuex'

export default createStore({
  state: {
    cnt: 0
  },
  getters: {
  },
  mutations: {
    setCounter(state, value){
      state.cnt = value
    }
  },
  actions: {
    increment(context){
      context.commit('setCounter', ++context.state.cnt)
    },
    decrement(context){
      if(context.state.cnt > 0)context.commit('setCounter', --context.state.cnt)
    }
  },
  modules: {
  }
})
