<template>
  <div class="feature">
    <a href="#" class="feature-left">
      <div class="feature-text-b">30% <span class="pink">OFFER</span></div>
      <div class="feature-text-s">FOR WOMEN</div>
    </a>
    <div class="feature-right">
      <div class="feature-block">
        <img src="../assets/delivery.svg" alt="delivery" />
        <h6>Free Delivery</h6>
        <p>
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="feature-block">
        <img src="../assets/sale.svg" alt="delivery" />
        <h6>Sales & discounts</h6>
        <p>
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
      <div class="feature-block">
        <img src="../assets/crown.svg" alt="delivery" />
        <h6>Quality assurance</h6>
        <p>
          Worldwide delivery on all. Authorit tively morph next-generation innov
          tion with extensive models.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../scss/variables";
.feature {
  width: 1140px;
  height: 529px;
  margin: 113px auto 0px auto;
  display: flex;
}

.feature-left {
  padding-top: 146px;
  padding-left: 40px;
  width: 767px;
  background-image: url(../assets/offer_img.jpg);
  background-position: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
}

.feature-text-b {
  color: #ffffff;
  font-family: Lato;
  font-size: 54px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.feature-text-s {
  color: #ffffff;
  font-size: 32px;
  letter-spacing: 0.9px;
}

.feature-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 373px;
  padding: 48px 40px;
  background-color: $font-black;
  color: #fbfbfb;
}

.feature-block {
  display: flex;
  flex-wrap: wrap;
  h6 {
    margin-left: 23px;
    color: #fbfbfb;
    font-family: Lato;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  p {
    margin-left: 70px;
    color: #fbfbfb;
    font-family: Lato;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.35px;
  }
  img {
    width: 47px;
  }
}

@media only screen and(max-width: 1080px) {
  .feature {
    width: auto;
    height: 340px;
  }

  .feature-left {
    display: none;
  }

  .feature-right {
    padding: 0;
    width: auto;
    max-width: 1080px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .feature-block {
    width: 31%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      height: 40px;
    }
    h6 {
      margin: 30px 0 15px 0;
    }
    p {
      margin: 0;
    }
  }
}
</style>
