<template>
  <section class="subscribe section">
    <div class="container container-nopadding flex">
      <div class="feedback-carousel">
        <carousel :autoplay="true" :perPage="1" paginationActiveColor="#f16d7f">
          <slide>
            <div class="feedback">
              <img src="../../assets/feedback_phot01.jpg" alt="photo" />
              <p>
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condimentum a. Aliquam condimentum mattis neque
                sed pretium”
              </p>
              <span class="pink feedback-name">Bin Burhan</span>
              <span class="feedback-town">Dhaka, Bd</span>
            </div>
          </slide>
          <slide>
            <div class="feedback">
              <img src="../../assets/feedback_phot01.jpg" alt="photo" />
              <p>
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condimentum a. Aliquam condimentum mattis neque
                sed pretium”
              </p>
              <span class="pink feedback-name">Bin Burhan</span>
              <span class="feedback-town">Dhaka, Bd</span>
            </div>
          </slide>
          <slide>
            <div class="feedback">
              <img src="../../assets/feedback_phot01.jpg" alt="photo" />
              <p>
                “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
                pulvinar purus condimentum a. Aliquam condimentum mattis neque
                sed pretium”
              </p>
              <span class="pink feedback-name">Bin Burhan</span>
              <span class="feedback-town">Dhaka, Bd</span>
            </div>
          </slide>
        </carousel>
      </div>
      <div class="subscribe-box">
        <div class="wrap">
          <h5>SUBSCRIBE</h5>
          <p>FOR OUR NEWLETTER AND PROMOTION</p>
          <form action="#">
            <input type="email" placeholder="Enter Your Email" required />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: { Carousel, Slide }
};
</script>

<style lang="scss">
@import "../../scss/variables";
.subscribe {
  height: 438px;
  background-image: url(../../assets/sub-back.jpg);
  background-size: cover;
}

.feedback-carousel {
  height: 438px;
  width: 50%;
  border-right: 1px solid #fff;
}

.feedback {
  display: flex;
  flex-wrap: wrap;
  padding: 110px 72px 0px 0px;
  img {
    margin-right: 28px;
    border-radius: 50%;
    height: 83px;
    width: 83px !important;
  }
  p {
    margin-top: 12px;
    max-width: 386px;
    font-style: italic;
    line-height: 26px;
    font-weight: 400;
  }
}

.feedback-name {
  margin-top: 10px;
  margin-left: 112px;
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.feedback-town {
  margin-left: 112px;
  display: block;
  width: 100%;
  color: $font-black;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.3px;
}

.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.subscribe-box {
  width: 550px;
  h5 {
    font-size: 24px;
    letter-spacing: 0.6px;
    line-height: 42px;
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    margin-bottom: 35px;
    font-size: 14px;
    font-weight: 500;
  }
  form {
    input {
      width: 282px;
      height: 46px;
      padding: 0 28px;
      border-radius: 23px 0 0 23px;
      background-color: #e1e1e1;
      color: $font-black;
      font-family: Lato;
      font-size: 14px;
      font-weight: 400;
      line-height: 54px;
      letter-spacing: 0.35px;
      box-sizing: border-box;
      border: 1px solid #e1e1e1;
      border-right: none;
      outline: none;
      transition: border 0.1s ease;
      transition: background-color 0.2s ease;
      &:focus {
        background-color: #fff;
        border: 1px solid $main-pink;
        border-right: none;
      }
    }
    button {
      width: 104px;
      height: 46px;
      margin-left: -4px;
      border-radius: 0 23px 23px 0;
      background-color: $main-pink;
      border: 1px solid $main-pink;
      color: #ffffff;
      font-family: Lato;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.35px;
      transition: background-color, color 0.2s ease;
      &:hover {
        cursor: pointer;
        background-color: #fff;
        color: $main-pink;
      }
    }
  }
}
@media only screen and(max-width: 1080px) {
  .feedback {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 110px 0 0 0;
    img {
      margin-right: 0;
    }
  }

  .feedback-name,
  .feedback-town {
    margin-left: 0;
  }

  .owl-carousel-subscribe {
    width: auto;
    display: flex !important;
    flex-direction: column !important;
  }

  .owl-dots {
    padding-left: 0px !important;
    align-self: center;
  }
}
</style>
