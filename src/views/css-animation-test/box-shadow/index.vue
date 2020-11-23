<template>
  <div id="box-shadow">
    <div class="text-shadow">
      <p class="english-word">Half a dream, half a wake</p>
      <p class="chinese-word">半梦半醒半浮沉</p>
    </div>
    <div class="box-shadow">
      <div>woshi</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'box-shadow'
};
</script>
<style lang="less" scoped>
#box-shadow {
  height: 100%;
  .text-shadow {
    height: 50%;
    width: 100%;
    border-bottom: 1px dotted black;
    text-align: left;
    p {
      text-align: center;
      height: 20px;
      margin: 20px 10px;
      font-size: 35px;
      letter-spacing: 2px;
    }
    .english-word {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-style: italic;
      color: #A107B8;
      text-shadow: 0 0 10px #CA8BD4;
    }
    .chinese-word {
      margin-top: 50px;
      color: #96EA8D;
      text-shadow: 0 0 10px black inset;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
  }
  .box-shadow {
    height: calc(100% - 50%);
  }
}
</style>