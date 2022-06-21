<script setup>
import { mapGetters } from 'vuex';
</script>
<template>
    <div>
       <div class="container">
        <div class="row">
            <div class="col-6 offset-3 text-center">
                 <form action="#" @submit="send">
            <input type="text" placeholder="categori elave et" v-model="categori.esas" class="form-control mt-3"/>
            <input type="text" placeholder="alt kategori elave et" v-model="categori.alt" class="form-control mt-3"/>
            <button class="btn btn-lg btn-success mt-3"> Send</button>
        </form>

        <select class="mt-3">
            <option v-for="key of categorial.categori" :key="key" >
{{key.alt}}
            </option>
        </select>
         <select class="mt-3">
            <option v-for="key of categorial.categori" :key="key" >
{{key.esas}}
            </option>
        </select>
            </div>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
categori:{
    id:'',
    esas:'',
    alt:''
}
        }
    },
    methods:{
        send(){
this.$store.dispatch('categorial1',this.categori)
        }
    },
    computed:{
...mapGetters(['categorial'])
    }
}
</script>