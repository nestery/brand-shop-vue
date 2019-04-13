<template>
  <div class="login">
    <h6 class="h6-login">LOGIN</h6>
    <div class="reg-input">
      <p>EMAIL ADDRESS</p>
      <input type="email" required autocomplete="username" />
      <p @click="openSignup" class="new-acc">Create new account</p>
    </div>
    <div class="reg-input">
      <p>PASSWORD</p>
      <input type="password" required autocomplete="current-password" />
    </div>
    <button class="btn-white">LOG IN</button>
    <router-link to="/recovery" class="req-hint">Forgot Password ?</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    openSignup() {
      this.$emit("openSignup");
    }
  }
};
</script>

<style lang="scss">
@import "../../../scss/variables";

.login {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px;
  border: 1px solid $font-black;
  border-radius: 10px;

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
    margin: 32px 0 0 0;
  }
}

.reg-input {
  margin-top: 25px;
  width: 80%;
  p {
    position: relative;
    font-size: 12px;
    font-weight: 700;
    color: $font-black;
  }

  input {
    width: 100%;
    padding: 5px 15px;
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #ffffff;
    outline: none;
    transition: border 0.2s ease;
    &:focus {
      border: 1px solid #4d4d4d;
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
</style>
