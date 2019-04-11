<template>
  <section class="section section-nomar">
    <div class="container ">
      <div class="category">
        <a href="#" class="category-men centering">
          <div class="category-text">
            <h6>HOT DEAL</h6>
            <h4 class="pink">FOR MEN</h4>
          </div>
        </a>
        <a href="#" class="category-accesories centering">
          <div class="category-text">
            <h6>LUXIROUS & TRENDY</h6>
            <h4 class="pink">ACCESORIES</h4>
          </div>
        </a>
        <a href="#" class="category-women centering">
          <div class="category-text">
            <h6>30% OFFER</h6>
            <h4 class="pink">FOR WOMEN</h4>
          </div>
        </a>
        <a href="#" class="category-kids centering">
          <div class="category-text">
            <h6>NEW ARRIVALS</h6>
            <h4 class="pink">FOR KIDS</h4>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss">
.category {
  width: 1140px;
  height: 823px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}

.category-men {
  width: 560px;
  height: 542px;
  background-image: url(../assets/for_men.jpg);
}

.category-women {
  width: 560px;
  height: 261px;
  background-image: url(../assets/women.jpg);
}

.category-accesories {
  width: 560px;
  height: 261px;
  background-color: #dadad2;
  background-image: url(../assets/accesories.jpg);
  background-repeat: no-repeat;
  background-position: right top;
}

.category-kids {
  width: 560px;
  height: 542px;
  background-image: url(../assets/for_kids.jpg);
}

.category-text {
  margin-top: 26px;
  padding: 16px 20px;
  display: inline-block;
  background-color: #fff;
}
@media only screen and(max-width: 1080px) {
  .category {
    height: auto;
    width: auto;
    max-width: 1080px;
    flex-direction: row;
  }

  .category-men {
    background-image: url(../assets/ban-mob4.jpg);
    height: 260px;
    width: 31%;
  }
  .category-women {
    background-image: url(../assets/ban-mob3.jpg);
    height: 260px;
    width: 31%;
  }
  .category-kids {
    background-image: url(../assets/ban-mob2.jpg);
    height: 260px;
    width: 31%;
  }
  .category-accesories {
    margin-top: 30px;
    background-image: url(../assets/ban-mob1.jpg);
    height: 180px;
    width: 100%;
    order: 4;
  }

  .category-text {
    margin: 0;
    padding: 16px 0;
    background: none;
    text-align: center;
    color: #fff;
    border-bottom: 1px solid #fff;
  }

  .section-nomar {
    margin-top: 30px;
  }

  .centering {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
