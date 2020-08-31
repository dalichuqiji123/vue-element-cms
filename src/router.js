import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// const User = () => import('@/components/layout/layout.vue')
// const Reg = () => import('@/views/reg.vue')
const Login = () => import('@/views/login.vue')
// const Addshop = () => import("@/shop/addcates.vue")

import routes from '@/views'
let arr=[]
routes.map(ele=>{
    if(ele.children){
        ele.children.map(ele=>{
            arr.push({path:ele.path,component:ele.component})
        })
    }
})
//注册路由
const router = new VueRouter({
    mode: 'hash',
    routes: [
        {path:'/',redirect:'/user'},
        ...arr,
        { path: '/login', component: Login },
        // { path: '/shop/addcates', component: Addshop },
    ]
})
export default router