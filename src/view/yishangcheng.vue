<template>
  <div class="action"> 
    <div class="a1">
      <mt-header title="一元商城">
        <router-link to="/yishangcheng" slot="left">
          <mt-button>logo</mt-button>
        </router-link>
        <mt-button  slot="right" class="login"><img src="../assets/img/headbg.png" alt=""></mt-button>
        <mt-button icon="more" slot="right"></mt-button> 
      </mt-header>
    </div>
    <div class="a2">
      <mt-swipe :auto="4000" >
       <mt-swipe-item v-for="i in slide_a"><img :src="$gretUrl+i.pic_path" alt=""></mt-swipe-item>
     </mt-swipe>
   </div>
   <div class="a3">
    <div class="a3_1"><a><i class="c-hero-m-aside-icon"></i>现在注册，可免费体验 40+ 款云产品</a> </div>
  </div>
  <div class="a4">
    <div class="hd">
      <h3>我们的一元商品</h3>
    </div>

    <div class="contain_1" v-for="n in 2">
      <hr> 
      <div class="a4_1" @click ="anclick(n)" v-bind:class="{active : cur_index ==n}" >
        <div class="left">{{n}}计算</div>
        <div class="right">
          <!--   v-bind:class="{ zhuan: cur_index == n  }" -->
          <img src="../assets/img/answer1.png" alt="" v-show='cur_index != n || !isActive'  v-bind:class="{ zhuan: cur_index == n  }">
          <img src="../assets/img/purchase_arrow1.png" alt="" v-show='cur_index ==n &&isActive' v-bind:class="{ zhuan_1: cur_index == n  }">
        </div>
      </div>
      <hr>
      <div class="a4_2 bg_color_1" v-show='cur_index ==n &&isActive'>  
        <ul class="tex_ul">
          <li>
            <h5>云服务器</h5>
            <div class="tex"> 
              <span>高密度计算服务器</span>
            </div>
          </li>
          <li>
            <h5>云服务器</h5>
            <div class="tex"> 
              <span>高密度计算服务器</span>
            </div>
          </li>
          <li>
            <h5>云服务器</h5>
            <div class="tex"> 
              <span>高密度计算服务器</span>
            </div>
          </li>

        </ul>
      </div>  
    </div>

  </div>
  <div class="a4">
    <div class="hd">
      <h3>丰富的第三方服务</h3>
      <a><img src="../assets/img/rightbtn.png" alt=""></a>
    </div>
    <div class="contain_1">
      <hr/>
      <div class="a4_3">
        <div class="box" v-for="m in 9">
          <img src="../assets/img/uhome1.png" alt="">
          <p>镜像服务{{m}}</p>
        </div>
      </div>
      <hr/>
    </div>



  </div>
  <div class="a4">
    <div class="hd">
      <h3>行业标杆客户</h3>
      <a><img src="../assets/img/rightbtn.png" alt=""></a>
    </div>
    <hr>
    <div class="biaoqian">
      <mt-navbar v-model="selected"   :swipeable="true">
        <mt-tab-item id="k_1">行业</mt-tab-item>
        <mt-tab-item id="k_2">初创公司</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected" class="a4_hua">
        <mt-tab-container-item id="k_1">
          <mt-cell v-for="u in 6" >
           <img src="../assets/img/12.jpg" alt="">
         </mt-cell>
       </mt-tab-container-item>
       <mt-tab-container-item id="k_2">
        <mt-cell v-for="u in 6" >
         <img src="../assets/img/10.jpg" alt="">
       </mt-cell>
     </mt-tab-container-item>

   </mt-tab-container>
 </div>
</div>
<div class="a4">
  <hr>
  <div class="hd">
    <h3>开发者社区</h3>
  </div>

  <div class="contain_1" v-for="n in 2">
    <hr>           <div class="a4_1" @click ="anclick(n)" v-bind:class="{active : cur_index ==n}" >
      <div class="left">{{n}}专栏</div>
      <div class="right">
        <!--   v-bind:class="{ zhuan: cur_index == n  }" -->
        <img src="../assets/img/answer1.png" alt="" v-show='cur_index != n || !isActive'  v-bind:class="{ zhuan: cur_index == n  }">
        <img src="../assets/img/purchase_arrow1.png" alt="" v-show='cur_index ==n &&isActive' v-bind:class="{ zhuan_1: cur_index == n  }">
      </div>
    </div>
    <hr>
    <div class="a4_2 bg_color_1" v-show='cur_index ==n && isActive'>  
      <ul class="tex_ul">
        <li>          
          <div class="tex"> 
            <span>高密度计算服务器</span>
          </div>
        </li>
        <li>

          <div class="tex"> 
            <span>高密度计算服务器</span>
          </div>
        </li>
        <li>
          <div class="tex"> 
            <span>高密度计算服务器</span>
          </div>
        </li>

      </ul>
    </div>  
  </div>
