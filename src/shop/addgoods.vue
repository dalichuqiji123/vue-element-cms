<template>
  <div class="addgood">
    <!-- 商品名称 -->
    <el-row type="flex" align="middle">
      <el-col :span="4">
        <span>商品名称:</span>
      </el-col>
      <el-col :span="20">
        <el-input v-model="list.name" placeholder="商品名称"></el-input>
      </el-col>
    </el-row>
    <!-- 商品详情 -->
    <el-row type="flex" align="middle">
      <el-col :span="4">
        <span>商品详情:</span>
      </el-col>
      <el-col :span="20">
        <el-input type="textarea" :row="3" placeholder="请输入商品简介" v-model="list.Detail"></el-input>
      </el-col>
    </el-row>
    <!-- 商品价格 -->
    <el-row type="flex" align="middle">
      <el-col :span="4">
        <span>商品价格:</span>
      </el-col>
      <el-col :span="20">
        <el-input v-model="list.price" placeholder="商品价格"></el-input>
      </el-col>
    </el-row>
    <!-- 商品图片 -->
    <el-row type="flex" align="middle">
      <el-col :span="4">
        <span>商品图片:</span>
      </el-col>
      <el-col :span="20">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8848/api/v1/upload/img"
          :show-file-list="false"
          :on-success="uploadImg">
          <img v-if="list.img" :src="list.img" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>
    </el-row>
    <!-- 商品是否热销 -->
    <el-row type="flex" align="middle">
      <el-col :span="4">
        <span>是否热销:</span>
      </el-col>
      <el-col :span="2">
        <el-switch v-model="list.value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-col>
    </el-row>
    <!-- 商品类别 -->
    <el-row type="flex" align="middle">
      <el-col :span="4">
        <span>商品类别:</span>
      </el-col>
      <el-col :span="12">
        <el-select v-model="list.type" placeholder="请选择品类">
          <el-option v-for="item in cates" :key="item.id" :label="item.cate_zh" :value="item.cate"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <!-- 添加 -->
    <el-row type="flex" align="middle">
      <el-col :span="4"></el-col>
      <el-col :span="6">
        <el-button v-if='$route.params.id' type="primary" @click="addgood">确认修改</el-button>
        <el-button v-else type="primary" @click="addgood">添加商品</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {
        name: "",
        Detail: "",
        price: "",
        img: "",
        value: false,
        type: "",
      },
      cates: [],
    };
  },
  methods: {
    addgood() {
      let id=this.$route.params.id 
      let data = {
        goodsName: this.list.name,
        goodsDetail: this.list.Detail,
        goodsPrice: this.list.price,
        goodsImg: this.list.img,
        goodshot: this.list.value,
        goodsType: this.list.type,
        id
      }
      if(this.list.name!=''&&this.list.Detail!=''&&this.list.img!=''&&this.list.type!='请选择品类'){
        this.$http.fetchaddgoods(data).then((res) => {
        if (res.err == 0) {
          if(id){
            this.$message({
            showClose: true,
            message: "修改成功！！！",
            type: "success",
          });
          }else{
            this.$message({
            showClose: true,
            message: "添加成功！！！",
            type: "success",
          });
          }
        }
        this.list.name=''
        this.list.Detail=''
        this.list.price=''
        this.list.img=''
        this.list.value=false
        this.list.type='请选择品类'
      });
      }else{
         this.$message({
            showClose: true,
            message: "请把信息填写完整！！！",
            type: "error",
          });
      }
    },
    uploadImg(res){
      this.list.img=res.data.url
    }
  },
  mounted() {
    this.$http.fetchgetshop({}).then((res) => {
    this.cates = res.data.list
    let id=this.$route.params.id 
      if(id){
        this.$http.fetchgetgooddetail({id}).then(res=>{
          this.list.name=res.data.list.goodsName,
          this.list.Detail=res.data.list.goodsDetail,
          this.list.price=res.data.list.goodsPrice,
          this.list.img=res.data.list.goodsImg,
          this.list.value=res.data.list.goodshot,
          this.list.type=res.data.list.goodsType
        })
      }else{
         this.list.name=""
          this.list.Detail="",
          this.list.price="",
          this.list.img="" ,
          this.list.value="",
          this.list.type=""
      }
    });
  },
};
</script>
<style lang="scss">
.addgood {
  width: 600px;
  margin: 35px auto;
}
.el-row {
  margin-bottom: 30px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>