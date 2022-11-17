import { createStore } from "vuex";
import rootActions from "./rootActions";
import rootGetters from "./rootGetters";
import rootMutations from "./rootMutations";

// Modules
import productsModule from "./modules/products";
import cart from "./modules/cart";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules: {
    products: productsModule,
    cart: cart,
  },
});
