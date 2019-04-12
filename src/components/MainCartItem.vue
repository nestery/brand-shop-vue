<template>
  <tr :data-id="item.id">
    <td class="cart-details">
      <img :src="item.img" alt="item" class="cart-img" />
      <router-link :to="'/catalog/item/' + item.id" class="prod-info">
        <h6 class="prod-info-h6">{{ item.name }}</h6>
        <p class="prod-info-p">
          Color: &nbsp; <span class="gray-span">{{ item.color }}</span>
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
        type="number"
        class="input-gray cart-qty"
        :value="item.quantity"
        min="1"
        max="9"
      />
    </td>
    <td>
      <div class="cart-subt">
        {{ (item.item.price * item.quantity) | currency }}
      </div>
    </td>
    <td>
      <div class="cart-del">
        <span class="delete-btn"><i class="fas fa-times-circle"></i></span>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"]
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
  width: 54px;
  height: 30px;
  text-align: center;
}

.cart-del {
  position: relative;
  .delete-btn {
    right: 36px;
    top: -10px;
  }
}
</style>
