<template>
  <header class="header">
    <div class="container header-flex adapt-hidden">
      <div class="header-left flex-acenter">
        <a class="flex-acenter logo-text" href="/"
          ><img src="../../assets/logo.png" alt="logo" />BRAN
          <span class="logo-D">D</span></a
        >
        <div v-if="browseOpen" class="browse-droplist">
          <div class="droplist-block">
            <p>WOMEN</p>
            <ul>
              <li><a href="catalog.html">Dresses</a></li>
              <li><a href="catalog.html">Tops</a></li>
              <li><a href="catalog.html">Sweaters/Knits</a></li>
              <li><a href="catalog.html">Jackets/Coats</a></li>
              <li><a href="catalog.html">Blazers</a></li>
              <li><a href="catalog.html">Denim</a></li>
              <li><a href="catalog.html">Leggings/Pants</a></li>
              <li><a href="catalog.html">Skirts/Shorts</a></li>
              <li><a href="catalog.html">Accessories</a></li>
            </ul>
            <p>MEN</p>
            <ul>
              <li><a href="catalog.html">Tees/Tank tops</a></li>
              <li><a href="catalog.html">Shirts/Polos</a></li>
              <li><a href="catalog.html">Sweaters</a></li>
              <li><a href="catalog.html">Sweatshirts/Hoodies</a></li>
              <li><a href="catalog.html">Blazers</a></li>
              <li><a href="catalog.html">Jackets/vests</a></li>
            </ul>
          </div>
        </div>
        <form class="flex-acenter" action="#">
          <div @click="browseOpen = !browseOpen" class="browse-btn">
            Browse <i class="fas fa-sort-down dropdown"></i>
          </div>
          <input
            type="text"
            class="search-field"
            placeholder="Search for item..."
          />
          <button class="search-btn"><i class="fas fa-search"></i></button>
        </form>
      </div>
      <div class="header-right flex-acenter">
        <app-header-cart></app-header-cart>
        <div class="btn">My Account &nbsp;<i class="fas fa-sort-down"></i></div>
      </div>
    </div>
    <div class="header-adapt">
      <div class="header-adapt-left">
        <a href=".//" class="adapt-header-link">
          <img src="../../assets/logo.png" alt="logo" class="header-link-img" />
        </a>
        <form action="" class="adapt-search-form">
          <input
            class="adapt-search-input"
            type="text"
            name=""
            id="adapt-search-input"
            placeholder="Search for item..."
          />
          <button class="adapt-search-button">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <div class="adapt-search-btn"><i class="fas fa-search"></i></div>
        <div class="adapt-search-btn" id="search-close-btn">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="header-adapt-right">
        <div class="ham-btn"><i class="fas fa-bars"></i></div>
        <a href="checkout.html" class="acc-btn"><i class="far fa-user"></i></a>
        <a href="cart.html" class="adapt-cart-btn">
          <svg
            width="32px"
            height="29px"
            viewBox="0 0 32 29"
            style="enable-background:new 0 0 32 29;"
            xml:space="preserve"
          >
            <path
              class="adapt-cart-svg"
              d="M0,1.2C0,0.5,0.5,0,1.2,0h4.3c0.5,0,1,0.4,1.1,0.9l4.8,17.5h13.2l4.4-10H14.4c-0.7,0-1.2-0.5-1.2-1.2
                                            c0-0.7,0.5-1.2,1.2-1.2h16.4c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.3,0.7,0.1,1.1L26.5,20c-0.2,0.4-0.6,0.7-1.1,0.7H10.6
                                            c-0.5,0-1-0.4-1.1-0.9L4.6,2.4H1.2C0.5,2.4,0,1.8,0,1.2L0,1.2z M6.7,26.3c0-1.5,1.3-2.6,2.8-2.6c1.4,0,2.5,1.2,2.6,2.6
                                            c0,1.5-1.3,2.6-2.8,2.6C7.9,28.9,6.8,27.7,6.7,26.3z M23.5,26.5c-0.1-1.5,1-2.8,2.5-2.9c1.5-0.1,2.8,1,2.9,2.5
                                            c0,0.7-0.2,1.4-0.7,1.9c-0.5,0.5-1.1,0.9-1.8,0.9h-0.2C24.8,29,23.6,27.9,23.5,26.5z"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderCart from "./HeaderCart";
