<template>

  <div class="content">
    <b-modal v-model="hongbao_modal"
      :hide-footer="true" :hide-header="true" class="hongbao_box"
      v-bind:class="{ motai: isclose}" @click="close()" v-show="!isclose"
      >

      <div class="neirong" >

        <div class="bg"  @click="close()" ></div>
        <div class="close"  @click="close()" v-show="isclose"></div>
        <div class="popup">
          <div class="po_top"
            v-bind:class="{ hide: isActive}"
             v-show="tt" @click="handleChange()" ></div>
          <div class="po_bot"></div>
          <div class="qiang"  @click="handleChange()"></div>
          <div class="lq">
            <div class="po_title">未领取</div>
            <div class="img" v-show="tt_1">
              <img src="../assets/img/late.png" alt=""></div>
          </div>
        </div>
      </div>
    </b-modal>

    <div class="head">
      <div class="first">
        <mt-search
            :v-model="value"
            cancel-text="取消"
            placeholder="搜索"></mt-search>
      </div>
    </div>

    <div class="face">
      <ul >
        <li @click="is_cate=false" :class="{'is-active':!is_cate}">首页</li>
        <li v-for="(item,n) in ke_cheng_cate" >
          <!-- (item,n) n是下标 -->

          <div :class="{'is-active':n == cur_kc_cate_index && is_cate}" @click="change_ke_cheng_cate(n,item.id)">{{item.cate_name}}</div>

        </li>

      </ul>
    </div>

    <div v-show="!is_cate">
      <!-- 主体部分 -->
      <div class="main">
        <!-- 自动轮播 -->
        <div class="neck" >
          <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="item in slide_a">
              <!--$gretUrl在main.js 那里看路径 -->
              <a :href="$gretUrl+item.link_url" >
                <img :src="$gretUrl+item.pic_path" data-holder-rendered="true"></a>

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
          <div class="swiper" >
            <div class="promote_bigbox" >
              <div class="small_box" v-for="item2 in item.s " @click="go(item.id)">
                <a>
                  <h2>{{item2.title}}</h2>
                  <p class="promote_title">主讲人：{{item2.real_name}}</p>
                  <div class="promote_bottom">
                    ￥：{{item2.price}}元
                    <span class="promote_number">
                      {{item2.join_num}}人
                    </span>
                  </div>
                </a>
              </div>
            </div>



            <div class="zhuan" v-for="item2 in item.s " @click="go(item.id)">

              <a href="#">
                <div class="img">
                  <img v-if="item2.smalltalk_img" :src="$gretUrl+item2.smalltalk_img" alt="">
                </div>
                <div class="txt">
                  <p class="name">{{item2.title}}</p>
                  <p>主讲人：{{item2.real_name}}</p>

                  <div>有{{item2.join_num}}人在学</div>
                  <div>￥：{{item2.price}}元</div>
                </div>
              </a>
            </div>

            <!--  </mt-swipe-item> </mt-swipe>
          -->
        </div>
      </div>
    </div>

  </div>
  <div v-show="is_cate">
    <div class="swiper" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="true">
      <div class="zhuan" v-for="item2 in change_cate_data " @click="go(item2.id)">

        <a href="#">
          <div class="img">
            <img v-if="item2.smalltalk_img" :src="$gretUrl+item2.smalltalk_img" alt="">
          </div>
          <div class="txt">
            <p class="name">{{item2.title}}</p>
            <p>主讲人：{{item2.real_name}}</p>

            <div>有{{item2.join_num}}人在学</div>
            <div>￥：{{item2.price}}元</div>
          </div>
        </a>
      </div>
      <p v-if="loading" style="text-align: center;">加载中...</p>
      <p v-if="!has_more" style="text-align: center;">无更多内容了...</p>
    </div>
  </div>
  <div class="zuixia"></div>
</div>
</template>

<script type="es6">
  import { Search } from 'mint-ui';
  import {mapState,mapMutations} from 'vuex'
  import { Toast,MessageBox,Indicator } from 'mint-ui' 
  import { InfiniteScroll } from 'mint-ui';
  import { Loadmore } from 'mint-ui';

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
        kc_a:[],
        cur_kc_cate_index:0,
        type_id:[],
        ke_cheng:[],
        cate:[],
        ke_cheng_cate:[],
        is_cate:false,//默认显示首页
        change_cate_data:[],//切换的分类数据
        loading:false,
        has_more:true,
        page:1,
        cateID:1,
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
         
          this.$http.post("/api/type")
          .then((rtnD)=> {

            this.type_id = rtnD.data
            console.log(this.type_id)

            })
          
              this.$http.post("/api/Feilei/getFeilei")
              .then((rtnCateD)=> {

              this.ke_cheng_cate = rtnCateD.data
              // console.log(this.ke_cheng_cate)
              // resolve(rtnCateD[0]['id'])
            })
        
            this.$http.post("/api/Feilei")
            .then((rtnD)=> {

              this.ke_cheng = rtnD.data.data
              })
            this.$http.post("/api/Cate")
            .then((rtnD)=> {

              this.cate_a = rtnD.data
              // console.log(rtnD)
            })
            this.$http.get("/api/cate",{
              params:{
                page:1
              }
            })
            .then((rtnD)=>{
              this.job_list = rtnD.data
            })
          
          this.$http.get("/api/cate/cate_lists",{
              params:{
                theme_id:this.$route.params.id,
                page:this.page
              }})
          .then((rtnD)=>{
             this.daka_list=rtnD.data
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
        },
        change_ke_cheng_cate(index,cateID){
          this.cur_kc_cate_index = index
          this.is_cate = true
          this.page = 1 
          this.has_more = true 
          // console.log(cateID)
          this.$http.get("/api/Cate/cate_lists",{params:{cateId:cateID,page:this.page}})
            .then((rtnD)=> {
              this.change_cate_data = rtnD.data
              // console.log(rtnD.data)
              })
        },
       
        loadMore(){
          if (this.has_more) {
            this.loading = true
            
            ++this.page
            // console.log(this.page)
            this.$http.get("/api/cate/cate_lists",{
              params:{
                page:this.page,
                cateId:this.ke_cheng_cate[0].id,

                
              }})
            
            .then((rtnD)=>{
              // console.log(rtnD.data)

               if (rtnD.data.length>0) {
                    this.change_cate_data.push(...rtnD.data)

                  }else{
                    this.has_more = false
                  }
                
                  this.loading = false
            })
          }else{}
          
        },
        
        
    }
      
  }
  </script>

<style  scoped>
.modal-content {
    height: 0;
    border: 0;
}
  @import '../assets/css/Promote.css';


  </style>