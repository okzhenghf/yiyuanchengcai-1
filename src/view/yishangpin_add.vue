<template>
  <div >
    添加商品子组件
    <el-form    label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="chanpin_name" name='chanpin_name'></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input name="chanpin_money" v-model="chanpin_money"></el-input>
      </el-form-item>
      <el-form-item label="商品简介">
        <el-input type="textarea"  name="summary" v-model="summary"></el-input type="textarea">
      </el-form-item>
      <el-form-item label="商品详情">
        <el-input type="textarea" name="chanpin_info" v-model="chanpin_info"></el-input type="textarea">
      </el-form-item>
      <el-button type="primary" @click="onSubmit()">提交</el-button>
    </el-form>
  </div>

</template>

<script type="es6"> 
export default {
  data () {

    return {
      form:null,
      chanpin_name:"",
      chanpin_money:"",
      summary:"",
      chanpin_info:"",
      chanpin_id:null,
    }
  },
  created(){
       this.init()

  },
  methods: {
      init(){
        this.chanpin_id = this.$route.params.id
      },
      onSubmit() {
        this.$http.post('api/shoppingmall/chanpin_addsave',{
            "chanpin_name":this.chanpin_name,
            "chanpin_money":this.chanpin_money,
            "summary":this.summary,
            "chanpin_info":this.chanpin_info,
            "chanpin_id":this.chanpin_id,
       })
      }
  }


}
</script>