import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '@/views/category'
import categorylist from '@/views/categorylist'
import product from '@/views/product'
import buycart from '@/views/buycart'
import About from '@/views/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path:'/category',
    name:'category',
    component:Category

  },{
    path:'/categorylist/:id',
    name:'categorylist',
    component: categorylist,
    props:true
  },{
    path:"/product/:id",
    name:"product",
    component:product,
    props:true
  },{
    path:"/buycart",
    name:"buycart",
    component:buycart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
