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
        if (response.data) {
          const data = response.data;
          return data;
        } else {
          return [];
        }
      })
      .then(items => {
        console.log(items);
        commit("SET_CART", items);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addToCart({ commit }, item) {
    commit("ADD_TO_CART", item);
    axios
      .put("/cart.json", state.cart)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
const getters = {
  userCart(state, getters) {
    return state.cart.map(item => {
      const record = getters.catalog.find(elem => elem.id === item.id);
      return {
        id: item.id,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
        img: record.img,
        name: record.name,
        brand: record.brand,
        price: record.price,
        fabric: record.fabric,
        rating: record.rating
      };
    });
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
