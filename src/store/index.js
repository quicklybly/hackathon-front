import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth: false,
    login: ''
  },
  getters: {
  },
  mutations: {
    auth(state, login){
      state.isAuth = true;
      state.login = login;
      console.log(state);
    }
  },
  actions: {
  },
  modules: {
  }
})
