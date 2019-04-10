<template>
  <div class="breadcrumbs">
    <div class="container flex-spacebtw">
      <h5>NEW ARRIVALS</h5>
      <ul>
        <li><a href="/" class="crumb">HOME</a>/</li>
        <li><a href="catalog.html" class="crumb">MEN</a>/</li>
        <li><a class="crumb current">NEW ARRIVALS</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../scss/variables";

.breadcrumbs {
  height: 80px;
  background-color: #f8f3f4;
  h5 {
    color: $main-pink;
    font-family: "Lato";
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
  }
  li {
    display: inline-block;
    font-size: 14px;
    color: #636363;
    font-family: "Lato";
    font-weight: 300;
  }
}

.crumb:hover {
  color: $main-pink;
}

.flex-spacebtw {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.current {
  color: $main-pink !important;
  font-weight: 700 !important;
}

.menu-link-active {
  border-bottom: 2px solid $main-pink;
}
</style>
