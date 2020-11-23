import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home/index";
Vue.use(Router);

  const routes=[
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path:"/gis",
      name:'gis',
      component:() => import("../views/gis"),
      children:[
        {
          path:"/juhe",
          name:"juhe",
          component:() => import("../views/juhe")
        },
        {
          path:"/map-position",
          name:"map-position",
          component:() => import("../views/map-position")
        }
      ]
    },
    {
      path:"/vuex-test",
      name:'vuex-test',
      component:() => import("../views/vue-test")
    },
    {
      path:'/juhe',
      name:'juhe',
      component:() => import("../views/juhe")
    },
    {
      path:"/a-transfer",
      name:"a-transfer",
      component:() => import("../views/a-transfer")
    },
    {
      path:'/css-animation-test',
      name:'css-animation-test',
      component:() => import("../views/css-animation-test"),
      children:[
        {
          path:'/box-shadow',
          name:'box-shadow',
          component:() => import("../views/css-animation-test/box-shadow")
        },
        {
          path:'/gradients',
          name:'gradients',
          component:() => import("../views/css-animation-test/gradients")
        },
        {
          path:'/transform',
          name:'transform',
          component:() => import("../views/css-animation-test/transform")
        },
        {
          path:'/animation',
          name:'animation',
          component:() => import("../views/css-animation-test/animation")
        },
        {
          path:'/niangkou',
          name:'niangkou',
          component:() => import("../views/css-animation-test/niangkou")
        },
        {
          path:'/tabcheck',
          name:'tabcheck',
          component:() => import("../views/css-animation-test/tabcheck")
        }
      ]
    }
  ]
const router = new Router({
  routes
})

export default router