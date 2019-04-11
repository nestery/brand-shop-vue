<<<<<<< HEAD
import axios from "axios";

const state = {
  cart: []
};
const mutations = {
  SET_CART(state, items) {
    state.cart = items;
  },
  ADD_TO_CART(state, item) {
    state.cart.push(item);
  }
};
const actions = {
  setCart({ commit }) {
    axios
      .get("/cart.json")
      .then(response => {
        const data = response.data[Object.keys(response.data)[0]];
        return data;
      })
      .then(items => {
        commit("SET_CART", items);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addToCart({ commit }, item) {
    commit("ADD_TO_CART", item);
  }
};
const getters = {
  cart(state) {
    return state.cart;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
=======
import axios from "axios";

const state = {
  cart: []
};
const mutations = {
  SET_CART(state, items) {
    state.cart = items;
  },
  ADD_TO_CART(state, item) {
    state.cart.push(item);
  }
};
const actions = {
  setCart({ commit }) {
    axios
      .get("/cart.json")
      .then(response => {
        const data = response.data[Object.keys(response.data)[0]];
        return data;
      })
      .then(items => {
        commit("SET_CART", items);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addToCart({ commit }, item) {
    commit("ADD_TO_CART", item);
  }
};
const getters = {
  cart(state) {
    return state.cart;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
>>>>>>> ec0421d3eb9531cfea7597a1f305ae8486b3b000
