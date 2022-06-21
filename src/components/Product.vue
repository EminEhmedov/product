<script setup>
import { mapGetters } from 'vuex';

</script>

<template>
    <div>
        <div class="container">

         <table class="table mt-3 ">
  <thead>
    <tr>
      <th scope="col">#</th>
       <th scope="col">id</th>
      <th scope="col">ad</th>
       <th scope="col">img</th>
      <th scope="col">qiymet</th>
     
    </tr>
  </thead>
  <tbody>
    <tr v-for="key,index of listProductGetters.allproduct" :key="key">
      <th scope="row">{{index+1}}</th>
       <td>{{key.id}}</td>
      <td>{{key.name}}</td>
      <td><img :src="key.img" style="width:200px; height:100px; object-fit:cover;" alt=""></td>
      <td>{{key.price}}</td>
    </tr>
    
  </tbody>
</table>
        </div>
    </div>
</template>



<script>
export default {

data(){

},
computed:{
  ...mapGetters(['listProductGetters'])
},


}


</script>