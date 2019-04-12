<template>
  <section class="also-like">
    <div class="container w100">
      <h5>you may like also</h5>
      <div class="also-cards" id="also-like">
        <router-link
          v-for="item in alsoItems"
          :to="'/catalog/item/' + item.id"
          class="also-card"
          :data-id="item.id"
          :key="item.id"
        >
          <div
            class="card-img"
            :style="{
              'background-image': `url(${item.img})`
            }"
          ></div>
          <div class="card-info">
            <p class="item-name">{{ item.name }}</p>
            <p class="item-price">${{ item.price.toFixed(2) }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["catalog"]),
    //Take 4 items from the middle of catalog(just for example)
    alsoItems() {
      return this.catalog.slice(20, 24);
    }
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

.also-heading {
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

.also-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

.also-card {
  position: relative;
  transition: box-shadow, transform 0.2s;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
  transition: box-shadow, transform 0.2s;
  &:hover {
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.16);
    transform: scale(1.02);
  }
}

.card-img {
  width: 261px;
  height: 280px;
  background-size: cover;
}
.card-info {
  padding: 20px 15px;
}

.item-name {
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 900;
}

.item-price {
  color: $main-pink;
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
}

.also-like {
  display: flex;
  justify-content: center;
  margin-top: 0px;
  h5 {
    font-weight: 900;
    text-transform: uppercase;
    color: #4d4d4d;
    text-align: center;
  }
}
@media only screen and(max-width: 1080px) {
  .also-card {
    width: 31%;
    .card-img {
      width: auto;
      height: 280px;
      background-size: cover;
    }
  }
}
</style>
