<template>
   <div>
        <el-container>
        <el-header>
        <h1>管理中心</h1>
        </el-header>
        <el-container>
        <Qfaside/>
        <Qfmain/>
        </el-container>
        </el-container>
   </div>
</template>
<script>
// import Qfheader from './header.vue'
import Qfaside from './aside.vue'
import Qfmain from './main.vue'
export default {
    components:{
        Qfmain,
        Qfaside,
        // Qfheader
    }
}
</script>
<style lang="scss">
.el-header{
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  h1 {
    font-size: 30px;
    line-height: 10px;
  }
}
</style>