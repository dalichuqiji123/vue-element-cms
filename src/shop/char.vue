<template>
    <div class="box">
        <input type="text" v-model='text'>
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8848/api/v1/upload/img"
          :show-file-list="false"
          :on-success="uploadImg">
          <img v-if="list.img" :src="list.img" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <button @click='submit'>上传</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:{img:""},
            text:''
            }
    },
    methods:{
        uploadImg(res){
        this.list.img=res.data.url
    },
    submit(){
        let data={
            text:this.text,
            img:this.list.img
        }
           this.$http.fetchsubmitchar(data).then(res=>{
               if(res.err==0){
                   this.$message({
                    showClose: true,
                    message: "上传成功",
                    type: "success",
                });
               }
               this.list.img=''
               this.text=''
           }) 
        }
    }
}
</script>
<style lang="scss">
.box{
    input{
        width:200px;
        height:30px;
    }
    .el-upload{
        width:200px;
        height:200px;
        margin:30px 0;
        text-align: center;
        border:1px solid #ccc;
        img{
            width:100%;
            height:100%;
        }
        .el-icon-plus{
            display: block;
            line-height: 200px;
            font-size: 30px;
        }
    }
    button{
        width:80px;
        height:50px
    }
}
</style>