import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from "../views/Index.vue"
import Classify from "../views/Classify.vue"
import My from "../views/My.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/Home"
  },
  {
    path:"/Home",
    component:Home,
    children:[
      {
        path:"/Home/Index",
        component:Index
      },
      {
        path:"/Home/Classify",
        component:Classify
      },
      {
        path:"/Home/My",
        component:My
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
