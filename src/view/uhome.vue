t<template>


  <div class="uhomedd">
    <b-alert :show="dismissCountDown" @dismissed="dismissCountDown=0">领取成功</b-alert>
    <b-modal v-model="hongbao_modal" :hide-footer="true" :hide-header="true" class="hongbao_box">
      <h3 class="title">新人专享-7天连登大礼包</h3>
      <ul class="hg_day">
        <li v-for="n in 7" :class="{'cur_day':people_day==n}">
          <b-row>
            <b-col class="hg_data" cols="8">第{{n}}天</b-col>
            <b-col class="hg_mv">0.88元</b-col>
          </b-row>
        </li>

      </ul>
      <div class="footer">
        <b-button variant="warning" class="qu" :block="true" @click="go_money()">领取</b-button>
      </div>
      
    </b-modal>
    <div class="uhome">
      <div class="uhome_one">
        <div class="container">
          <div class="flex_box" @click="edit()">
            <div class="headbg">
              <img :src="user_info.head_img" class="img">
              <img src="../assets/img/listen-answer-avatar-right.jpg" class="avatar-true" v-if="user_info.is_real==2">
            </div>
            <div class="p">

              <p>{{user_info.user_name}}</p>
              <p class="check">查看并编辑个人资料</p> 
            </div>
            <span class="rignt_sub"></span>
          </div>
          <p class="uhome_price">
            总收入￥{{user_info.total_income}}
            ，总收益￥{{user_info.total_profit}}
          </p>
           
        </div>
      </div>
      <div class="uhome_two">
        <div class="container">
          <ul>
            <li class="uhome_nav" @click="myhome()" v-if="user_info.status==3">
              <span class="uhomebg bgpic_1"></span>
              <span class="uhome_text">我的一元页</span>
              <span class="rignt_sub"></span>
            </li>
            <li class="uhome_nav" @click="myanswer()" v-if="user_info.status==3">
              <span class="uhomebg bgpic_4"></span>
              <span class="uhome_text">我答</span>
              <span class="rignt_sub"></span>
            </li>
            <li class="uhome_nav" @click="totrue()" v-if="user_info.is_real<2">
              <span class="uhomebg bgpic_5"></span>
              <span class="uhome_text">申请一元认证</span>
              <span class="rignt_sub"></span>
            </li>
            <li class="uhome_nav" @click="openvip()" v-if="user_info.status<3">
              <span class="uhomebg bgpic_1"></span>
              <span class="uhome_text">开通一元</span>
              <span class="rignt_sub"></span>
            </li>
            <li class="uhome_nav" @click="publish()" v-if="user_info.is_real==2">
              <span class="uhomebg bgpic_5"></span>
              <span class="uhome_text">添加资讯</span>
              <span class="rignt_sub"></span>
            </li>
            <li class="uhome_nav" @click="addnovel()" v-if="user_info.is_real==2">
              <span class="uhomebg bgpic_5"></span>
              <span class="uhome_text">添加课程</span>
              <span class="rignt_sub"></span>
            </li>
             <li class="uhome_nav" @click="uhomehelp()">
              <span class="uhomebg bgpic_2"></span>
              <span class="uhome_text">我的作业</span>
              <span class="rignt_sub"></span>
            </li>
             <li class="uhome_nav" @click="uhomeset()">
              <span class="uhomebg bgpic_3"></span>
              <span class="uhome_text">设置</span>
              <span class="rignt_sub"></span>
            </li>
            <li class="uhome_nav" @click="uhomedaka()">
              <span class="uhomebg bgpic_4"></span>
              <span class="uhome_text">打卡</span>
              <span class="rignt_sub"></span>
            </li>
             <li class="uhome_nav" @click="ujianli()">
              <span class="uhomebg bgpic_5"></span>
              <span class="uhome_text">简历</span>
              <span class="rignt_sub"></span>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script type="es6">
 import {mapState,mapMutations} from 'vuex'
 import { Toast } from 'mint-ui' 
 import { MessageBox } from 'mint-ui'
 import { Indicator } from 'mint-ui'

