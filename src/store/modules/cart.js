import axios from "axios";

const state = {
  cart: [],
  cartLoaded: false
};
const mutations = {
  SET_CART(state, items) {
    state.cart = items;
  },
  ADD_TO_CART(state, item) {
    const record = state.cart.find(elem => elem.id === item.id);
    if (record) {
      record.quantity += item.quantity;
    } else {
      state.cart.push(item);
    }
  },
  REMOVE_FROM_CART(state, itemId) {
    const record = state.cart.find(elem => elem.id === itemId);
    const item = state.cart.indexOf(record);
    state.cart.splice(item, 1);
  },
  UPDATE_QUANTITY(state, item) {
    const record = state.cart.find(elem => elem.id === item.id);
    record.quantity = item.quantity;
  },
  CLEAR_CART(state) {
    state.cart = [];
  }
};
const actions = {
  setCart({ commit }) {
    state.cartLoaded = false;
    return axios
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
        commit("SET_CART", items);
        state.cartLoaded = true;
        console.log("Cart has been loaded");
      })
      .catch(err => {
        console.log(err);
      });
  },
  addToCart({ commit }, item) {
    commit("ADD_TO_CART", item);
    axios
      .put("/cart.json", state.cart)
      .then(() => {
        console.log("Item has been added to cart");
      })
      .catch(err => {
        console.log(err);
      });
  },
  removeItem({ commit }, itemId) {
    commit("REMOVE_FROM_CART", itemId);
    axios
      .put("/cart.json", state.cart)
      .then(() => {
        console.log("Item has been removed from cart");
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateQuantityLocal({ commit }, item) {
    commit("UPDATE_QUANTITY", item);
  },
  sendCart() {
    axios
      .put("/cart.json", state.cart)
      .then(() => {
        console.log("Cart has been send to server");
      })
      .catch(err => {
        console.log(err);
      });
  },
  clearCart({ commit }) {
    commit("CLEAR_CART");
    axios
      .put("/cart.json", state.cart)
      .then(() => {
        console.log("Cart has been cleared");
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
      if (record) {
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
      }
    });
  },
  cartTotal(state, getters) {
    return getters.userCart.reduce((total, currentValue) => {
      return total + currentValue.price * currentValue.quantity;
    }, 0);
  },
  cartLoaded(state) {
    return state.cartLoaded;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
