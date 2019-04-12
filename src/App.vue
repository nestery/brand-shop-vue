<template>
  <div class="wrapper">
    <div class="top">
      <app-header></app-header>
      <app-nav></app-nav>
      <router-view />
      <app-subscribe></app-subscribe>
    </div>
    <app-footer></app-footer>
    <notifications group="cart" />
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Nav from "./components/shared/Nav";
import Subscribe from "./components/shared/Subscribe";

export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
    appNav: Nav,
    appSubscribe: Subscribe
  },
  created() {
    this.$store.dispatch("setCatalog");
    this.$store.dispatch("setCart");
  }
};
</script>

<style lang="scss">
@import "./src/scss/variables.scss";
@import "./src/scss/style.scss";
@import "./src/scss/common.scss";
</style>
