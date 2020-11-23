<template>
  <div>
    <el-button type="primary" size="small">默认聚合</el-button>
    <el-button type="primary" size="small">图片聚合</el-button>
    <div id="map"></div>
  </div> 
</template>
<script>
export default {
  data(){
    return{
      mti:this.$mti,
      map:null,
      styles:[
        {
          value:'精',
          style:{image:{src:require('../../assets/start.png'),scale:0.5}}
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>

</style>