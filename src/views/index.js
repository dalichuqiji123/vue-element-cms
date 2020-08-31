// 商品管理
const addcates =()=> import ('../shop/addcates.vue')
const addgoods = () => import ('../shop/addgoods.vue')
const goodslist= () => import('../shop/goodslist.vue')
const char=()=> import('../shop/char.vue')
const reg=()=>import('../views/reg.vue')
export default [
    { 
        id:1,
        text:'用户中心',
        icon:'el-icon-location',
        path:'/user',
        children:[
            {
                id:11,
                text:'注册',
                path:'/user/reg',
                component:reg,
            },
        ]
    },
    { 
        id:2,
        text:'商品管理',
        icon:'el-icon-menu',
        path:'/shop',
        children:[
            {
                id:21,
                text:'添加商品类别',
                path:'/shop/addcates',
                component:addcates,
            },
            {
                id:22,
                text:'添加商品',
                path:'/shop/addgoods/:id',
                component:addgoods,
            },
            {
                id:23,
                text:'商品列表',
                path:'/shop/goodslist',
                component:goodslist,
            },
            {
                id:24,
                text:'添加轮播图',
                path:'/shop/char',
                component:char,
            }
        ]
    },
    { 
        id:3,
        text:'关于我们',
        icon:'el-icon-setting',
        path:'/home',
        children:[
            {
                id:21,
                text:'添加商品类别',
                path:'/shop/addcates',
                component:addcates,
            },
            {
                id:22,
                text:'添加商品',
                path:'/shop/addgoods',
                component:addgoods,
            },
        ]
    }
]