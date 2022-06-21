<script setup>

import { mapGetters } from 'vuex';

</script>
<template>
    <div>
        <div class="container">
<div class="row">

    <div class="col-6 offset-3">

        <form action="#" @submit.prevent="send" class="m-3">
            <input type="text" v-model="product.name" placeholder="mehsulun adi" class="form-control mt-3" />
            <input type="number" v-model="product.price" placeholder="mehsulun qiymeti" class="form-control mt-3" />

            <div class="d-flex justify-content-between mt-3 align-items-center">
                <button class="btn btn-lg btn-danger" type="button" @click="imageal()" >Change</button>
                <img :src="sekilelaveet.sekil" style="width:200px; height:100px" alt="">
            </div>
            <input type="text" v-model="product.about" placeholder="mehsulun haqqinda" class="form-control mt-3" />
            <button class="btn btn-lg btn-warning mt-3" > Send</button>
        </form>
    </div>
</div>

        </div>
    </div>
</template>
<script>
export default {


    data(){
        return{
            product:{
                name:'',
                price:'',
                img:'',
                about:''
            }
        }
    },
    methods:{
        imageal(){
            this.$store.dispatch('sekilgetir',this.product.name)
        },
        send(){
            this.$store.dispatch('mehsulyolla',this.product)
        }
    },
    computed:{
...mapGetters(['sekilelaveet'])
    }
}



</script>