<template>
  <section class="section checkout flex-column container">
    <h4 class="text-center mb-3">CHECKOUT</h4>
    <div>
      <div class="w50 flex-column checkout-wrapper">
        <h6 class="form-ship-addr mt-3">01. &nbsp; SHIPPING ADDRESS</h6>
        <transition
          name="slide"
          enter-active-class="animated faster rollInDown"
          leave-active-class="animated faster rollOutUp"
        >
          <div v-if="currentStep === 1" class="overflow-h">
            <div class="checkout-input mb-3">
              <p>NAME</p>
              <span class="checkout-tip"
                >Enter your full name e.g. John Doe</span
              >
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>COUNTRY</p>
              <span class="checkout-tip">Enter your country name</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>CITY</p>
              <span class="checkout-tip">Enter your city name</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>ADDRESS LINE</p>
              <span class="checkout-tip"
                >Enter your address e.g. Nowhere st. 15</span
              >
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>ZIP/Postal</p>
              <span class="checkout-tip">Enter your ZIP e.g. 123432</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="buttons-wrap">
              <div @click="currentStep = 2" class="btn-white--sm">NEXT</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="w50 flex-column checkout-wrapper">
        <h6 class="form-ship-addr mt-3">02. &nbsp; BILLING INFORMATION</h6>
        <transition
          name="slide"
          enter-active-class="animated faster rollInDown"
          leave-active-class="animated faster rollOutUp"
        >
          <div v-if="currentStep === 2" class="overflow-h">
            <div class="checkout-input mb-3">
              <p>NAME</p>
              <span class="checkout-tip"
                >Enter your full name e.g. John Doe</span
              >
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>COUNTRY</p>
              <span class="checkout-tip">Enter your country name</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>CITY</p>
              <span class="checkout-tip">Enter your city name</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>ADDRESS LINE</p>
              <span class="checkout-tip"
                >Enter your address e.g. Nowhere st. 15</span
              >
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>ZIP/Postal</p>
              <span class="checkout-tip">Enter your ZIP e.g. 123432</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="buttons-wrap">
              <div @click="currentStep = 1" class="btn-white--sm">BACK</div>
              <div @click="currentStep = 3" class="btn-white--sm">NEXT</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="w50 flex-column checkout-wrapper">
        <h6 class="form-ship-addr mt-3">03. &nbsp; SHIPPING METHOD</h6>
        <transition
          name="slide"
          enter-active-class="animated faster rollInDown"
          leave-active-class="animated faster rollOutUp"
        >
          <div v-if="currentStep === 3" class="overflow-h">
            <div class="checkout-wrap">
              <p class="p-capblack">SELECT SHIPPING METHOD</p>
              <p class="p-smallgray">Payment after all steps</p>
            </div>
            <div class="checkout-wrap mb-5">
              <input
                type="radio"
                class="radio"
                id="credit"
                name="reg"
                checked
              />
              <label for="credit" value="credit" class="label-capblack"
                >Boxberry</label
              >
              <div class="breaker"></div>
              <input type="radio" class="radio" id="paypal" name="reg" />
              <label for="paypal" value="paypal" class="label-capblack"
                >ESM</label
              >
              <div class="breaker"></div>
              <input type="radio" class="radio" id="paypal" name="reg" />
              <label for="paypal" value="paypal" class="label-capblack"
                >From pickpoint</label
              >
            </div>
            <div class="buttons-wrap">
              <div @click="currentStep = 2" class="btn-white--sm">BACK</div>
              <div @click="currentStep = 4" class="btn-white--sm">NEXT</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="w50 flex-column checkout-wrapper">
        <h6 class="form-ship-addr mt-3">04. &nbsp; PAYMENT METHOD</h6>
        <transition
          name="slide"
          enter-active-class="animated faster rollInDown"
          leave-active-class="animated faster rollOutUp"
        >
          <div v-if="currentStep === 4" class="overflow-h">
            <div class="checkout-wrap">
              <p class="p-capblack">SELECT PAYMENT METHOD</p>
              <p class="p-smallgray">Payment after all steps</p>
            </div>
            <div class="checkout-wrap mb-5">
              <input
                type="radio"
                class="radio"
                id="credit"
                name="reg"
                checked
              />
              <label for="credit" value="credit" class="label-capblack"
                >CREDIT CARD</label
              >
              <div class="breaker"></div>
              <input type="radio" class="radio" id="paypal" name="reg" />
              <label for="paypal" value="paypal" class="label-capblack"
                >PayPal</label
              >
            </div>
            <div class="buttons-wrap">
              <div @click="currentStep = 3" class="btn-white--sm">BACK</div>
              <div @click="currentStep = 5" class="btn-white--sm">NEXT</div>
            </div>
          </div>
        </transition>
      </div>
      <div class="w50 flex-column checkout-wrapper">
        <h6 class="form-ship-addr mt-3">05. &nbsp; ORDER REVIEW</h6>
        <transition
          name="slide"
          enter-active-class="animated faster rollInDown"
          leave-active-class="animated faster rollOutUp"
        >
          <div v-if="currentStep === 5" class="overflow-h">
            <div class="checkout-input mb-3">
              <p>NAME</p>
              <span class="checkout-tip"
                >Enter your full name e.g. John Doe</span
              >
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>COUNTRY</p>
              <span class="checkout-tip">Enter your country name</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>CITY</p>
              <span class="checkout-tip">Enter your city name</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>ADDRESS LINE</p>
              <span class="checkout-tip"
                >Enter your address e.g. Nowhere st. 15</span
              >
              <input type="text" autocomplete="username" />
            </div>
            <div class="checkout-input mb-3">
              <p>ZIP/Postal</p>
              <span class="checkout-tip">Enter your ZIP e.g. 123432</span>
              <input type="text" autocomplete="username" />
            </div>
            <div class="buttons-wrap">
              <div @click="currentStep = 4" class="btn-white--sm">BACK</div>
              <div @click="placeOrder" class="btn-white--sm">PLACE ORDER</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1
    };
  },
  methods: {
    placeOrder() {}
  }
};
</script>

