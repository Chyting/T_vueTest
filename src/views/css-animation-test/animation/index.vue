<template>
  <div id="animation">
    <div class="bgc">
      <div class="animation-banner">
        <img src="@/assets/scenery2.jpg" title="" />
        <img src="@/assets/scenery3.jpg" title="" />
        <img src="@/assets/scenery4.jpg" title="" />
        <img src="@/assets/scenery5.jpg" title="" />
      </div>
    </div>

  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#animation {
  .bgc {
    width: 1000px;
    height: 400px;
    overflow: hidden;
    border: 1px solid red;
    margin: 20px auto;
  }
  .animation-banner {
    width: 4000px;
    height: 400px;
    animation: donghua 20s eases infinite;
    img {
      width: 1000px;
      height: 100%;
      float: left;
    }
    @keyframes donghua {
      30% {
        margin-left: -1000px;
      }
      60% {
        margin-left: -2000px;
      }
      100% {
        margin-left: -3000px;
      }
    }
  }
}
</style>