</div>
<div class="a4">
  <div class="hd">
    <h3>安全规则的认证报章</h3>
    <a><img src="../assets/img/rightbtn.png" alt=""></a>
  </div>
  <hr>
  <div class="a4_4" v-for="m in 3">         
    <div><img src="../assets/img/uhome1.png" alt=""></div>
    <div class="text"> 
      <h4> 合规性{{m}} </h4>
      <p> 腾讯云具备充分的安全合规能力，满足众多的标准要求，并已通过系列合规认证<br>
        <span class="link-style">了解更多 &gt;</span> 
      </p> 
    </div>
  </div>
  <div class="a4_5">
    <div class="heng">
      <h3 class="tit"><span>获取众多合作认证</span></h3>
    </div>
    <div class="iso">
      <div class="box_1" v-for="n in 8">
        <img src="../assets/img/web.png" alt="">
        <p>ISO 2700 1</p>
      </div>
    </div>
  </div>
</div>
<div class="a5">
  <div class="title">
    <h3>开始体验免费套餐</h3>
  </div>
  <div class="a5_1">
    <div class="a5_info"> 
      注册即可领取40+款产品的免费体验套餐
      <br> 更有开发者专属在线实验平台 
      <br> 为您提供最佳上云实践机会 
    </div>
    <div class="a5_btn">
     <a class="c-btn">立即体验</a>
   </div>
 </div> 
</div>
<div class="a4">     
  <div class="contain_1 bg_color " v-for="n in 2">
    <hr> 
    <div class="a4_1" @click ="anclick(n)"  >
      <div class="left">{{n}}腾讯云计算</div>
      <div class="right">
        <!--   v-bind:class="{ zhuan: cur_index == n  }" -->
        <img src="../assets/img/answer1.png" alt="" v-show='cur_index != n || !isActive'  v-bind:class="{ zhuan: cur_index == n  }">
        <img src="../assets/img/purchase_arrow1.png" alt="" v-show='cur_index ==n &&isActive' v-bind:class="{ zhuan_1: cur_index == n  }">
      </div>
    </div>
    <hr>
    <div class="a4_2  bg_color" v-show='isActive && cur_index ==n '>  
      <ul class="tex_ul">
        <li>
          <div class="tex"> 
            <span>高密度计算服务器</span>
          </div>
        </li>
        <li>
          <div class="tex"> 
            <span>高密度计算服务器</span>
          </div>
        </li>
        <li>
          <div class="tex"> 
            <span>高密度计算服务器</span>
          </div>
        </li>

      </ul>
    </div>

  </div>
  <div class="erwei bg_color">
    <div class="xiao">
      <a href=""><img src="../assets/img/index_talk.png" alt=""></a>
      <a href=""> <img src="../assets/img/listen.png" alt=""></a>
      <a href=""> <img src="../assets/img/listen.png" alt=""></a>
    </div>
    <div class="da">
      <img src="../assets/img/tutorDetails-headlines.png" alt="">     
    </div>
    <p>长按识别或截图保存<br>关注公众号，移动管理云服务</p>
    <p class="c-footer-copyright-text">
      <span>Copyright © 2013 - 2018</span>
      <span>Tencent Cloud. All Right Reserved.</span> 
      <span>一元商城 版权所有</span>
    </p>
  </div> 
</div>
</div>

</div>


</template>

<script type="es6">
import {mapMutations} from 'vuex'

import { Navbar, TabItem } from 'mint-ui'

