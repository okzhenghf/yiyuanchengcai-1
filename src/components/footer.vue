 <template >
   <div class="footer">
     <div v-if="isFooter">
       <mt-tabbar v-model="selected" :fixed="true" >
         <mt-tab-item class="footer-index">
           <router-link to="/"> <i class="index-icon"></i>
             首页
           </router-link>
         </mt-tab-item>
         <mt-tab-item>
           <router-link to="/listen"> <i class="listen-icon"></i>
             收听
           </router-link>
         </mt-tab-item>
         <mt-tab-item class="footer-ask">
           <router-link to="/ask" class="ask">问</router-link>
         </mt-tab-item>
         <mt-tab-item>
           <router-link to="/purchase">
             <i class="purchase-icon"></i>
             已购
           </router-link>
         </mt-tab-item>
         <mt-tab-item v-if="isLogin==false">
           <router-link to="/login">
             <i class="uhome-icon"></i>
             登录
           </router-link>
         </mt-tab-item>

         <mt-tab-item v-if="isLogin==true">
           <router-link to="/uhome">
             <i class="uhome-icon"></i>
             我的
           </router-link>
         </mt-tab-item>

       </mt-tabbar>
     </div>
      <div v-if="!isFooter">
         <footer>
       <div class="footer_box">
         <div class="footer_home">
           <div>
            <router-link to="/">
             <img src="../assets/job/images/home.png"> 
             <p>首页</p>
           </router-link>
           </div>
         </div>
         <div class="footer_more" @click.stop="toggle">
           <img src="../assets/job/images/foot_logo.png"></div>
         <div class="footer_main test" ref="footerMain">
           <img class="clear" src="../assets/job/images/icon_one.png"> 
           <img class="clear" src="../assets/job/images/icon_two.png"> 
           <img class="clear" src="../assets/job/images/icon_three.png"> 
           <img class="clear" src="../assets/job/images/icon_four.png"></div>
         <div class="footer_user">
           <div>
             <img src="../assets/job/images/user.png"> 
             <p>我的</p>
           </div>
         </div>
       </div>
     </footer>
      </div>
   </div>

 </template>

 <script type="es6">
 import {mapState,mapGetters} from 'vuex'
export default {
  data(){
    return {
      selected:true, 
    }
  },
  created(){
    this.$http.get('/monitor').then(rtnData=>{})
   
  },
  computed:{
    ...mapGetters(['isLogin','isFooter']) 
  }
}
</script>
 <style>@import '../assets/css/footer.css';

  
/*footer*/
  footer {
    width: 100%;
    position: fixed;
    z-index: 9998;
    bottom: 0;
    
    border-top: 1px solid #ccc;
    box-shadow: 0px 4px 10px black;
    background-color: #fff;
    height: 55px;
  }
  .footer_box {
    position: relative;
    z-index: 9998;
    background-color: #fff;
    height: 55px;
  }
  .footer_home {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 50%;
    line-height: 85px;
    overflow: hidden;
  }
  .footer_home div {
    width: 100px;
    height: 100px;
    padding-bottom: 20px;
    text-align: center;
  }
  .footer_home img {
    position: absolute;
    top: 5px;
    left: 35px;
    width: 30px;
  }
  .footer_home p {
    font-size: 12px;
    color: #FF303A;
  }
  .footer_more {
    position: absolute;
    z-index: 9999;
    overflow: hidden;
    transform: translate(-15%,-25%);
    left: 45%;
  }
  .footer_more img {
    width: 70px;
    height: 70px;
  }
  .footer_main {
    position: absolute;
    z-index: 2;
    left: 44%;
    top: -23%;
    
  }
  .footer_main img {
    position: absolute;
    transition: all .5s;
    width: 60px;
    height: 60px;
  }
  .footer_main img:nth-child(1) {
    transform: translate(-78px,-50px);
    opacity: 1;
  }
  .footer_main img:nth-child(2) {
    transform: translate(-30px,-88px);
    opacity: 1;
  }
  .footer_main img:nth-child(3) {
    transform: translate(30px,-88px);
    opacity: 1;
  }
  .footer_main img:nth-child(4) {
    transform: translate(80px,-50px);
    opacity: 1;
  }
  .clear {
    transform: translate(0px,0px) !important;
    opacity: 0 !important;
  }
  .footer_user {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 50%;
    line-height: 85px;
    overflow: hidden;
  }
  .footer_user div {
    width: 100px;
    height: 100px;
    padding-bottom: 20px;
    text-align: center;
  }
  .footer_user img {
    position: absolute;
    top: 5px;
    right: 35px;
    width: 23px;
  }
  .footer_user p {
    position: absolute;
    right: 35px;
    font-size: 12px;
  }
  /*footer*/

 </style>