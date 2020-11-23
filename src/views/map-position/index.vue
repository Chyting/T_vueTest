<template>
  <div>
     <el-switch v-model="animation" active-text="开启动画" inactive-text="关闭动画"></el-switch>
    <el-button type="primary" size="small" @click="positionToDefault">恢复到默认范围</el-button>
    <el-button type="primary" size="small" @click="positionToBJ">定位到北京范围</el-button>
    <el-button type="primary" size="small" @click="positionToXA">定位到西安钟楼</el-button>
    <div ref="map" id="map-pane"></div>
  </div>
</template>
<script>
export default {
  // data(){
  //   return{
  //     map:null,
  //     mti:this.$mti,
  //     animation:false
  //   }
  // },
  // computed:{
  //   mti(){
  //     return mti;
  //   }
  // },
  // mounted(){
  //   this.map = this.mti.map(this.$refs.map,{
  //     center:[115.315,32.794],
  //     zoom:3
  //   })
  //   this.mti.addLayer(this.mti.aMap({id:'map-pane'}),this.map)
  // },
  // methods:{
  //   positionToDefault(){
  //     this.mti.view.fitToDefault(
  //       this.map,
  //       {animate:this.animation}
  //     )
  //   }
  // }
}
</script>
<style lang="less" scoped>

</style>