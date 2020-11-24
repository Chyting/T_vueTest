<template>
  <div id="css-animation-test">
    <div class="test-titles">
      <ul>
        <li class="li-style">
          <router-link :to="{name:'box-shadow'}">阴影</router-link>
        </li>
        <li class="li-style">
          <router-link :to="{name:'gradients'}">渐变</router-link>
        </li>
        <li class="li-style">
          <router-link :to="{name:'transform'}">transform</router-link>
        </li>
        <li class="li-style">
          <router-link :to="{name:'animation'}">动画效果</router-link>
        </li>
        <li class="li-style">
          <router-link :to="{name:'niangkou'}">niangkou老师</router-link>
        </li>
        <li class="li-style">
          <router-link :to="{name:'tabcheck'}">tab切换</router-link>
        </li>
        <li class="li-style">
          <router-link :to="{name:'transition-vue'}">vue的过渡属性</router-link>
        </li>
      </ul>
    </div>
    <div class="test-show">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'css-animation-test'
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 1px;
  text-decoration: none;
}
#css-animation-test {
  width: 100%;
  height: 100%;
  display: flex;
  .test-titles {
    width: 200px;
    ul > li {
      height: 30px;
      list-style: none;
      text-align: center;
      border-bottom: 1px solid #cbe97b;
      background-color: #eff2f5;
      letter-spacing: 2px;
      padding: 7px;
      &:hover {
        opacity: 0.7;
      }
    }
  }
  .test-show {
    width: 100%;
    height: 100%;
    border: 1px solid #c989d3;
  }
}
p {
  color: tomato;
}
</style>