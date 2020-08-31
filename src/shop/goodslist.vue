<template>
    <div class="goodslist">
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <el-select v-model="goodsType" placeholder="请选择品类" @change='typechange(id)'>
                <el-option v-for="item in cates" :key="item.id" :label="item.cate_zh" :value="item.cate"></el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            fixed
            prop="goodsName"
            label="商品名称"
            width="100">
            </el-table-column>
            <el-table-column
            prop="goodsDetail"
            label="商品详情"
            width="400">
            </el-table-column>
            <el-table-column
            prop="goodsPrice"
            label="商品价格"
            width="100">
            </el-table-column>
            <el-table-column
            label="商品图片"
            width="120">
            <template slot-scope="scope">
                <img :src="scope.row.goodsImg" alt="">
            </template>
            </el-table-column>
            <el-table-column
            prop="goodsType"
            label="商品类型"
            width="100">
            </el-table-column>
            <el-table-column
            label="是否热销"
            width="100">
              <template slot-scope="scope">
                  <span  v-text="scope.row.goodshot"></span>
               </template>
            </el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="200">
             <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <div>
            <el-pagination
                background
                layout="prev, pager, next"
                :current-page="page"
                @current-change='pageChange'
                :total="total*10"
                >
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tableData:[],
            total:'',
            page:1,
            size:5,
            goodsType:'',
            cates:'',
            id:'id'
        }
    },
    mounted(){
       this.$http.fetchgetshop({}).then((res) => {
        this.cates = res.data.list;
        this.init()
    });
    },
    methods:{
        init(){
            let data = {
            goodsType:this.goodsType,
            page:this.page,
            size:this.size
        }
        this.$http.fetchgetgoods(data).then(res=>{
            this.tableData=res.data.list
            this.total=Math.ceil(res.data.total/this.size)
        })
        },
        pageChange(page){
            this.page=page
            this.init()
        },
        typechange(){
            this.page=1
            this.init()
        },
        handleDelete(row){
            let ele=row._id
            this.$http.fetchdeletegood({id:ele}).then((res)=>{
                if(res.err==0){
                    this.$message({
                        showClose: true,
                        message: "删除成功",
                        type: "success",
                    });
                }
                this.init()
            })
        },
        handleEdit(row){
            this.$router.push('/shop/addgoods/'+row._id)
        }
    }
}
</script>
<style lang="scss">
.goodslist{
    width:1121px;
    margin:60px auto;
    .cell{
        text-align:center;
        img{
            width:100px;
            height:100px;
        }
    }
}
</style>