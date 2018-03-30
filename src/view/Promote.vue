  <template>

  <div class="content">
  <b-modal v-model="hongbao_modal"
    :hide-footer="true" :hide-header="true" class="hongbao_box">
      
      <div class="neirong">
        <div class="bg"></div>
      
        <div class="popup">
          <div class="po_top"
          v-bind:class="{ hide: isActive}"
           v-show="tt" @click="handleChange()" ></div>
          <div class="po_bot"></div>
          <div class="qiang"  @click="handleChange()"></div>
          <div class="lq">
            <div class="po_title">未领取</div>
            <div class="img" v-show="tt_1"><img src="../assets/img/late.png" alt=""></div>
          </div>
        </div>
      </div>


      
  </b-modal>

    
    <div class="head">
      <div class="first">
        <mt-search
          :v-model="value"
          cancel-text="取消"
          placeholder="搜索">
        </mt-search>
      </div>
    </div>
    <div class="face">
      <ul>
        <li>
          <a href="" style="color: #FF2D50;">首页</a>
        </li>
        <li>
          <a href="">课程</a>
        </li>
        <li>
          <a href="">路径</a>
        </li>
        <li>
          <a href="">上课</a>
        </li>
        <li>
          <a href="">手记</a>
        </li>
        <li>
          <a href="">猿问</a>
        </li>
      </ul>
    </div>

    <!-- 主体部分 -->
    <div class="main">
      <!-- 自动轮播 -->
      <div class="neck">
       <mt-swipe :auto="4000" >
         <mt-swipe-item>
           <a href="">
             <img src="../assets/img/1.jpg" alt="">
           </a>
         </mt-swipe-item>

         <mt-swipe-item>
           <a href="">
             <img src="../assets/img/2.jpg" alt="">
           </a>
         </mt-swipe-item>

         <mt-swipe-item>
           <a href="">
             <img src="../assets/img/3.jpg" alt="">
           </a>
         </mt-swipe-item>

         <mt-swipe-item>
           <a href="">
             <img src="../assets/img/4.jpg" alt="">
           </a>
         </mt-swipe-item>

         <mt-swipe-item>
           <a href="">
             <img src="../assets/img/5.jpg" alt="">
           </a>
         </mt-swipe-item>

         <mt-swipe-item>
           <a href="">
             <img src="../assets/img/6.jpg" alt="">
           </a>
         </mt-swipe-item>

       </mt-swipe>
     </div>    
    </div>
    <!-- body部分 -->
    <div class="body fff" v-for="item in 4 ">
          <div class="bbox">
            <p class="tit">
              <span class="icon"></span>
              新上好课
            </p> 
            <div class="list">
              <div class="sbox one">
                <h2>Java</h2>
                <p>Spring cloul微服务实战</p>
                <div>￥366.00
                  <span>353人</span>
                </div>
              </div>
              <div class="sbox two">
                <h2>Java</h2>
                <p>Spring cloul微服务实战</p>
                <div>￥366.00
                  <span class="span">353人</span>
                </div>
              </div>
              
            </div>
            <div class="swiper">
              <mt-swipe :auto="0">
                <mt-swipe-item class="swipe">
                  <div class="zhuan">
                    <a href="#">
                      <img src="../assets/img/7.jpg" alt="">
                      <div class="txt">
                        <p class="name">js入门到实践
                        开发 js都是你的必备技能</p>
                        <div>高级·1631人在学</div>
                        <div>￥455.00</div>
                      </div>
                    </a> 
                  </div>
                  <div class="zhuan">
                    <a href="#">
                      <img src="../assets/img/7.jpg" alt="">
                      <div class="txt">
                        <p class="name">js入门到实践
                        开发 js都是你的必备技能</p>
                        <div>高级·1631人在学</div>
                        <div>￥455.00</div>
                      </div>
                    </a> 
                  </div>
                  <div class="zhuan">
                    <a href="#">
                      <img src="../assets/img/7.jpg" alt="" class="img">
                      <div class="txt">
                        <p class="name">js入门到实践
                        开发 js都是你的必备技能</p>
                        <div>高级·1631人在学</div>
                        <div>￥455.00</div>
                      </div>
                    </a> 
                  </div>
                </mt-swipe-item>
                <mt-swipe-item class="swipe">
                  <div class="zhuan">
                    <a href="#">
                      <img src="../assets/img/7.jpg" alt="">
                      <div class="txt">
                        <p class="name">js入门到实践
                        开发 js都是你的必备技能</p>
                        <div>高级·1631人在学</div>
                        <div>￥455.00</div>
                      </div>
                    </a> 
                  </div>
                  <div class="zhuan">
                    <a href="#">
                      <img src="../assets/img/7.jpg" alt="">
                      <div class="txt">
                        <p class="name">js入门到实践
                        开发 js都是你的必备技能</p>
                        <div>高级·1631人在学</div>
                        <div>￥455.00</div>
                      </div>
                    </a> 
                  </div>
                  <div class="zhuan">
                    <a href="#">
                      <img src="../assets/img/7.jpg" alt="" class="img">
                      <div class="txt">
                        <p class="name">js入门到实践
                        开发 js都是你的必备技能</p>
                        <div>高级·1631人在学</div>
                        <div>￥455.00</div>
                      </div>
                    </a> 
                  </div>
                </mt-swipe-item>
              </mt-swipe>
            </div>
          </div>
       
    </div>
    
    <div class="zuixia"></div>
  </div>
  </template>

  <script type="es6">
  import { Search } from 'mint-ui';
  import {mapState,mapMutations} from 'vuex'
  import { Toast,MessageBox,Indicator } from 'mint-ui' 
  export default {
  data () {
    return {
        value:0,
        hongbao_modal:true,
        tt:true,
        tt_1:false,
        isActive: false,
        
        
    }
  },
  components:{

  },
  methods:{
       handleChange() {
          this.tt_1=true
          // this.tt=false
          this.isActive=true
          console.log(this.tt)
        }
    }
      
  }
  </script>


  <style >

  @import '../assets/css/Promote.css';


  </style>