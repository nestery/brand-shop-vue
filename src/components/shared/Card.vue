<template>
  <router-link :to="'/catalog/item/' + item.id" class="card" :data-id="item.id">
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
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style lang="scss">
@import "../../scss/variables.scss";

.card {
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
  .card {
    width: 31%;
    .card-img {
      width: auto;
      height: 280px;
      background-size: cover;
    }
  }
}
</style>
