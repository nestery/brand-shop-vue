<template>
  <section class="section">
    <div class="container flex-col">
      <div class="cart-list">
        <div v-if="userCart.length === 0" class="empty-cart-info">
          YOUR CART IS EMPTY
        </div>
        <table v-if="userCart.length > 0 && cartLoaded" class="cart-table">
          <tbody id="cart-list">
            <tr class="table-header">
              <th>PRODUCT DETAILS</th>
              <th>UNIT PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th>DELETE</th>
            </tr>
            <app-main-cart-item
              v-for="(item, index) in userCart"
              :item="item"
              :key="index"
            ></app-main-cart-item>
          </tbody>
        </table>
      </div>
      <div class="cart-actions">
        <button @click="clearCart" class="btn-white">
          CLEAR SHOPPING CART
        </button>
        <router-link to="/catalog" class="btn-white"
          >CONTINUE SHOPPING</router-link
        >
      </div>
      <div class="cart-order">
        <div class="cart-shipping">
          <h6 class="cart-order-h6">SHIPPING ADDRESS</h6>
          <form action="" class="cart-shipping-form" name="shipping-form">
            <select name="" id="" class="select-gray" required>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Hanoi">Hanoi</option>
              <option value="Denpasar">Denpasar</option>
            </select>
            <input
              type="text"
              class="input-gray"
              placeholder="State"
              required
            />
            <input
              type="text"
              class="input-gray"
              placeholder="Postcode/Zip"
              required
            />
            <button class="btn-white">GET A QUOTE</button>
          </form>
        </div>
        <div class="cart-coupon">
          <h6 class="cart-order-h6">COUPON DISCOUNT</h6>
          <p class="cart-coupon-p">Enter your coupon code if you have one</p>
          <input
            type="text"
            class="input-gray"
            placeholder="Your code"
            required
          />
          <button class="btn-white">APPLY COUPON</button>
        </div>
        <div class="cart-proceed">
          <p class="cart-subtotal">SUB TOTAL</p>
          <span class="cart-subtotal-sum" id="cart-subtotal">{{
            cartTotal | currency
          }}</span
          ><br />
          <div class="cart-grandtotal">
            <h6 class="cart-order-h6">GRAND TOTAL</h6>
            <span class="cart-grandtotal-sum pink" id="cart-grandtotal">{{
              cartTotal | currency
            }}</span>
          </div>
          <button class="btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainCartItem from "../components/MainCartItem";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userCart", "cartLoaded", "cartTotal"])
  },
  components: {
    appMainCartItem: MainCartItem
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearCart");
    }
  }
};
</script>

<style lang="scss">
@import "../scss/variables";

.cart-table {
  width: 100%;
  td {
    padding: 22px 0;
  }
  h6 {
    font-size: 13px;
    color: #222222;
    font-weight: 900;
  }
  td {
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: #eaeaea;
  }
}

.table-header {
  font-size: 13px;
  font-weight: 900;
  letter-spacing: -0.2px;
  color: #222222;
  th:first-of-type {
    text-align: left;
  }
  th {
    padding-bottom: 20px;
    font-weight: inherit;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: #eaeaea;
  }
}
.cart-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 44px;
  .btn-white {
    display: flex;
    align-items: center;
    width: auto;
    height: 50px;
    padding: 0px 40px;
    font-size: 14px;
    font-weight: 900;
    color: #4a4a4a;
    &:hover {
      color: $main-pink;
    }
  }
}

.cart-order-h6 {
  font-size: 16px;
  font-weight: 900;
  color: #222222;
}

.cart-order {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  .btn-white {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 35px;
    margin-top: 23px;
    font-size: 11px;
  }
}

.cart-shipping {
  display: flex;
  flex-direction: column;
  .select-gray,
  .input-gray {
    width: 355px;
    height: 45px;
    margin-top: 20px;
    padding: 0px 18px;
    font-size: 13px;
    font-weight: 400;
    color: #4a4a4a;
  }
  .select-gray {
    padding: 0px 14px;
  }
}

.cart-shipping-form {
  display: flex;
  flex-direction: column;
}

.cart-coupon {
  .input-gray {
    width: 355px;
    height: 45px;
    margin-top: 20px;
    padding: 0px 18px;
    font-size: 13px;
    font-weight: 400;
    color: #4a4a4a;
  }
}

.cart-coupon-p {
  margin-top: 28px;
  font-size: 14px;
  font-weight: 400;
  color: #222;
}

.cart-proceed {
  width: 360px;
  height: 214px;
  text-align: right;
  padding: 40px 44px;
  background-color: #f5f3f3;
  box-sizing: border-box;
  .cart-order-h6 {
    display: inline-block;
    margin-top: 10px;
    margin-right: 16px;
  }
  .btn {
    width: 272px;
    margin-top: 17px;
    font-size: 16px;
    font-weight: 700;
    outline: none;
  }
}

.cart-subtotal {
  display: inline;
  margin-right: 15px;
  font-size: 11px;
  font-weight: 700;
  color: #4a4a4a;
}
.cart-subtotal-sum {
  font-size: 11px;
  font-weight: 700;
  color: #4a4a4a;
}

.cart-grandtotal {
  padding-bottom: 22px;
  border-bottom: 1px solid #e2e2e2;
}

.cart-grandtotal-sum {
  font-weight: 900;
}
</style>
