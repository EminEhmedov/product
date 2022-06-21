
<script setup>
import { mapGetters } from 'vuex';

</script>


<template>
    <div>
       <div class="container mt-3">
         <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Mehsul Adi</th>
      <th scope="col">Qiymet</th>
      <th scope="col">Sekili</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="key,index of tablecxart.mehsulls" :key="key">
      <th scope="row">{{index+1}}</th>
      <td>{{key.name}}</td>
     
      <td>{{key.price}}</td>
       <td><img :src="key.img" style="width:200px; height:100px; object-fit:cover;" alt=""></td>
    </tr>
   
    
  </tbody>
</table>
       </div>
    </div>
</template>
<script>
export default {

data(){
    return{

    }
},
computed:{
    ...mapGetters(['tablecxart'])
}


}

</script>