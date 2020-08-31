<template>
    <div>
        <el-aside width="200px">
          <h1>用户列表</h1>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
          <!-- 第一行 -->
            <el-submenu :index="sub.id+''"  v-for='sub in routes' :key="sub.id">
              <template slot="title">
                <router-link tag='div' :to='sub.path'>
                <i :class="sub.icon"></i>
                  <span v-text="sub.text"></span>
                </router-link>
              </template>
              <el-menu-item-group v-for="item in sub.children" :key='item.id'>
                <router-link tag='div' :to='item.path.replace(":id","")'>
                  <el-menu-item :index="item.id+''" v-text='item.text'></el-menu-item> 
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <!-- 第二行 -->
            <!-- <el-submenu index="2">
              <template slot="title">
                <router-link tag='div' to='/shop'>
                  <i class="el-icon-menu"></i>
                  <span>商品列表</span>
                </router-link>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">商品类别</el-menu-item>
                <router-link tag='div' to='/shop/addshop'>
                  <el-menu-item index="2-2" >添加商品</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu> -->
          </el-menu>
        </el-aside>
    </div>
</template>
<script>
import routes from '@/views/'
export default {
    data(){
      return {
        routes
      }
    }
}
</script>
<style lang="scss">
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height:660px;
  h1 {
    font-size: 30px;
    line-height: 10px;
  }
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>