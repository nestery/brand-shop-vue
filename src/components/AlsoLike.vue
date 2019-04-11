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
          <div class="hover-mask">
            <div class="cart-btn">
              <svg
                width="20px"
                height="19px"
                viewBox="0 0 32 29"
                style="enable-background:new 0 0 20 19;"
                xml:space="preserve"
              >
                <path
                  d="M0,1.2C0,0.5,0.5,0,1.2,0h4.3c0.5,0,1,0.4,1.1,0.9l4.8,17.5h13.2l4.4-10H14.4c-0.7,0-1.2-0.5-1.2-1.2
                                c0-0.7,0.5-1.2,1.2-1.2h16.4c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.3,0.7,0.1,1.1L26.5,20c-0.2,0.4-0.6,0.7-1.1,0.7H10.6
                                c-0.5,0-1-0.4-1.1-0.9L4.6,2.4H1.2C0.5,2.4,0,1.8,0,1.2L0,1.2z M6.7,26.3c0-1.5,1.3-2.6,2.8-2.6c1.4,0,2.5,1.2,2.6,2.6
                                c0,1.5-1.3,2.6-2.8,2.6C7.9,28.9,6.8,27.7,6.7,26.3z M23.5,26.5c-0.1-1.5,1-2.8,2.5-2.9c1.5-0.1,2.8,1,2.9,2.5
                                c0,0.7-0.2,1.4-0.7,1.9c-0.5,0.5-1.1,0.9-1.8,0.9h-0.2C24.8,29,23.6,27.9,23.5,26.5z"
                />
              </svg>
              Add to Cart
            </div>
          </div>
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
  &:hover {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
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

.hover-mask {
  opacity: 0;
  width: 261px;
  height: 280px;
  position: absolute;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s;
}

.hover-mask:hover {
  opacity: 1;
}

.cart-btn {
  display: inline-block;
  padding: 10px 20px;
  background: none;
  color: #ffffff;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  border: 2px solid #fff;
  position: absolute;
  top: 84px;
  left: 60px;
  line-height: 25px;
  svg {
    width: 20px;
    position: relative;
    top: 4px;
    left: 0px;
  }
  path {
    fill: #fff;
  }
  &:hover {
    color: $font-black;
    background: #ffffff;
    path {
      fill: $font-black;
    }
  }
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
    &:nth-child(7),
    &:nth-child(8) {
      display: none;
    }
  }
  .hover-mask {
    display: none;
  }
}
</style>
