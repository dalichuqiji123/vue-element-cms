<template>
  <div>
    <div class="box">
      <h1>添加商品类别</h1>
      <input type="text" v-model="cate_zh" />
      <br />
      <input type="text" v-model="cate" />
      <br />
      <button @click="add">确认添加</button>
    </div>
    <div>
      <el-table  style="width: 100%"  :data='tableDate' >
        <el-table-column prop="cate" label="商品种类（英文）" width="180"></el-table-column>
        <el-table-column  prop="cate_zh" label="商品种类（中文）" width="180"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      cate_zh: "",
      cate: "",
      tableDate:[]
    };
  },
  methods: {
    init(){
      this.$http.fetchgetshop({}).then((res)=>{
        this.tableDate=res.data.list
      })
    },
    add() {
      let params = {
        cate_zh: this.cate_zh,
        cate: this.cate,
      };
      if(this.cate_zh!=''&&this.cate!=''){
        this.$http.fetchAdd(params).then((res) => {
        if (res.err == 0) {
          this.$message({
            showClose: true,
            message: "添加成功！！！",
            type: "success",
          });
        }
      });
      }else{
         this.$message({
            showClose: true,
            message: "请把信息填写完整！！！",
            type: "error",
          });
      }
      this.cate=''
      this.cate_zh=''
      this.init()
    },
  },
  mounted(){
    this.init()
  }
};
</script>
<style lang="scss">
.box {
  input {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    margin-top: 30px;
    font-size: 20px;
    border: 1px #ccc solid;
  }
  button {
    width: 100px;
    height: 40px;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 40px;
    background: skyblue;
    border: 1px #ccc solid;
  }
}
.el-table{
  margin-top:40px;
}
</style>