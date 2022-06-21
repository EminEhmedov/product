<script setup>

import { RouterView } from 'vue-router';
import NavbarVue from './components/Navbar.vue';
undefined


</script>
<template>
  <div>
    <NavbarVue/>
    <RouterView/>
  </div>
</template>

<script>
export default {

data(){
  return{

  }
},
created(){
  this.$store.dispatch('getproducts')
  this.$store.dispatch('dataal')
  this.$store.dispatch('categorigetir')
}



}


</script>