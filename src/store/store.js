import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstName:''
  },
  mutations: {
    saveFirstName(state,name){
      state.firstName = name
    }
  },
  actions: {
    saveFirstName({commit},payload){
      commit('saveFirstName',payload)
    }
  }
});
