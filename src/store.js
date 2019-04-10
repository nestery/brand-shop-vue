import Vue from "vue";
import Vuex from "vuex";
import Catalog from "./store/modules/catalog";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { Catalog }
});
