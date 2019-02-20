const encrypt = {
    path:'/index/encrypt',
    name:'encrypt',
    meta:{
        index:0,
        title:'加解密'
    },
    component:()=>import("@/view/index/encrypt/encrypt")
}
const vuex = {
    path:'/index/vuex',
    name:'vuex',
    meta:{
        index:0,
        title:'store'
    },
    component:()=>import("@/view/index/vuex/vuex")
}
const Verification = {
    path:'/index/Verification',
    name:'Verification',
    meta:{
        index:0,
        title:'Verification'
    },
    component:()=>import("@/view/index/Verification/Verification")
}
export default{
    encrypt,
    vuex,
    Verification
}