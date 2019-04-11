import Vue from "vue";
import Vuex from "vuex";
import Catalog from "./store/modules/catalog";
import Cart from "./store/modules/cart";
import Auth from "./store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Catalog, Cart, Auth }
});
