import axios from "axios";

const state = {
  catalog: [],
  catalogLoaded: false
};
const mutations = {
  SET_CATALOG(state, items) {
    state.catalog = items;
  }
};
const actions = {
  setCatalog({ state, commit }) {
    state.catalogLoaded = false;
    return axios
      .get("/catalog.json")
      .then(response => {
        const data = response.data[Object.keys(response.data)[0]];
        return data;
      })
      .then(items => {
        commit("SET_CATALOG", items);
        state.catalogLoaded = true;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
const getters = {
  catalog(state) {
    return state.catalog;
  },
  catalogLoaded(state) {
    return state.catalogLoaded;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
