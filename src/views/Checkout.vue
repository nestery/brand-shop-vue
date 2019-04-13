<template>
  <section class="section checkout">
    <div class="container-flex">
      <form action="" method="">
        <h6 class="form-ship-addr">01. &nbsp; SHIPPING ADDRESS</h6>
        <div class="checkout-wrap">
          <p class="p-capblack">CHECK AS A GUEST OR REGISTER</p>
          <p class="p-smallgray">Register with us for future convenience</p>
        </div>
        <div class="checkout-wrap">
          <input type="radio" class="radio" id="regist" name="reg" checked />
          <label for="regist" value="regist" class="label-capblack"
            >REGISTER</label
          >
          <div class="breaker"></div>
          <input type="radio" class="radio" id="guest" name="reg" />
          <label for="guest" value="guest" class="label-capblack"
            >CHECKOUT AS A GUEST</label
          >
        </div>
        <div class="checkout-wrap">
          <p class="p-capblack">register and save time!</p>
          <p class="p-smallgray">Register with us for future convenience</p>
        </div>
        <div class="checkout-wrap">
          <p class="p-smallgray">
            <i class="fas fa-angle-double-right"></i>Fast and easy checkout
          </p>
          <p class="p-smallgray">
            <i class="fas fa-angle-double-right"></i>Easy access to your order
            history and status
          </p>
        </div>
        <div class="btn-white">CONTINUE</div>
      </form>
      <app-login></app-login>
    </div>
    <div class="container checkout-steps">
      <h6>02. &nbsp; BILLING INFORMATION</h6>
      <h6>03. &nbsp; SHIPPING INFORMATION</h6>
      <h6>04. &nbsp; SHIPPING METHOD</h6>
      <h6>05. &nbsp; PAYMENT METHOD</h6>
      <h6>06. &nbsp; ORDER REVIEW</h6>
    </div>
  </section>
</template>

<script>
import Login from "../components/shared/auth/Login";
export default {
  components: {
    appLogin: Login
  }
};
</script>

<style lang="scss">
@import "../scss/variables";
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
  input {
    margin-top: 10px;
    margin-right: 10px;
  }
  .btn-white {
    margin-top: 40px;
    margin-left: 35px;
  }
  .container-flex {
    padding-bottom: 80px;
    border-bottom: 1px solid #e8e8e8;
  }
}

.container-flex {
  display: flex;
  justify-content: space-between;
  width: 1140px;
  margin: 0 auto;
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
