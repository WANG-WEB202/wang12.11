import Vue from 'vue'
import Router from 'vue-router'
import Layout from "../Layout/layout"
import Home from "../view/Home"
import Person from "../view/Person"
import My from "../view/My"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:"layout",
      component:Layout,
      children:[{
        path:'/home',
        component:Home
      },{
        path:"/person",
        component:Person
      },{
        path:'/my',
        component:My
      }]
    }
  ]
})
