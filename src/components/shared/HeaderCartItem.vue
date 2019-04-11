<template>
  <div class="cart-dropdown-item" :data-id="item.id">
    <span class="delete-btn">
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
  props: ["item"]
};
</script>

<style></style>
