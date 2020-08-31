# vue-element-cms
环境搭建好之后
<!-- 安装项目依赖插件 -->

### 一、集成路由配置：
```
    1、集成路由插件下载：cnpm install vue-router -S(项目依赖) 
    2、下载完成后在src目录下新创建一个router.js文件，然后在里面配置路由。
    配置路由代码如下：
        import Vue from 'vue'
        import VueRouter from 'vue-router'
        Vue.use(VueRouter)
        例如：
        const 组件名 =()=> import ('组件的路径')//组件懒加载
        const router=new VueRouter({
            {path:'路由路径',component:'组件名'}
            {path:'*',redirecet:'路由路径'}//重定向，当没有填地址时，自动跳转到 路由路径这个地址。
        })
        export default router
    //全局使用路由，在路口main.js中挂载路由对象
    4、挂载代码如下：
        先引入：import router from '/router'
        再挂载：
        new Vue({
            router,
            render: h => h(App),
        }).$mount('#app')
```
### 二、vuex状态管理的配置
```
    1、安装插件：cnpm install vuex -S(项目依赖)
    2、安装好之后：在src目录下新建一个index.js文件，然后在里面配置vuex。
    配值代码如下：
    import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const Store = new Vuex.Store({
        state:{},
        getters:{},
        mutations:{},
        actions:{}
    })
    export default Store
    3、//全局使用vuex，在路口文件main.js里面挂载vuex
    4、挂载代码如下：
        先引入：import Store form '/index'
        再挂载：
        new Vue({
            Store,
            Router,
            render: h => h(App),
        }).$mount('#app')
```
### 三、scss的配置
```
    1、安装插件：cnpm install sass sass-loader -D(开发依赖) //这里安装了 sass 和 sass-loader 两个插件。
    2、安装完之后使用只需要在vue组件里面style标签里面加一个属性：lang='scss' //注意是scss。
```
### 四、axios的配置
```
    1、安装插件：cnmp i axios -S(项目依赖)
    2、在src目录下新建一个文件夹，名为utils。然后在utils里面建两个文件，fetch.js文件 和 api.js文件
    3、fetch.js的配置如下：
    import axios from 'axios'
    const instance =axios.create({
    baseURL:'',
    timeout:7000,
    headers:{}
    })
    //请求拦截器：发送请求时的验证
    instance.interceptors.request.use(function(config){
        return config
    },function(error){
    return Promise.reject(error)
    })
    //接收响应数据时过滤一些不需要的东西
    instance.interceptors.response.use(function(response){
    if(response.status==200){
        if(response.data&&response.data.msg){
            return response.data.data
        }else{
            alert('网络异常')
        }
    }
    },function(error){
        return Promise.reject(error)
    })
    export default instance
    4、api.js代码如下:
    先从fetch文件夹里面引入axios
    import axios from '.fetch'
    然后接着就是一个个调用接口的函数例如：
    export function getlist(params){//一般来讲GET请求用的参数是params 而POST请求用的是data
        return axios({
            url:'',
            method:'GET',
            params
        })
    }
    //导出定义的函数
    export default {getlist,}
    5、如果在使用的时候想要更便捷可以在main.js里面配置，
    把实例挂载在vue上：代码如下：
    import http from "./utils/api.js"
    Vue.prototype.$http=http
    这样的话在调用的时候就可以直接使用this.$http.getlist()
```
### 五、配置element-ui组件库
```
    1、安装插件npm i element-ui -S(项目依赖)
    2、在路口文件main.js中挂在element-ui，在main.js中添加的代码如下：
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    Vue.use(ElementUI)
    3、引入完成就可以直接使用了。直接使用组件无需引入任何东西。
```
### 六、配置vant组件库
```
    1、安装插件：npm i vant -S
    2、vue组件按需加载vant里面的组件还需要安装一个插件：cnpm i babel-plugin-import -D
    2、配置babel.config.js。配置完代码如下：
    module.exports = {
    presets: [
    '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
        }, 'vant']
    ]
    }
    然后就可以按需导入需要的vant组件了
    首先引入所需要的组件，例如我这里引入一个button
    import {Button} from 'vant'
    然后在转化成局部组件。
    export default {
        components:{
            [Button.name]:Button
        }
    }
    然后在页面中就可以直接使用了（因为种类繁多所以需要通过文档来一手CV大法）
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
