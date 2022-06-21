<script setup>
import  { mapGetters } from 'vuex';



</script>

<template>
    <div>
        <div class="container">

            <div class="row mt-5">
                <div class="col-6 offset-3">

                    <form action="#" @submit.prevent="send">
                        <input type="text" class="form-control" placeholder="Mehsulun adi" v-model="product.name" />

                        <input type="number" class="form-control my-3" placeholder="Mehsulun Qiymeti"
                            v-model="product.price" />
                        <!-- <input type="file" class="form-control" placeholder="Mehsulun Sekili" @change="image" /> -->
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-lg btn-warning" @click="image" type="button"> Random Image</button>
                            <img :src="addProductGetters.datarandom" alt="" style="width:100px ">
                           
                        </div>
                        
                        <input type="text" class="form-control my-3" placeholder="Mehsulun Haqqinda"
                            v-model="product.about" />
                        <button class="btn btn-lg btn-success">Send me</button>
                    </form>

                </div>


            </div>
        </div>
    </div>
</template>
<script>
export default {

    data() {
        return {
            product: {
                name: '',
                price: null,
                img: '',
                about: ''

            }
        }
    },
    computed:{
...mapGetters(['addProductGetters'])
    },
    methods: {
        send() {
this.$store.dispatch('addProduct',this.product)

        },
//        image(e){
// this.product.img=e.target.files
//        }
image(){
    // this.product.img=this.addProductGetters. datarandom
    this.$store.dispatch('imageRandom')
}
    }

}


</script>