<style lang="scss">
@import "../scss/variables";
.buttons-wrap {
  display: flex;
  justify-content: space-between;
}

.checkout-wrapper {
  padding-bottom: 30px;
  border-bottom: 1px solid $font-black;
}

.checkout-tip {
  font-size: 12px;
  color: #b3b2b2;
}

.checkout-input {
  width: 100%;
  p {
    margin-bottom: -6px;
    position: relative;
    font-size: 12px;
    font-weight: 700;
    color: $font-black;
  }

  input {
    width: 100%;
    padding: 2px 10px 2px 0;
    font-size: 18px;
    font-weight: 300;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    background-color: #ffffff;
    outline: none;
    transition: border 0.2s ease;
    &:focus {
      border-bottom: 1px solid #4d4d4d;
    }
  }
  .new-acc {
    color: #b3b2b2;
    cursor: pointer;
    &:hover {
      color: $main-pink;
    }
  }
}

.form-ship-addr {
  margin-bottom: 20px;
  color: var(--font-color);
  font-family: Lato;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
}

.p-smallgray {
  margin-top: 10px;
  color: #b3b2b2;
  font-family: Lato;
  font-size: 13px;
  font-weight: 400;
}

.p-capblack {
  color: var(--font-color);
  font-family: Lato;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
}

.checkout-wrap {
  margin-top: 30px;
  margin-left: 35px;
}

.checkout {
  margin-top: 40px;
}

.checkout-steps h6 {
  padding: 33px 0px;
  font-family: Lato;
  font-size: 16px;
  font-weight: 900;
  color: $font-black;
  border-bottom: 1px solid #e8e8e8;
}

/* Radio button styling */
.radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
  margin: 10px 0 0 7px;
}

.radio + label {
  position: relative;
  padding: 0 0 0 30px;
  cursor: pointer;
}

.radio + label:before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  width: 11px;
  height: 11px;
  border: 2px solid $font-black;
  border-radius: 50%;
  background: #fff;
}

.radio + label:after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: $font-black;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: 0.2s;
}
.radio:checked + label:after {
  opacity: 1;
}

.label-capblack {
  color: $font-black;
  font-family: Lato;
  font-size: 12px;
  font-weight: 700;
}

.breaker {
  margin-top: 7px;
}
</style>