export default {
  data() {
    return {
      browseOpen: false
    };
  },
  components: {
    appHeaderCart: HeaderCart
  }
};
</script>

<style lang="scss">
@import "../../scss/variables";

.browse-btn {
  padding: 3px 15px;
  color: $font-black;
  font-size: 14px;
  font-weight: 300;
  line-height: 32px;
  background-color: $gray;
  letter-spacing: 0.35px;
  border-radius: 3px 0 0 3px;
  border: 1px solid #e6e6e6;
  transition: background-color 0.1s ease;
  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
}

.dropdown {
  color: #838383;
}

.search-field {
  width: 250px;
  padding: 3px 15px;
  font-size: 14px;
  font-weight: 300;
  line-height: 32px;
  border: none;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  background-color: #ffffff;
  outline: none;
  font-family: Lato;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.35px;
}

.search-btn {
  cursor: pointer;
  color: #a4a4a4;
  padding: 6px 10px 0px 10px;
  font-size: 15px;
  font-weight: 300;
  line-height: 32px;
  border-radius: 0 3px 3px 0;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
  &:hover {
    color: #666;
    background-color: $gray;
  }
}

.header {
  height: 100px;
  border-bottom: 1px solid #ececec;
  background-color: #ffffff;
}

.header-left {
  position: relative;
  a {
    margin-right: 37px;
  }
}

.header-right {
  position: relative;
}

.flex-acenter {
  display: flex;
  align-items: center;
}

.header-flex {
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.btn {
  height: 48px;
  font-size: 16px;
  display: inline-block;
  border: 1px solid $main-pink;
  color: $font-white;
  background-color: $main-pink;
  padding: 13px 20px;
  outline: none;
  box-sizing: border-box;
  transition: background-color, color 0.1s ease;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: $main-pink;
  }
}

.pink {
  color: $main-pink !important;
}

.logo-D {
  font-size: 27px;
  color: $main-pink;
  font-family: "Lato";
  font-weight: 900;
  letter-spacing: 0.68px;
}

.logo-text {
  font-size: 27px;
  font-family: "Lato";
  font-weight: 300;
  letter-spacing: 0.68px;
  img {
    margin-right: 13px;
  }
}

.logo-hidden {
  display: none;
}

.header-adapt {
  display: none;
}
.browse-droplist {
  width: 262px;
  position: absolute;
  top: 66px;
  left: 203px;
  padding: 0px 15px 15px 15px;
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
  z-index: 99;
  &:after {
    content: "";
    position: absolute;
    top: -5px;
    left: 67px;
    width: 7px;
    height: 7px;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
    transform: rotate(45deg);
    z-index: 99;
  }
}

.droplist-block {
  box-sizing: border-box;
  p {
    margin-top: 15px;
    border-bottom: 1px solid #e8e8e8;
    color: #232323;
    font-family: Lato;
    font-size: 14px;
    line-height: 28px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.35px;
  }
  ul {
    margin-top: 10px;
    padding: 0 5px;
  }
  a {
    display: block;
    padding: 7px 0px;
    color: inherit;
    color: #4f4f4f;
    font-family: Lato;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.35px;
    &:hover {
      color: $main-pink;
    }
  }
}

.cart-dropdown {
  width: 262px;
  position: absolute;
  top: 75px;
  left: -17px;
  padding: 0px 17px 20px 17px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16);
  z-index: 9999;
  cursor: auto;
  .btn-white {
    margin: 10px auto;
  }
  &:after {
    content: "";
    position: absolute;
    top: -5px;
    left: 30px;
    width: 7px;
    height: 7px;
    background-color: #fff;
    border-top: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
    transform: rotate(45deg);
    z-index: 99;
  }
}

.cart-dropdown-item {
  display: flex;
  position: relative;
  border-bottom: solid 1px #ededed;
  margin-top: 15px;
  padding-bottom: 15px;
}

.delete-btn {
  position: absolute;
  right: 0px;
  top: 32px;
  color: #c0c0c0;
  font-size: 16px;
  font-weight: 400;
  svg {
    z-index: 99;
  }
}

