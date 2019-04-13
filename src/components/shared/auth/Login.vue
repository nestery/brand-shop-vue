<template>
  <form class="registered" action="" method="">
    <h6 class="h6-login">LOGIN</h6>
    <p class="p-smallgray">Please log in below</p>
    <div class="reg-input">
      <p>EMAIL ADDRESS<sup>*</sup></p>
      <input type="email" required autocomplete="username" />
    </div>
    <div class="reg-input">
      <p>PASSWORD<sup>*</sup></p>
      <input type="password" required autocomplete="current-password" />
    </div>
    <p class="req-hint"><sup>*</sup>Required Fields</p>
    <input type="submit" class="btn-white" value="LOG IN" />
    <router-link to="/recovery">Forgot Password ?</router-link>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../../scss/variables";

.registered {
  .h6-login {
    text-align: center;
  }
  a {
    padding: 20px 0px;
    font-size: 14px;
    font-weight: 700;
  }
  .btn-white {
    display: inline-block;
    margin: 32px 32px 0 0;
  }
}

.reg-input {
  margin: 25px 0px;
  p {
    position: relative;
    font-size: 12px;
    font-weight: 700;
    color: $font-black;
  }
  sup {
    position: absolute;
    top: -3px;
    font-size: 17px;
    color: #ff0d0d;
  }
  input {
    width: 390px;
    padding: 5px 15px;
    border: 1px solid #e8e8e8;
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    border: 1px solid #e6e6e6;
    background-color: #ffffff;
    outline: none;
    transition: border 0.2s ease;
    &:focus {
      border: 1px solid #4d4d4d;
    }
  }
}

.req-hint {
  font-size: 13px;
  color: #ff0d0d;
  font-weight: 700;
}
</style>
