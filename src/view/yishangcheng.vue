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
        <mt-swipe :auto="4000">
           <mt-swipe-item> <img src="../assets/img/banner_1.jpg" alt=""></mt-swipe-item>
           <mt-swipe-item> <img src="../assets/img/banner_2.jpg" alt=""></mt-swipe-item>
           <mt-swipe-item> <img src="../assets/img/banner_1.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
    <div class="a3">
      <div class="a3_1"><a><i class="c-hero-m-aside-icon"></i>现在注册，可免费体验 40+ 款云产品</a> </div>
    </div>
    <div class="a4">
      <div class="hd">
        <h3>我们的一元商品</h3>
      </div>
      
      <div class="contain_1" v-for="n in 5">
        <hr> 
        <div class="a4_1" @click ="anclick(n)" v-bind:class="{active : cur_index ==n}">
          <div class="left">{{n}}计算</div>
          <div class="right">打开</div>
        </div>
        <hr>
        <div class="a4_2" v-show='cur_index ==n '>  
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
          <h3>行业标杆客户</h3>
        </div>
        <div class="biaoqian">

          <mt-navbar v-model="selected">
            <mt-tab-item id="xxk_1">option A</mt-tab-item>
            <mt-tab-item id="xxk_2">option B</mt-tab-item>
            <mt-tab-item id="xxk_3">option C</mt-tab-item>
          </mt-navbar>
            <!-- tab-container -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="xxk_1">
              <mt-cell v-for="u in 2" :title="'唔不 ' + u" />
            </mt-tab-container-item>
            <mt-tab-container-item id="xxk_2">
              <mt-cell v-for="u in 4" :title="'你好 ' + u" />
            </mt-tab-container-item>
            <mt-tab-container-item id="xxk_3">
              <mt-cell v-for="u in 6" :title="'你' + u" />
            </mt-tab-container-item>
          </mt-tab-container>
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
            selected:'xxk_1',
            nume:""
      }
    },
    components:{

    },
    methods:{
      	anclick(n){
          this.cur_index = n
        }
      }
    	
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
/*@import '../assets/css/help.css';*/
img{
  width: 100%;
}
.action{margin-bottom: 50px;}
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
  line-height: 35px;
 }
 .a4 .hd h3{
  font-weight: 400;
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

 }
  .a4 .contain_1 hr{
    color: #f7f8fa;
    margin:-2px 0px 0px 0px;
    clear:both;
  }
  .a4 .contain_1 .a4_2{
 
  text-align: left;
  background-color: #f7f8fa;
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
   }
   .a4 .contain_1 .a4_2 .tex{
    font-size: 15px;
   }
   .active{
    color:#00a4ff;
   }
</style>