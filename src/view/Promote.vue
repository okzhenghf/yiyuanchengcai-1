<template>

  <div class="content">
<b-modal v-model="hongbao_modal"
    :hide-footer="true" :hide-header="true" class="hongbao_box">
      
      <div class="neirong">
        <div class="bg"></div>
      
        <div class="popup">
          <div class="po_top" :class="{'hide':tt_1}"  ></div>
          <div class="po_bot"></div>
          <div class="qiang"  @click="handleChange()"></div>
          <div class="lq">
            <div class="po_title">未领取</div>
            <div class="img" v-show="tt_1"><img src="../assets/img/late.png" alt=""></div>
          </div>
        </div>
      </div>


      
</b-modal>

    <!-- 固定的头 -->
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

     <!-- body部分 -->
      <div class="body">
          <div class="new">
            <h1>新手入门</h1>
            <div class="list">
              <div>
                Java
                Spring cloul微服务
                实战
                ￥366.00
              </div>
              <div>
                Java
                Spring cloul微服务
                实战
                ￥366.00
              </div>
              

            </div>
            <div class="swiper">
              <mt-swipe :auto="0">
                <mt-swipe-item >
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/7.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/8.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/9.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                </mt-swipe-item>
                <mt-swipe-item>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/10.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/11.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/12.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                </mt-swipe-item>
              </mt-swipe>
            </div>
          </div>
          <div class="new4">
            <h1>新手入门</h1>
            <div class="list">
              <div>
                Java
                Spring cloul微服务
                实战
                ￥366.00
              </div>
              <div>
                Java
                Spring cloul微服务
                实战
                ￥366.00
              </div>
            </div>
            <div class="swiper">
              <mt-swipe :auto="0">
                <mt-swipe-item >
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/7.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/8.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/9.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                </mt-swipe-item>
                <mt-swipe-item>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/10.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/11.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/12.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                </mt-swipe-item>
              </mt-swipe>
            </div>
          </div>
          <div class="new">
            <h1>新手入门</h1>
            <div class="list">
              <div>
                Java
                Spring cloul微服务
                实战
                ￥366.00
              </div>
              <div>
                Java
                Spring cloul微服务
                实战
                ￥366.00
              </div>
            </div>
            <div class="swiper">
              <mt-swipe :auto="0">
                <mt-swipe-item >
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/7.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/8.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/9.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                </mt-swipe-item>
                <mt-swipe-item>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/10.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/11.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/12.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                </mt-swipe-item>
              </mt-swipe>
            </div>
          </div>
          <div class="new4 new1">
            <h1>新手入门</h1>
            <div class="list">
              <div>
                Java
                Spring cloul微服务
                实战
                ￥366.00
              </div>
              <div>
                Java
                Spring cloul微服务
                实战
                ￥366.00
              </div>
            </div>
            <div class="swiper">
              <mt-swipe :auto="0">
                <mt-swipe-item >
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/7.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/8.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/9.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                </mt-swipe-item>
                <mt-swipe-item>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/10.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/11.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                  <div class="zhuan">
                    <div>
                      <img src="../assets/img/12.jpg" alt="">
                    </div>
                    <div class="txt">
                      <p>444</p>
                      <p>111</p>
                      <p>￥455.00</p>
                    </div>
                  </div>
                </mt-swipe-item>
              </mt-swipe>
            </div>
          </div>
      </div>
      
    </div>
    
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
        
    }
  },
  components:{

  },
  methods:{
       handleChange() {
          this.tt_1=true
          this.tt=false
          console.log(this.tt)
        }
    }
      
  }
</script>


<style >

@import '../assets/css/Promote.css';


</style>