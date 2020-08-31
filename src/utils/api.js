import axios from './fetch'
// export function getList(params){
//      return axios({
//         url:'/topics',
//         method:'GET',
//         params
//     })
// }
//注册
export function fetchSubmit(data){
    return axios({
        url:'/api/v1/users/cms/reg',
        method:"POST",
        data
    })
}
//登录
export function fetchLogin(data){
    return axios({
        url:'/api/v1/users/cms/login',
        method:"POST",
        data
    })
}
//添加商品类型
export function fetchAdd(params){
    return axios({
        url:'/api/v1/cates/add',
        method:"GET",
        params
    })
}
//获取所有的商品类型
export function fetchgetshop(params){
    return axios({
        url:'/api/v1/cates/getshop',
        method:"GET",
        params
    })
}
// 添加商品
export function fetchaddgoods(data){
    return axios({
        url:'/api/v1/goods/addgoods',
        method:'POST',
        data
    })
}
//获取商品
export function fetchgetgoods(params){
    return axios({
        url:'/api/v1/goods/getgoodslist',
        method:'POST',
        data:params
    })
}
//获取商品详情
export function fetchgetgooddetail(params){
    return axios({
        url:'api/v1/goods/getgooddetail',
        method:'GET',
        params
    })
}
//删除商品
export function fetchdeletegood(data){
    return axios ({
        url:'api/v1/goods/deletegood',
        method:"POST",
        data
    })
}
//上传轮播图
export function fetchsubmitchar(data){
    return axios({
        url:'api/v1/jd/ads/create',
        method:'POST',
        data
    })
}
export  default  {
    fetchSubmit,
    fetchLogin,
    fetchAdd,
    fetchgetshop,
    fetchaddgoods,
    fetchgetgoods,
    fetchdeletegood,
    fetchgetgooddetail,
    fetchsubmitchar
}