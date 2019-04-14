<template>
  <div>
    <app-breadcrumbs></app-breadcrumbs>
    <section v-if="catalogLoaded" class="single-item section" id="start">
      <div class="single-item-slider">
        <div class="container">
          <carousel
            :perPage="1"
            :navigationEnabled="true"
            :paginationEnabled="false"
          >
            <slide class="text-align-center">
              <img :src="item.img" alt="" />
            </slide>
            <slide class="text-align-center">
              <img :src="item.img" alt="" />
            </slide>
            <slide class="text-align-center">
              <img :src="item.img" alt="" />
            </slide>
          </carousel>
        </div>
      </div>
      <div class="single-item-info">
        <div class="container">
          <div class="single-item-brand">
            <h6 class="brand-name pink">{{ item.brand.toUpperCase() }}</h6>
            <div class="single-item-underline">
              <div class="gray-line">
                <div class="pink-line"></div>
              </div>
            </div>
          </div>
          <h6 class="single-item-name">{{ item.name.toUpperCase() }}</h6>
          <p class="single-item-desc">
            Compellingly actualize fully researched processes before proactive
            outsourcing. Progressively syndicate collaborative architectures
            before cutting-edge services. Completely visualize parallel core
            competencies rather than exceptional portals.
          </p>
          <div class="single-item-info">
            <div>
              MATERIAL:
              <span class="text-black"> {{ item.fabric.toUpperCase() }} </span>
            </div>
          </div>
          <h5 class="single-item-price">{{ item.price | currency }}</h5>
          <form class="single-item-add" action="" id="single-item-add">
            <div class="single-item-cust">
              <div class="single-item-select">
                <h6 class="single-item-h6">CHOOSE COLOR</h6>
                <select
                  v-model="color"
                  class="select-gray"
                  name="color"
                  id="color"
                  form="single-item-add"
                >
                  <option v-for="color in colors" :key="color" :value="color">
                    {{ color.toUpperCase() }}
                  </option>
                </select>
              </div>
              <div class="single-item-select">
                <h6 class="single-item-h6">CHOOSE SIZE</h6>
                <select
                  v-model="size"
                  class="select-gray"
                  name="size"
                  id="item-size"
                  form="single-item-add"
                >
                  <option v-for="size in sizes" :key="size">
                    {{ size.toUpperCase() }}
                  </option>
                </select>
              </div>
              <div class="single-item-select ">
                <h6 class="single-item-h6">QUANTITY</h6>
                <input
                  type="number"
                  class="input-gray"
                  form="single-item-add"
                  v-model="quantity"
                  @input="$v.$touch()"
                />
              </div>
            </div>
            <div class="single-item-addbtn">
              <button
                @click.prevent="buyItem"
                type="submit"
                class="btn-reverse"
                :disabled="$v.$error"
              >
                <svg
                  width="26px"
                  height="24px"
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
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <app-also-like></app-also-like>
  </div>
</template>

