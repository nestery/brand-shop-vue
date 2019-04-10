<template>
  <div class="promo">
    <div class="container promo-content">
      <div class="promo-text">
        <h1>THE BRAND</h1>
        <h3>OF LUXERIOUS <span class="pink">FASHION</span></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../scss/variables";
.promo {
  height: 613px;
  background-color: #e8e8e8;
}

.promo-content {
  height: 100%;
  background-image: url(../assets/promo.jpg);
  background-position-y: -52px;
}
.promo-text {
  float: left;
  margin-top: 224px;
  border-left: 12px solid $main-pink;
  padding-left: 12px;
  h1 {
    margin-bottom: 15px;
    font-size: 60px;
    letter-spacing: 1.5px;
    line-height: 44px;
  }
  h3 {
    font-size: 40px;
    letter-spacing: 1px;
    line-height: 32px;
  }
}
@media only screen and(max-width: 1080px) {
  .promo {
    height: 443px;
  }

  .promo-text {
    margin-left: 40%;
    margin-top: 15%;
  }
}
</style>
