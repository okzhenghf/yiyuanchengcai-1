<template>
  <el-container>
    <el-header class='header' height='30px'>
      <el-row class='head_top'>
        <el-col :span="6">   
          <div class="grid-content bg-purple">
            <i class="el-icon-arrow-left">返回</i>
          </div>
        </el-col>
          <el-col :span="15">
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
            <img v-if="con.head_img" :src="$gretUrl+con.head_img" class='img_1' alt="">
          </div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light"  align="left">
            <p>{{con.user_name}}</p>
            <p>累积打卡{{con.num}}天</p>
          </div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"><el-button round style='background:0 0 repeat;'>分享</el-button></div></el-col>
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
      style="background-color: #199111;"
      v-on:choseDay="clickDay" v-on:changeMonth="changeDate" v-on:isToday="clickToday" :markArray=[] isHideOtherday=false 
     >
  </Calendar>

         
  </el-container>
</template>
<script type='text/javascript'>
 import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
          // daka_info:[],
          // msg:''
          isToday:'',
          con:''
        }
    },
    computed:{
        ...mapState(['info'])
    },
    mounted(){
          this.$http.get("/api/dakatheme/xiangqin",{
        params:{
          id:this.$route.params.id,
          uid:this.info.user_id
        }
      })
      .then((rtnD)=>{
        // console.log(rtnD)
        this.con = rtnD.data

      })


    },
    methods:{

        changeDate(data) {
          // console.log(data); //左右点击切换月份
        },
        clickToday(data) {
          // console.log(data); //跳到了本月
          this.isToday=data
        },
        clickDay(data) {
          // console.log(data); //选中某天
          // console.log(this.isToday)
          if(data == this.isToday){
            this.$router.push('/daka/daka_info/'+this.$route.params.id)
          }
          
           
        }
            
        }
  }
   
</script>

<style type='text/css' scoped>
/*.footer{
  display: none;
}*/
  .head_top{
    margin-top: 6px;
  }
	.header{ 

    background-color: #199111;
    color: #ffff;
    overflow: hidden;
  }
  img{
    width: 100%
  }
  .bgimg{
    color:#ffff;
    height: auto;
    width: 100%;
    background:url("../../assets/img/123.jpg") repeat;
  }
  .el-button.is-round {
    border-radius: 15px;
    padding: 10px 15px;
}
.el-button{
  border: 2px solid #fff;
color: #fff;
margin-left: 175%;
margin-bottom: 50%;
}
  .min_head{
     margin-top: 50px;
  }
  .img_1{
    border-radius: 50px; 
    width:50px;
    height: 50px;
  }
  .wh_content_all{
        background-color: #199111;

  }
  .wh_container{
    margin:0px;
  }

</style>