<script>
import Breadcrumbs from "../components/shared/Breadcrumbs";
import AlsoLike from "../components/AlsoLike";
import { Carousel, Slide } from "vue-carousel";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      color: "",
      size: "",
      quantity: 1
    };
  },
  components: {
    Carousel,
    Slide,
    appBreadcrumbs: Breadcrumbs,
    appAlsoLike: AlsoLike
  },
  props: ["id"],
  computed: {
    ...mapGetters(["catalog", "catalogLoaded"]),
    item() {
      return this.catalog.find(item => {
        return item.id == this.id;
      });
    },
    colors() {
      if (this.catalog.length === 0) return;
      return Object.keys(this.item.stock.color);
    },
    sizes() {
      if (this.color.length > 0) {
        return Object.keys(
          this.item.stock.color[this.color.toLowerCase()].size
        );
      }
      return false;
    }
  },
  methods: {
    buyItem() {
      const id = +this.id;
      const size = this.size;
      const color = this.color;
      const quantity = +this.quantity;

      const item = {
        id,
        size,
        color,
        quantity
      };

      this.$store.dispatch("addToCart", item);
      this.$notify({
        group: "cart",
        type: "cart-notification",
        title: `${this.item.name} ADDED TO CART`,
        text: `COLOR: ${this.color.toUpperCase()}<br>
                        SIZE: ${this.size}<br>
                        QUANTITY: ${this.quantity}`
      });
    }
  },
  created() {
    this.color = this.colors[0];
    this.size = this.sizes[0];
  },
  validations: {
    quantity: {
      min() {
        return this.quantity > 0;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../scss/variables";

.cart-notification {
  border: 1px solid $succ-notification;
  border-radius: 5px;
  color: $succ-notification;
  background: #fff;
  font-family: Lato;
  z-index: 9999;
}

.single-item-slider {
  height: 777px;
  border-bottom: 1px solid #eaeaea;
  img {
    margin: 0 auto;
    width: 600px !important;
  }
}

.single-item-info {
  width: 1140px;
  margin: 0 auto;
  position: relative;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -120px;
    border: 1px solid #eaeaea;
    padding: 70px 250px 120px 250px;
    background: #fff;
    z-index: 1;
    box-sizing: border-box;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  }
  .brand-name {
    margin-bottom: 12px;
    font-size: 14px;
    font-weight: 700;
  }
}
.single-item-underline {
  width: 200px;
}

.gray-line {
  position: relative;
  width: 100%;
  height: 1px;
  border-bottom: solid 1px #eaeaea;
}

.pink-line {
  position: absolute;
  width: 50%;
  top: -1px;
  left: 25%;
  height: 1px;
  border-bottom: solid 3px $main-pink;
}

.single-item-name {
  font-family: Lato;
  margin-top: 18px;
  font-size: 18px;
  font-weight: 900;
  color: #4d4d4d;
  text-transform: uppercase;
}
.single-item-desc {
  margin-top: 60px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.71;
  color: #5e5e5e;
}

.single-item-info {
  display: flex;
  justify-content: center;
  width: 620px;
  margin-top: 25px;
  font-family: Lato;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #b9b9b9;
}

.text-black {
  color: #2f2f2f;
}

.single-item-price {
  color: $main-pink;
  margin-top: 35px;
}

.single-item-add {
  margin-top: 40px;
  width: 642px;
  border-top: 1px solid #eaeaea;
}

.select-gray {
  width: 144px;
  height: 35px;
  padding: 0 15px;
  border: 1px solid #eee;
  color: #bbb;
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    border: 1px solid #4d4d4d;
    color: #4d4d4d;
  }
}

.input-gray {
  padding: 0 15px;
  width: 144px;
  height: 35px;
  border: 1px solid #eee;
  color: #bbb;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  &:hover,
  &:focus {
    border: 1px solid #4d4d4d;
    color: #4d4d4d;
  }
}

.single-item-cust {
  display: flex;
  justify-content: space-around;
  margin-top: 60px;
}

.item-color-red {
  color: red;
}

.single-item-h6 {
  font-family: Lato;
  margin-bottom: 14px;
  font-size: 14px;
  font-weight: 900;
  color: #2f2f2f;
}

.single-item-addbtn {
  margin: 0 auto;
  position: relative;
  width: 572px;
  margin-top: 30px;
  svg {
    position: absolute;
    top: 20px;
    left: 215px;
    cursor: pointer;
  }
  .cart-svg {
    fill: $main-pink;
  }
  &:hover {
    .cart-svg {
      fill: #fff;
    }
  }
}

.btn-reverse {
  font-family: Lato;
  padding: 20px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  color: $main-pink;
  border: 1px solid $main-pink;
  background: #fff;
  transition: color, background 0.1s ease;
}

.btn-reverse:hover {
  cursor: pointer;
  color: #fff;
  background: $main-pink;
}

.btn-reverse[disabled] {
  cursor: not-allowed;
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  .cart-svg {
    fill: #666666;
  }
}
</style>
