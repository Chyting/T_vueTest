<template>
  <div id="gradients">
    <h1 class="title">线性渐变</h1>
    <div class="linear-gradient-lists common">
      <div class="linear-gradients"></div>
      <div class="linear-gradients-1"></div>
      <div class="linear-gradients-2"></div>
      <div class="linear-gradients-3"></div>
    </div>
    <h1 class="title title-1">径向渐变</h1>
    <div class="radial-gradients common">
      <div class="radial-1"></div>
      <div class="radial-2"></div>
      <div class="radial-3"></div>
      <div class="radial-4"></div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
#gradients {
  .title {
    width: 150px;
    height: 40px;
    padding: 0 10px;
    color: white;
    background-color: rgb(136, 182, 235);
    border-radius: 5px;
    margin-bottom: 15px;
    text-align: center;
    margin-left: 20px;
    font-family: '楷体';
    font-weight: 600;
  }
  .title-1 {
    margin-top: 100px;
  }
  .common {
    padding: 30px 0;
  }
  .linear-gradient-lists {
    display: flex;
    justify-content: space-around;
    .linear-gradients {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(#F80F05 10%, #F57F11 20%, #EAE443 40%, #29EE31 60%, #0EE4DE 60%, #5767E8 80%, #BC6DC8 90%);
    }
    .linear-gradients-1 {
      width: 150px;
      height: 150px;
      opacity: 0.9;
      background: linear-gradient(blue, green);
    }
    .linear-gradients-2 {
      width: 150px;
      height: 150px;
      background: linear-gradient(to top, #A205BA, #FBF6FC);
    }
    .linear-gradients-3 {
      width: 150px;
      height: 150px;
      background: linear-gradient(135deg, orange 15%, yellow);
    }
  }
  .radial-gradients {
    display: flex;
    justify-content: space-around;
    .radial-1 {
      width: 150px;
      height: 150px;
      background: radial-gradient(rgb(120, 213, 230), rgb(252, 111, 111));
    }
    .radial-2 {
      width: 150px;
      height: 150px;
      background: radial-gradient(at 20% 20%, black, red);
    }
    .radial-3 {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: radial-gradient(farthest-side circle at 20% 10%, rgb(43, 136, 243), yellow);
    }
    .radial-4 {
      width: 150px;
      height: 150px;
      background: radial-gradient(pink, gray);
    }
  }
}
</style>