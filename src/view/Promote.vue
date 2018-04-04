<template>

  <div class="content">
    <b-modal v-model="hongbao_modal"
      :hide-footer="true" :hide-header="true" class="hongbao_box"
      v-bind:class="{ motai: isclose}" @click="close()"
      >
        
        <div class="neirong" >
          <div class="bg"  @click="close()"></div>
          <div class="close"  @click="close()" ></div>
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
        <ul >
          <li v-for="(item,n) in ke_cheng"> 
            <!-- (item,n) n是下标 -->
            <a href="" >{{ke_cheng[n].cate_name}}</a>
          </li>
          
        </ul>
    </div>

    <!-- 主体部分 -->
    <div class="main">
        <!-- 自动轮播 -->
        <div class="neck" >
         <mt-swipe :auto="4000" >
           <mt-swipe-item v-for="item in slide_a">
            <!--$gretUrl在main.js 那里看路径 -->
              <a :href="$gretUrl+item.link_url" > 
               <img :src="$gretUrl+item.pic_path" data-holder-rendered="true">
             </a>
            
             
           </mt-swipe-item>

           

         </mt-swipe>
       </div>    
    </div>
    <!-- body部分 -->
    <div class="body fff" v-for="item in type_id " >
            <div class="bbox">
              <p class="tit">
                <span class="icon"></span>
                {{item.cate_type}}
              </p> 
              <div class="list">
                <div class="sbox one">
                  <h2>111</h2>
                  <p>Spring cloul微服务实战</p>
                  <div>￥366.00
                    <span>22人</span>
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
                  <mt-swipe-item class="swipe" v-for="item1 in 2 ">
                    <div class="zhuan" v-for="item2 in item.s " @click="go(item.id)">

                      <a href="#">
                        <img v-if="item2.smalltalk_img" :src="$gretUrl+item2.smalltalk_img" alt="">
                        <div class="txt">
                          <p class="name">{{item2.title}}</p>
                          <p>主讲人：{{item2.real_name}}</p>

                          <div>有{{item2.join_num}}人在学</div>
                          <div>￥：{{item2.price}}元</div>
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
        isclose:false,
        slide_a:[],
        kc_a:[]
    }
  },
  components:{

  },
  created(){
    this.init()
  },
  methods:{
       init(){
          this.$http.get("/api/Mobilehdp",{params:{page_cate:'promote'}})
          .then((rtnD)=> {

            this.slide_a = rtnD.data
            // console.log(rtnD)
          })
          this.$http.post("/api/promote",{params:{page_cate:'promote'}})
          //用post获取是要用params
          .then((rtnD)=> {

            this.kc_a = rtnD.data.data
            // console.log(this.kc_a)
          })
          this.$http.post("/api/type")
          .then((rtnD)=> {

            this.type_id = rtnD.data
            // console.log(this.type_id[1].s)

            })
          this.$http.post("/api/Kecheng")
          .then((rtnD)=> {

            this.ke_cheng = rtnD.data.data
            console.log(this.ke_cheng.cate_name)

            })
       },
       handleChange() {
          this.tt_1=true
          // this.tt=false
          this.isActive=true
          // console.log(this.tt)
        },
        close(){
          this.isclose=true
        },
        go(id){
            this.$router.push('/stalkteacher/'+id)
        }
    }
      
  }
  </script>


  <style  scoped>

  @import '../assets/css/Promote.css';

.hongbao_box .modal-content {
    height: 0;
    border: 0;
}
  </style>