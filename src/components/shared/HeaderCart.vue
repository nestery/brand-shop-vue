<template>
  <div>
    <div @click="cartOpen = !cartOpen" class="cart-logo">
      <span v-if="userCart.length > 0" class="cart-badge">{{
        userCart.length
      }}</span>
      <svg
        width="32px"
        height="29px"
        viewBox="0 0 32 29"
        style="enable-background:new 0 0 32 29;"
        xml:space="preserve"
      >
        <path
          class="cart-svg"
          d="M0,1.2C0,0.5,0.5,0,1.2,0h4.3c0.5,0,1,0.4,1.1,0.9l4.8,17.5h13.2l4.4-10H14.4c-0.7,0-1.2-0.5-1.2-1.2
                                        c0-0.7,0.5-1.2,1.2-1.2h16.4c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.3,0.7,0.1,1.1L26.5,20c-0.2,0.4-0.6,0.7-1.1,0.7H10.6
                                        c-0.5,0-1-0.4-1.1-0.9L4.6,2.4H1.2C0.5,2.4,0,1.8,0,1.2L0,1.2z M6.7,26.3c0-1.5,1.3-2.6,2.8-2.6c1.4,0,2.5,1.2,2.6,2.6
                                        c0,1.5-1.3,2.6-2.8,2.6C7.9,28.9,6.8,27.7,6.7,26.3z M23.5,26.5c-0.1-1.5,1-2.8,2.5-2.9c1.5-0.1,2.8,1,2.9,2.5
                                        c0,0.7-0.2,1.4-0.7,1.9c-0.5,0.5-1.1,0.9-1.8,0.9h-0.2C24.8,29,23.6,27.9,23.5,26.5z"
        />
      </svg>
    </div>
    <div v-if="cartOpen" class="cart-dropdown">
      <div class="cart-dropdown-list" id="cart-dropdown-list">
        <div v-if="userCart.length === 0" class="empty-catalog-info">
          CART IS EMPTY
        </div>
        <div v-else>
          <app-header-cart-item
            v-for="(item, index) in userCart"
            :item="item"
            :key="index"
          ></app-header-cart-item>
          <div class="cart-dropdown-total">
            <span class="total-name">TOTAL</span>
            <span class="total-value" id="total-value">{{
              cartTotal | currency
            }}</span>
          </div>
          <router-link to="/checkout" class="btn-white">CHECKOUT</router-link>
          <router-link to="/cart" class="btn-white">GO TO CART</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCartItem from "./HeaderCartItem";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cartOpen: false
    };
  },
  computed: {
    ...mapGetters(["userCart", "cartTotal"])
  },
  components: {
    appHeaderCartItem: HeaderCartItem
  }
};
</script>

<style lang="scss">
@import "../../scss/variables";
.cart-logo {
  position: relative;
  cursor: pointer;
  margin-right: 26px;
  z-index: 999;
  &:hover .cart-svg {
    fill: $main-pink;
  }
  .cart-badge {
    color: #fff;
    font-size: 11px;
    position: absolute;
    top: -5px;
    right: -10px;
    text-align: center;
    line-height: 16px;
    font-weight: 700;
    width: 17px;
    height: 17px;
    background-color: $main-pink;
    border-radius: 50%;
  }
}

.cart-svg {
  fill: $font-black;
}
</style>
