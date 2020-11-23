<template>
  <div id="gis">
    <div class="gis-lists">
      <ul> 
        <li>
            <router-link :to="{name:'juhe'}">聚合撒点</router-link>
        </li>
         <li>
            <router-link :to="{name:'map-poistion'}">地图定位</router-link>
        </li>
      </ul>
    </div>
    <div class="gis-picture">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name:'gis'
}
</script>
<style lang="less" scoped>
*{
  margin:0;
  padding:0;
  text-decoration:none
}
 #gis{
   display: flex;
   height:100%;
   .gis-lists{
     width:200px;
     height:100%;
     background-color: #eff2f5;
     ul>li{
       list-style: none;
       text-align: center;
       border-bottom:1px solid #CBE97B;
       padding:7px;
       &:hover{
         opacity: 0.8;
       }
     }
   }
   .gis-picture{
     width:100%;
     height:100%
   }
 }
 p{
   color:tomato
 }
</style>