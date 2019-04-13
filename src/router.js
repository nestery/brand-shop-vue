import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/catalog/item/:id",
      name: "item",
      props: true,
      component: () => import(/* webpackChunkName: "item" */ "./views/Item.vue")
    },
    {
      path: "/cart",
      name: "cart",
      props: true,
      component: () => import(/* webpackChunkName: "cart" */ "./views/Cart.vue")
    },
    {
      path: "/checkout",
      name: "checkout",
      props: true,
      component: () =>
        import(/* webpackChunkName: "checkout" */ "./views/Checkout.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
