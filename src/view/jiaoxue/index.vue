<template>
<div class="box">
  <el-row :gutter="10">
    <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
      <div class="grid-content"><h3>专题</h3></div>
    </el-col>

    <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
      <div class="grid-content"><p>全部专题&nbsp;></p></div>
    </el-col>
  </el-row>
  <div class="title">
    <ul>
      <li><img src="../../assets/img/5.jpg" alt=""></li>
      <li><img src="../../assets/img/5.jpg" alt=""></li>
      <li><img src="../../assets/img/5.jpg" alt=""></li>
      <li><img src="../../assets/img/5.jpg" alt=""></li>
    </ul>
  </div>
  
  <div class="list_nav">
    <div class="list" ref="list">
      <ul>
        <li class="cur">推荐</li>
        <li>职场·成长</li>
        <li>职场·成长</li>
        <li>职场·成长</li>
        <li>职场·成长</li>
        <li>职场·成长</li>
      </ul>
    </div>
    <div class="list_content">
      <div class="list_box">
        <div class="left"><img src="../../assets/img/headbg.png" alt=""></div>
        <div class="right">
          <ul>
            <li><h5>2323123123</h5></li>
            <li><p>dvcxcv</p></li>
            <li><p><span>www</span>sdsss</p></li>
          </ul>
        </div>
      </div>
      <div class="list_box">
        <div class="left"><img src="../../assets/img/headbg.png" alt=""></div>
        <div class="right">
          <ul>
            <li><h5>2323123123</h5></li>
            <li><p>dvcxcv</p></li>
            <li><p><span>www</span>sdsss</p></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script type="es6">
import BScroll from 'better-scroll'
export default {
  data () {
    return {
    }
  },
  created(){
    // console.log(this.$refs.list_id)

  },
  mounted(){
    this.$nextTick(()=>{
      let bscroll= new BScroll(this.$refs.list,{
            probeType:3,//时时监听滚动
            scrollX:true
          });
    })
  },
  computed:{
  
  },
  methods:{
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  p{
    color: #ccc;
  }
  .box .el-row{
    padding: 20px;
  }
 .box .el-col {
    border-radius: 4px;
  }
  .box .el-row .el-col h3{
    font-size: 26px;
  }
  .box .el-row .el-col p{
    text-align: center;
  }
  .box .bg-purple {
    background: #d3dce6;
  }
  .box .bg-purple-light {
    background: #e5e9f2;
  }
  .box .grid-content {
    text-align: left;
    border-radius: 4px;
    min-height: 36px;
  }
  .box .title{
    width: 90%;
    margin: auto;
  }
  .box .title ul{
    display: flex;
    justify-content:space-around;
    width: 100%;
    flex-wrap:wrap;
  }
  .box .title ul li{
    width: 50%;
    height: 100px;
    padding: 5px;
  }
  .box .title ul li{

  }
  .box .title ul li img{
    width: 100%;
    height: 100%;
  }
  .box .list_nav{
    
  }
  .box .list_nav .list{
    width: 100%;
    overflow: hidden;

  }
  .box .list_nav .list ul{
    width: 150%;
    height: 50px;
    position: relative;
    /*transition: all 0.2s !important;*/
    /*display: flex;
    justify-content:space-around;*/
    border-bottom: 1px solid #ccc;
  }
  .box .list_nav .list ul li{
     float: left;
     padding: 10px;
  }
  .box .list_nav .list ul li.cur{
    border-bottom: 1px solid red;
  }
  .box .list_nav .list_content .list_box{
    display: flex;
    padding: 10px 10px;
    border-bottom: 1px solid #ccc;
  }
  .box .list_nav .list_content .list_box .left{
    width: 75px;
    height: 75px;
    margin: 0px 10px;
    flex: 0 0 75px;
  }
  .box .list_nav .list_content .list_box .left img{
    width: 100%;
    height: 100%;
  }
  .box .list_nav .list_content .list_box .right{
    text-align: left;
  }
  .box .list_nav .list_content .list_box .right h5{
    margin: 0px;
    padding: 0px;
  }
  .box .list_nav .list_content .list_box .right span{
    border:1px solid #ccc;
    padding: 0px 5px;
    border-radius: 5px;
  }
</style>