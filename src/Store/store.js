import { createStore } from "vuex";
import axios from 'axios'
import router from "../router";


const store=createStore({
    state:{
datarandom:'https://avatars.mds.yandex.net/i?id=8de7105c72dc51243027e7f56f70244c-7058976-images-thumbs&n=13'
,
products:[],
sekil:'https://avatars.mds.yandex.net/i?id=c9a18e9ba040a0c5024478ed3cdaa749-4841399-images-thumbs&n=13',
mehsul:[],
categoriya:[]
    },
    getters:{
addProductGetters(state){
//     return {
// datarandom: state.datarandom
//     }
return {
    datarandom: state.datarandom
}
},
listProductGetters(state){
    return{
        allproduct: state.products
    }
}
,
sekilelaveet(state){
    return{
        sekil:state.sekil
    }
},
tablecxart(state){
    return {
        mehsulls: state.mehsul
    }
    // console.log(state.mehsul);
},
categorial(state){
return {
    categori: state.categoriya
}
}
    },
    mutations:{

    },
    actions:{
imageRandom({state,payload}){
    state.datarandom='https://1.bp.blogspot.com/-wRlbbo_FiaI/VayXP7GmH5I/AAAAAAAAPFU/Z8VyYeIWxEs/s1600/loading-gif1.gif'
    axios.get('https://source.unsplash.com/random/900×700/?fruit').then(({request})=>{
      state.datarandom=request.responseURL
  
    })
},
addProduct({state,commit},payload){
    payload.img=state.datarandom;
axios.post('https://login-5f77c-default-rtdb.firebaseio.com/product.json',payload)
.then(({data})=>{
   payload.id=data.name;
   state.products.push(payload)
    state.datarandom='https://avatars.mds.yandex.net/i?id=8de7105c72dc51243027e7f56f70244c-7058976-images-thumbs&n=13'
         router.replace('/product')
})
}
,
getproducts({state,commit},payload){
axios.get('https://login-5f77c-default-rtdb.firebaseio.com/product.json')
.then(({data})=>{
    for(let key in data){
        data[key].id=key
        state.products.push(data[key])
    }
})
},
sekilgetir({state,commit},payload){
    state.sekil='https://1.bp.blogspot.com/-wRlbbo_FiaI/VayXP7GmH5I/AAAAAAAAPFU/Z8VyYeIWxEs/s1600/loading-gif1.gif'
axios.get(`https://source.unsplash.com/random/900×700/?${payload}`).then(({request})=>{
  state.sekil=request.responseURL
})

},
mehsulyolla({state,commit},payload){
    payload.img=state.sekil

    axios.post('https://login-5f77c-default-rtdb.firebaseio.com/mehsul.json',payload).then(({data})=>{
        payload.id=data.name
        state.mehsul.push(payload)
    
    router.replace('/category')
   
    })
    

    
}
,
dataal({state,commit},payload){
axios.get('https://login-5f77c-default-rtdb.firebaseio.com/mehsul.json')
.then(({data})=>{
    for(let key in data){
        data[key].id=key
        state.mehsul.push(data[key])
     

    }
})
},
categorial1({state,commit},payload){
axios.post('https://login-5f77c-default-rtdb.firebaseio.com/categori.json',payload).then(({data})=>{

    // console.log(data);
    // payload.id=data.name
    // state.categoriya.push(payload)
})
},
categorigetir({state,commit},payload){
    axios.get('https://login-5f77c-default-rtdb.firebaseio.com/categori.json').then(({data})=>{
        
    
      for(let key in data){
        data[key].id=key
        state.categoriya.push(data[key])
      }
      console.log(data);
    })
}
    }
})
export default store