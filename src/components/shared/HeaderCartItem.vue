<template>
  <div class="cart-dropdown-item" :data-id="item.id">
    <span @click="removeItem" class="delete-btn">
      <i class="fas fa-times-circle"></i>
    </span>
    <div
      class="cart-dropdown-item-img"
      :style="{ backgroundImage: `url(${item.img})` }"
    ></div>
    <div class="cart-dropdown-item-info">
      <router-link :to="'/catalog/item/' + item.id">{{
        item.name
      }}</router-link>
      <span>
        <i
          v-for="(star, index) in 5"
          class="fas fa-star"
          :class="{ 'star-active': index < item.rating }"
          :key="index"
        ></i>
      </span>
      <div class="cart-dropdown-item-amount">
        {{ item.quantity }} x {{ item.price | currency }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    removeItem() {
      this.$store.dispatch("removeItem", +this.item.id);
    }
  }
};
</script>
<style lang="scss">
@import "../../scss/variables";
.cart-dropdown-item {
  display: flex;
  position: relative;
  border-bottom: solid 1px #ededed;
  margin-top: 15px;
  padding-bottom: 15px;
}

.delete-btn {
  position: absolute;
  right: 0px;
  top: 32px;
  color: #c0c0c0;
  font-size: 16px;
  font-weight: 400;
  svg {
    z-index: 99;
  }
}

.delete-btn:hover {
  cursor: pointer;
  color: $main-pink;
}

.cart-dropdown-item-img {
  width: 72px;
  height: 85px;
  margin-right: 15px;
  background-size: cover;
}

.empty-cart-info {
  padding: 30px 0px;
  text-align: center;
  background-color: #efefef;
  margin-top: 20px;
}

.empty-catalog-info {
  width: 100%;
  padding: 30px 0px;
  text-align: center;
  background-color: #efefef;
  margin-top: 20px;
}

.cart-dropdown-item-info a {
  display: block;
  padding: 8px 0px;
  color: var(--font-color);
  font-family: Lato;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
}

.cart-dropdown-item-info a:hover {
  color: $main-pink;
}

.cart-dropdown-item-info span {
  color: #b6b6b6;
  font-size: 10px;
  margin-right: -3px;
}
.star-active {
  color: #e4af48 !important;
}

.cart-dropdown-item-amount {
  margin-top: 8px;
  color: $main-pink;
  font-family: Lato;
  font-size: 12px;
  font-weight: 700;
  font-size: 10px;
  word-spacing: 3px;
}

.cart-dropdown-total {
  display: flex;
  justify-content: space-between;
  margin: 15px 0 30px 0;
  color: var(--font-color);
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>
