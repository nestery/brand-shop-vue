<template>
  <footer>
    <div class="footer-main">
      <div class="container footer-wrap">
        <div class="brand-info">
          <a class="flex-acenter logo-text" href="/"
            ><img src="../../assets/logo.png" alt="logo" />BRAN
            <span class="logo-D">D</span></a
          >
          <p>
            Objectively transition extensive data rather than cross functional
            solutions. Monotonectally syndicate multidisciplinary materials
            before go forward benefits. Intrinsicly syndicate an expanded array
            of processes and cross-unit partnerships.<br /><br />
            Efficiently plagiarize 24/365 action items and focused
            infomediaries. Distinctively seize superior initiatives for wireless
            technologies. Dynamically optimize.
          </p>
        </div>
        <div class="footer-company">
          <h6>COMPANY</h6>
          <ul>
            <li class="item"><a href="/">Home</a></li>
            <li class="item"><a href="catalog.html">Shop</a></li>
            <li class="item"><a href="/info/about.html">About</a></li>
            <li class="item">
              <a href="/info/howitworks.html">How It Works</a>
            </li>
            <li class="item"><a href="/info/contacts.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-info">
          <h6>INFORMATION</h6>
          <ul>
            <li class="item">
              <a href="/info/terms.html">Tearms & Condition</a>
            </li>
            <li class="item"><a href="/info/policy.html">Privacy Policy</a></li>
            <li class="item"><a href="/info/buy.html">How to Buy</a></li>
            <li class="item"><a href="/info/sell.html">How to Sell</a></li>
            <li class="item"><a href="/info/promo.html">Promotion</a></li>
          </ul>
        </div>
        <div class="footer-shop">
          <h6>SHOP CATEGORY</h6>
          <ul>
            <li class="item"><a href="catalog.html">Men</a></li>
            <li class="item"><a href="catalog.html">Women</a></li>
            <li class="item"><a href="catalog.html">Child</a></li>
            <li class="item"><a href="catalog.html">Apparel</a></li>
            <li class="item"><a href="catalog.html">Brows All</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© 2017 Brand All Rights Reserved.</p>
        <ul>
          <li class="social">
            <a href="fb.com"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li class="social">
            <a href="twitter.com"><i class="fab fa-twitter"></i></a>
          </li>
          <li class="social">
            <a href="linkedin.com"><i class="fab fa-linkedin-in"></i></a>
          </li>
          <li class="social">
            <a href="pinterest.com"><i class="fab fa-pinterest-p"></i></a>
          </li>
          <li class="social">
            <a href="google.com"><i class="fab fa-google-plus-g"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../scss/variables";
.footer-main {
  margin-top: 120px;
  h6 {
    margin-bottom: 40px;
    color: $main-pink;
    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.45px;
  }
  ul {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      display: block;
      padding: 7px 0px;
      color: #898989;
      font-family: Lato;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.4px;
      letter-spacing: 0.4px;
      &:hover {
        color: $main-pink;
      }
    }
  }
}

.footer-wrap {
  height: 260px;
  display: flex;
  justify-content: space-between;
}

.brand-info {
  width: 428px;
}

.brand-info p {
  margin-top: 29px;
  color: #898989;
  font-family: Lato;
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  /* Text style for "Objectivel" */
  letter-spacing: 0.35px;
}

.footer-bottom {
  height: 80px;
  margin-top: 90px;
  background-color: #e6e6e6;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    display: flex;
  }
  p {
    color: #7a7a7a;
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
  }
  .social {
    margin-left: 8px;
    width: 32px;
    height: 32px;
    background-color: #fff;
    text-align: center;
    a {
      display: block;
      padding: 7px 0px;
      color: #b2b2b2;
      font-size: 16px;
      &:hover {
        color: #fff;
        background-color: $main-pink;
      }
    }
  }
}
</style>