export default {
  data () {

    return {

      cur_index:null,
      isActive: false,
      selected: "k_1",
      slide_a:[],
      ber:null
    }
  },
  created(){
    this.init();
  },
  components:{

  },
  methods:{
    init(){
      this.$http.post("api/Mobilehdp",{page_cate:'shop'})
      .then((rntD)=>{
        this.slide_a = rntD.data

      })
    },
    anclick(n){
      this.cur_index = n
      if(this.ber != 1){
        this.isActive=true
        this.ber = 1;
      }else{
        this.ber = 2;
        this.isActive=false
      }
          // console.log(this.ber)
        }

      }

    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style >
    /*@import '../assets/css/help.css';*/
    /* ------------------------公共样式----------------------------- */
    img{
      width: 100%;
    }
    h3{
      line-height: 1.1;
      margin:24px 0;
      font-weight: 400;
      font-size: 20px;
    }
    hr{
      color: #f7f8fa;
      margin:-2px 0px 0px 0px;
    }

    .action{
      padding-bottom: 50px;
      color:#333;
    }
    .bg_color{
      background-color: #2e3033;
      color: #cccccc;
    }
    .bg_color_1{
     background-color: #f7f8fa;
   }
   .zhuan{
     animation: back 0.25s  linear;  /* 18s 无限次  匀速*/ 
   }
   @keyframes back{

    0%{transform: rotate(-180deg);}
    100%{transform: rotate(0deg);}
  }
  .zhuan_1{
   animation: lightbg 0.25s  linear;  /* 18s 无限次  匀速*/ 
 }
 @keyframes lightbg{

  0%{transform: rotate(180deg);}
  100%{transform: rotate(0deg);}
}
/* ------------------------------------------------- */

.a1 {
  font-size: 30px;
}
.a1 img{
  width: 22px;
}
.a1 .mint-header{
 background-color:#333;
}
.a2{
  height: 150px;
}
.a2 img{
  height: 150px;
  width: 100%;

}
.login{
  margin-right: 4px;
}
.a3 .a3_1{

  padding: 10px 17px 10px 54px;
  min-height: 35px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f7f8fa;

}
.a3 .a3_1 a{
  display: block;
  font-size: 14px;
  text-decoration: none;
}
.a4 .hd{
  display: flex;
  flex-direction: row;
  flex-wrap:wrap ;
  justify-content:center;
  align-items:center;

}
.a4 .hd h3{
  flex-grow: 4;
}
.a4 .hd img{
  width: 9px;
  height: 11px;
  margin-right:5px;
}
.a4 .contain_1 .a4_1 {
  line-height: 17px;
  margin: 20px;
  height: 16px;
}
.a4 .contain_1 .a4_1 .left{
  float: left;
}
.a4 .contain_1 .a4_1 .left img{
  width: 30px;
}
.a4 .contain_1 .a4_1 .right{
  float: right;
  width: 25px;
}
.a4 .contain_1 .a4_1 .right img{
  width: 10px;
}
.a4 .contain_1 hr{
  color: #f7f8fa;
  margin:-2px 0px 0px 0px;
  clear:both;
}
.a4 .contain_1 .a4_2{

  text-align: left;
}
.a4 .contain_1 .a4_2 .tex_ul{
 margin:0 20px;
 padding:20px; 
}
.a4 .contain_1 .a4_2 .tex_ul li{
  display: block;
  margin:20px 0;
}
.a4 .contain_1 .a4_2 h5{
  margin:5px;
  font-size: 18px;
}
.a4 .contain_1 .a4_2 .tex{
  font-size: 15px;
}
.a4 .contain_1 .a4_3{
  display: flex;
  flex-direction: row;
  flex-wrap:wrap ;
  justify-content:center;
  margin-bottom: 20px;
}
.a4 .contain_1 .a4_3 .box{
  width: 125px;
  margin-top: 15px;
  font-size: 15px;
}
.a4 .contain_1 .a4_3 img{
  margin-bottom: 5px;
  width: 40px;
}
.active{
  color:#00a4ff;
}
.a4 .biaoqian{
  margin:20px;
}
.a4 .biaoqian .mint-tab-item-label{
  font-size: 20px;
}
.a4 .mint-navbar .mint-tab-item.is-selected{
       color: #26a2ff;
}
.a4 .biaoqian .mint-tab-container-item{
   margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap ;
  justify-content:center;
}
.a4 .biaoqian .mint-cell-title{
  flex:0;
}
.a4 .biaoqian .mint-cell-value img{
  width: 90px;
  margin-top: 10px;
}
.a4 .a4_4 img{
  width: 40px;
  margin:10px;
}
.a4 .a4_4{
  margin:20px 0;
  display: flex;
  flex-direction: row;
  align-items:flex-start;
}
.a4 .a4_4 .text{
  text-align: left;
}
.a4 .a4_4 h4{
  font-size: 18px;
  color: #333;
  margin: 0;
  padding: 0;
  font-weight: 400;
  line-height: 1.5;
}
.a4 .a4_4 p{
  font-size: 14px;
  color: #666;
  margin-top:5px;
  line-height: 1.7;
  word-wrap: break-word;
}
.a4 .a4_4 p span{
  display: block;
  color: #00a4ff;
  margin-top: 5px;
}
.a4 .a4_5 .heng .tit{
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  position: relative;
  margin: 0 20px;
}
.a4 .a4_5 .heng .tit:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  overflow: hidden;
  background-color: #e5e5e5;
  top: 50%;
  left: 0;
}
.a4 .a4_5 .heng .tit span {
  display: inline-block;
  background-color: #fff;
  position: relative;
  z-index: 2;
  padding: 0 20px;
  color: #666;
}
.a4 .a4_5 .iso{
  margin:20px 0;
  display: flex;
  flex-wrap:wrap;
  flex-direction:row;
  align-items:flex-start;
  justify-content:center;
}
.a4 .a4_5{
  margin-bottom: 30px; 
}
.a4 .a4_5 .box_1{
  width: 93px;
  margin: 15px 0px;
  font-size: 12px;
}
.a4 .a4_5 .box_1 p{

  color: #000;
  text-align: center;
}
.a5{
  padding: 20px 0;
  color:#333;
  background:url(../assets/img/free-bg.jpg)top center no-repeat #f7f8fa;;
  font-size: 16px;
}
.a5 .a5_btn{
  margin:20px;
  border-radius: 2px;
  text-align: center;
  height: 45px;
  line-height: 45px;
  font-size: 16px;
  background-color: #00a4ff;
  color:#fff;
}
.a4 .erwei .xiao{
  display: flex;
  flex-wrap:wrap;
  flex-direction:row;
  align-items:flex-start;
  justify-content:center;
}
.a4 .erwei .xiao a{
  width:30px;
  margin:20px 10px;
}
.a4 .erwei .da{
  width: 200px;
  margin:auto;
}
.a4 .erwei p{
  margin-top: 5px;
  font-size: 10px;
}



</style>