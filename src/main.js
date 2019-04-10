import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://aromatiqueshop.firebaseio.com/";
axios.defaults.headers.common["Content-Type"] = "application/json";

Vue.filter("currency", function(value) {
  if (!value) return "";
  return `$${value.toFixed(2)}`;
});

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
