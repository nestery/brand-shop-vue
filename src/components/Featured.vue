<template>
  <section class="section">
    <div class="container">
      <div class="feautured">
        <div class="feat-heading">
          <h5>FEATURED ITEMS</h5>
          <p>Shop for items based on what we featured in this week</p>
        </div>
        <div class="feat-cards" id="feat-items">
          <router-link
            v-for="item in featuredItems"
            :to="'/catalog/item/' + item.id"
            class="feat-card"
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
        <div class="btn">
          Browse All Product &nbsp; &nbsp;<i
            class="fas fa-long-arrow-alt-right"
          ></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["catalog"]),
    //Take 8 items from the middle of catalog(just for example)
    featuredItems() {
      return this.catalog.slice(12, 20);
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

.feat-card {
  margin-bottom: 40px;
  position: relative;
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

@media only screen and(max-width: 1080px) {
  .feat-card {
    width: 31%;
    .card-img {
      width: auto;
      height: 280px;
      background-size: cover;
    }
  }
}
</style>
