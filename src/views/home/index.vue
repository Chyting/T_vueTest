<template>
  <div id="home">
    <div @click="jump('gis')" class="home-div-style">
      <h1>地图练习</h1>
    </div>
    <div @click="jump('vuex-test')" class="home-div-style">
      <h1>Vuex练习</h1>
    </div>
    <div @click="jump('a-transfer')" class="home-div-style">
      <h1>树形穿梭框</h1>
    </div>
    <div @click="jump('css-animation-test')" class="home-div-style">
      <h1>CSS3动画练习</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  methods: {
    jump(name) {
      this.$router.push({
        name: name
      });
    }
  }
};
</script>
<style lang="less" scoped>
* {
  margin: 10px;
}
#home {
  display: flex;
  .home-div-style {
    font-size: 8px;
    border: 1px solid white;
    border-radius: 5px;
    background-color: #409EFF;
    margin-left: 10px;
    h1 {
      margin: 6px 8px;
      color: white;
      &:hover {
        text-shadow: 0 0 3px #E9D0ED;
      }
    }
    &:hover {
      box-shadow: 0 0 10px white inset;
    }
  }
}
h1 {
  cursor: pointer;
}
</style>