export default {
  data () {
    return {
      tishicon:true,
      user_info:{},
      //imgUrl:''
      hongbao_modal:false,
      dismissCountDown:false,
      people_day:1
      // hongbao_modal:'<?php echo $isShow; ?>',
      // people_day:'<?php echo $people_day; ?>'
    }
  },
  computed:{
    ...mapState(['info','todaymoney'])
  },
  mounted(){
    Indicator.open();
    this.$http
    .get("user",{params:{type:'uhome',uid:this.info.user_id}})
    .then(rtnData => {
      this.user_info = rtnData.data;
      this.user_info.head_img = this.$sourceUrl+'/img/'+this.user_info.head_img;
      Indicator.close();
      //this.imgUrl = this.info.head_img ? this.info.head_img : '/static/img/headbg.png';
    }),
    this.init()
  },
  methods:{
    ...mapMutations(['setTodaymoney']),
    init(){
      if(this.todaymoney == false){
        this.$http.get('/api/hongbao/hasRecord',{
          params:{uid:this.info.user_id}
        })
        .then((rtnD) =>{
          if(rtnD.data.status == 1 && rtnD.data.h_total < 7){
            this.hongbao_modal=true
            this.people_day=rtnD.data.h_total+1
          }else{
            this.setTodaymoney(true)
          }

        })
      }else{

      }
      
    },
    myhome:function(){
      this.info.vip_id = this.info.vip_id>0?this.info.vip_id:this.user_info.id
      this.$router.push('/tutorDetails/'+this.info.vip_id);
    },
    myanswer:function(){
      this.$router.push('/answer');
    },
    edit:function(){
      this.$router.push('/edit');
    },
    openvip:function () {
      this.$router.push('/openvip');
    },
    /*myheadline:function(){
      this.$router.push('/headline/self');
    },*/
    publish:function(){
      this.$router.push('/publish');
    },
    addnovel:function(){
      this.$router.push('/novel');
    },
    totrue:function(){
      this.$router.push('/totrue');
    },
    hidevip:function(){
      this.showdown=true;
    },
    downfd:function(){
      console.log(1)
    },
    uhomehelp:function(){
      this.$router.push('/homework/homework')
    },
    uhomeset:function(){
      this.$router.push('/set')
    },
    uhomedaka:function() {
       this.$router.push('/daka/daka')
    },
    ujianli(){
      this.$router.push('/jianli/jianli/'+this.info.user_id)
    },
    go_money(){

        this.$http.get('/api/hongbao',{params:{
          people_day:this.people_day,
          uid:this.info.user_id
        }})
        .then((rtnD)=>{
          console.log(rtnD)
          this.hongbao_modal=false
          this.dismissCountDown=1

          let iconClass = rtnD.data.status==1?"icon-success":"icon-success"
          Toast({
            message:rtnD.data.msg,
            iconClass:"icon glyphicon glyphicon-ok"
          });


        })

      
      

    }

  }
    	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

@import '../assets/css/uhome.css';


*{
    padding:0px;
    margin: 0px;
    list-style: none;
  }
  .hongbao_box .title{
    font-size: 30px;
    color: #fccd4b;
  }
  .hongbao_box .modal-dialog{
    width: 88%;
    margin: 50px auto;
  }
  .hongbao_box .modal-content{
    background: red;
    text-align: center;
  }
  .hongbao_box .modal-body{
    padding: 20px 0px;
  }
  .hongbao_box .hg_day{
    background: #ccc;
    width: 90%;
    margin: auto;
    padding: 10px 10px 5px;
  }
  .hongbao_box .hg_day li{
    background: #fff;
    height: 35px;
    line-height: 35px;
    margin-bottom: 5px;
    text-align: left;
    padding-left:10px;
  }
  .hongbao_box .hg_day li .hg_data{
    color: #b9b9b9;
  }
  .hongbao_box .hg_day li .hg_mv{
    color: #ec5259;
  }
  .hongbao_box .qu{
    margin-top:10px;
  }
  .hongbao_box .footer{
    padding: 5px 10px;
  }
  .hongbao_box .hg_day .cur_day{
    background: #fbbb4d;
    font-size:20px;
  }
  .hongbao_box .cur_day li .hg_data{
    color: #fff;
  }
</style>