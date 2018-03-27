<template>
  <el-container>
    <el-header class='header' height='30px'>
      <el-row class='head_top'>
        <el-col :span="4">   
          <div class="grid-content bg-purple">
            <i class="el-icon-arrow-left">返回</i>
          </div>
        </el-col>
          <el-col :span="17">
            <div class="grid-content bg-purple-light">我的打卡</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <i class="el-icon-more"></i>
            </div>
          </el-col>
      </el-row>
    </el-header>
      <div class='bgimg'>
        <el-row class='min_head'>
          <el-col :span="8"><div class="grid-content bg-purple">
            <img src="../../assets/img/ce175bcdd00f9a8d7ffda5e6530477e4.jpeg" class='img_1' alt="">
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"  align="left">
            <p>雯雯</p>
            <p>累积打卡6天</p>
          </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"><el-button round style='background:0 0 repeat;'>分享</el-button></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="18"><div class="grid-content bg-purple-dark">
              <el-progress :percentage="70"></el-progress>
          </div></el-col>
          <el-col :span="6">
            100天
          </el-col>
        </el-row>
      </div>
      <!-- 日历 -->
    <Calendar
      v-on:choseDay="clickDay" v-on:changeMonth="changeDate" v-on:isToday="clickToday" :markArray=[] isHideOtherday=false  >
  </Calendar>

         
  </el-container>
</template>
<script type='text/javascript'>

export default {
    data(){
        return {
          // daka_info:[],
          // msg:''
        }
    },
    methods:{
      clickDay(data) {
          console.log(data); //选中某天
        },
        changeDate(data) {
          console.log(data); //左右点击切换月份
        },
        clickToday(data) {
          console.log(data); //跳到了本月
          
        }
            
        }
  }
   
</script>

<style type='text/css'>
.footer{
  display: none;
}
  .head_top{
    margin-top: 6px;
  }
	.header{ 

    background-color: #303133;
    color: #ffff;
  }
  img{
    width: 100%
  }
  .bgimg{
    color:#ffff;
    height: 150px;
    width: 100%;
    background:url("../../assets/img/9cf48d783f9e07230280d19fe8552577.jpg") repeat;
  }
  .min_head{
     margin-top: 50px;
  }
  .img_1{
    border-radius: 50px; 
    width:70px;
    height: 70px;
  }
  .wh_container{
    margin:0px;
  }
</style>