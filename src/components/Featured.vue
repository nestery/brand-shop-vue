<template>
  <section class="section">
    <div class="container">
      <div class="feautured">
        <div class="feat-heading">
          <h5>FEATURED ITEMS</h5>
          <p>Shop for items based on what we featured in this week</p>
        </div>
        <div class="feat-cards" id="feat-items">
          <app-card
            v-for="item in featuredItems"
            :item="item"
            :key="item.id"
          ></app-card>
        </div>
        <router-link to="/catalog" tag="div" class="btn">
          Browse All Product &nbsp; &nbsp;<i
            class="fas fa-long-arrow-alt-right"
          ></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./shared/Card";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["catalog"]),
    //Take 8 items from the middle of catalog(just for example)
    featuredItems() {
      return this.catalog.slice(12, 20);
    }
  },
  components: {
    appCard: Card
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/variables";
.feautured {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feat-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    font-size: 30px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0.75px;
  }
  p {
    color: #9f9f9f;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.35px;
  }
}

.feat-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}
</style>
