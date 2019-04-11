<template>
  <div>
    <app-promo></app-promo>
    <app-sale></app-sale>
    <app-featured></app-featured>
    <app-banner></app-banner>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Sale from "../components/Sale";
import Promo from "../components/Promo";
export default {
  components: {
    appBanner: Banner,
    appFeatured: Featured,
    appSale: Sale,
    appPromo: Promo
  }
};
</script>

<style></style>