.delete-btn:hover {
  cursor: pointer;
  color: $main-pink;
}

.cart-dropdown-item-img {
  width: 72px;
  height: 85px;
  margin-right: 15px;
  background-size: cover;
}

.empty-cart-info {
  padding: 30px 0px;
  text-align: center;
  background-color: #efefef;
  margin-top: 20px;
}

.empty-catalog-info {
  width: 100%;
  padding: 30px 0px;
  text-align: center;
  background-color: #efefef;
  margin-top: 20px;
}

.cart-dropdown-item-info a {
  display: block;
  padding: 8px 0px;
  color: var(--font-color);
  font-family: Lato;
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
}

.cart-dropdown-item-info a:hover {
  color: $main-pink;
}

.cart-dropdown-item-info span {
  color: #b6b6b6;
  font-size: 10px;
  margin-right: -3px;
}
.star-active {
  color: #e4af48 !important;
}

.cart-dropdown-item-amount {
  margin-top: 8px;
  color: $main-pink;
  font-family: Lato;
  font-size: 12px;
  font-weight: 700;
  font-size: 10px;
  word-spacing: 3px;
}

.cart-dropdown-total {
  display: flex;
  justify-content: space-between;
  margin: 15px 0 30px 0;
  color: var(--font-color);
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
}

.btn-white {
  display: block;
  width: 180px;
  height: 50px;
  text-align: center;
  box-sizing: border-box;
  line-height: 50px;
  background: #fff;
  border: 1px solid #eaeaea;
  color: #4a4a4a;
  font-family: Lato;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  outline: none;
  transition: color, border 0.1s ease;
  &:hover {
    cursor: pointer;
    border: 1px solid $main-pink;
    color: $main-pink;
  }
}

@media only screen and(max-width: 1080px) {
  .container {
    max-width: 1080px;
    padding: 0 20px;
  }

  .container-nopadding {
    max-width: 1080px;
  }

  .header {
    height: auto;
    border: none;
    background: none;
  }
  .adapt-hidden {
    display: none;
  }
  .header-adapt {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    color: #555;
  }
  .header-adapt-left {
    display: flex;
    align-items: center;
  }
  .adapt-header-link {
    display: flex;
    align-items: center;
    width: 75px;
    height: 75px;
    background: #222;
  }
  .header-link-img {
    width: 44px;
    height: 38px;
    margin-left: 13px;
  }

  .adapt-search-btn {
    display: flex;
    align-items: center;
    margin-top: 6px;
    cursor: pointer;
    margin-left: 20px;
    &:hover {
      color: $main-pink;
    }
  }
  .header-adapt-right {
    display: flex;
    align-items: center;
  }

  .ham-btn,
  .acc-btn {
    margin-right: 24px;
    color: #555;
    cursor: pointer;
    &:link,
    &:visited {
      color: #555;
    }
    &:hover {
      color: $main-pink;
    }
  }

  .adapt-cart-btn {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    width: 75px;
    height: 75px;
    cursor: pointer;
    background: #222;
    box-sizing: border-box;
    &:after {
      content: "2";
      color: #fff;
      font-size: 11px;
      position: absolute;
      top: 14px;
      right: 12px;
      text-align: center;
      line-height: 16px;
      font-weight: 700;
      width: 17px;
      height: 17px;
      background-color: $main-pink;
      border-radius: 50%;
    }
    &:hover .adapt-cart-svg {
      fill: $main-pink;
    }
  }

  .adapt-cart-svg {
    fill: #fff;
  }

  .adapt-search-form {
    display: none;
    align-items: center;
    position: relative;
  }

  .adapt-search-input {
    width: 250px;
    padding: 0px 45px 0 15px;
    font-size: 14px;
    color: #fff;
    font-weight: 300;
    line-height: 75px;
    border: none;
    background-color: #222;
    outline: none;
    font-family: Lato;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0.35px;
  }

  .adapt-search-button {
    position: absolute;
    cursor: pointer;
    right: 0;
    color: #fff;
    padding: 6px 10px 0px 10px;
    font-size: 24px;
    font-weight: 300;
    line-height: 32px;
    border: none;
    background: none;
  }

  #search-close-btn {
    display: none;
  }
}
</style>
