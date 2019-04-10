import axios from "axios";

const state = {
  catalog: []
};
const mutations = {
  SET_CATALOG(state, items) {
    state.catalog = items;
  }
};
const actions = {
  setCatalog({ commit }) {
    axios
      .get("/catalog.json")
      .then(response => {
        const data = response.data[Object.keys(response.data)[0]];
        return data;
      })
      .then(items => {
        commit("SET_CATALOG", items);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
const getters = {
  catalog(state) {
    return state.catalog;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
