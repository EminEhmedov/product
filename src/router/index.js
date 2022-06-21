import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../components/Home.vue'
import ContactVue from '../components/Contact.vue'
import ProductVue from '../components/Product.vue'
import AboutViewVue from '../components/About.vue'
import AddProductVue from '../components/AddProduct.vue'
import SignVue from '../components/Sign.vue'
import AddCategoryVue from '../components/AddCategory.vue'
import CategoryVue from '../components/Category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
    name:'Home',
    component:HomeVue
    },
    {
      path:'/contact',
    name:'Contact',
    component:ContactVue
    },
    {
      path:'/about',
    name:'About',
    component:AboutViewVue
    },
    {
      path:'/product',
    name:'Product',
    component:ProductVue
    },
    {
      path:'/addproduct',
    name:'AddProduct',
    component:AddProductVue
    },
    {
      path:'/sign',
    name:'Signin',
    component:SignVue
    },
    {
      path:'/addCategory',
    name:'AddCategory',
    component:AddCategoryVue
    },
    {
      path:'/category',
    name:'Category',
    component:CategoryVue
    }
  ]
})

export default router
