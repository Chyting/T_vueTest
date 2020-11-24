<template>
  <div id="transition-vue">
    <div class="transition-vue__first">
      <button @click="show = !show">click me</button>
      <transition name="fale">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'transition-vue',
  data() {
    return {
      show: true
    };
  }
};
</script>
<style lang="less" scoped>
.fale-enter-active {
  transition: all 0.4s ease;
}
.fale-leave-active {
  transform: translate(20px);
  transition: all 0.4s ease;
}
.fale-enter,
.fale-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>