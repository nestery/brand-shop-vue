<template>
  <tr>
    <td class="cart-details">
      <img :src="item.img" alt="item" class="cart-img" />
      <router-link :to="'/catalog/item/' + item.id" class="prod-info">
        <h6 class="prod-info-h6">{{ item.name }}</h6>
        <p class="prod-info-p">
          Color: &nbsp;
          <span class="gray-span">{{ item.color.toUpperCase() }}</span>
        </p>
        <p class="prod-info-p">
          Size: &nbsp; <span class="gray-span">{{ item.size }}</span>
        </p>
      </router-link>
    </td>
    <td>
      <div class="cart-price">{{ item.price | currency }}</div>
    </td>
    <td>
      <input
        @input="updateQuantityLocal"
        @blur="sendCart"
        v-model="quantity"
        type="number"
        class="input-gray cart-qty"
        min="1"
        max="9"
      />
    </td>
    <td>
      <div class="cart-subt">
        {{ (item.price * quantity) | currency }}
      </div>
    </td>
    <td>
      <div @click="deleteItem" class="cart-del">
        <span class="delete-btn"><i class="fas fa-times-circle"></i></span>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      quantity: this.item.quantity
    };
  },
  props: ["item"],
  methods: {
    deleteItem() {
      this.$store.dispatch("removeItem", this.item.id);
    },
    updateQuantityLocal() {
      const id = this.item.id;
      const quantity = +this.quantity;
      const data = {
        id,
        quantity
      };
      this.$store.dispatch("updateQuantityLocal", data);
    },
    sendCart() {
      this.$store.dispatch("sendCart");
    }
  }
};
</script>

<style lang="scss">
@import "../scss/variables";
.cart-details {
  display: flex;
  text-align: left;
}

.prod-info {
  padding: 13px 0;
  cursor: pointer;
  &:hover .prod-info-h6 {
    color: $main-pink;
  }
}

.cart-img {
  width: 100px;
  height: 115px;
  margin-right: 21px;
}

.prod-info-h6 {
  margin-bottom: 35px;
}

.prod-info-p {
  font-size: 13px;
  font-weight: 700;
  color: #656565;
}
.gray-span {
  font-weight: 300;
  color: #6f6e6e;
}

.cart-price,
.cart-ship,
.cart-subt,
.cart-qty {
  font-weight: 700;
  font-size: 13px;
  color: #858585;
}

.cart-qty {
  width: auto;
  height: 30px;
  text-align: center;
}

.cart-del {
  position: relative;
  .delete-btn {
    right: 50px;
    top: -10px;
  }
}
</style>
