import { createStore } from "vuex";
import rootActions from "./rootActions";
import rootGetters from "./rootGetters";
import rootMutations from "./rootMutations";

export default createStore({
  state: {},
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {},
});
