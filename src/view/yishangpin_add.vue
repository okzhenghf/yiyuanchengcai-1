<template>
  <div >
    添加商品子组件
    <el-form    label-width="80px">
      <el-form-item label="商品名称">
        <el-input v-model="goods_name"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="商品简介">
        <el-input type="textarea"></el-input type="textarea">
      </el-form-item>
      <el-form-item label="商品详情">
        <el-input type="textarea"></el-input type="textarea">
      </el-form-item>
      <el-button type="primary">提交</el-button>
    </el-form>
  </div>

</template>

<script type="es6"> 
export default {
  data () {

    return {
      form:null,
      goods_name:""
    }
  },
  created(){

  },
}
</script>