<template>
  <div class="action"> 
    <div class="nav_head">
      <a  class="logo">
        <div><img src="../assets/img/index_play.png" alt=""></div>
        <h3>腾讯云</h3>
      </a>
      <div class="deng">
        <img src="" alt="">
        <span>...</span>
      </div>
    </div>
    <div class="plate">
      <div class="plate_left">
        <h2>{{fuwu_info.chanpin_name}}</h2>
        <p>稳定、安全、弹性、高性能的云端计算服务，实时满足您的多样性业务需求</p>
      </div>
      <div class="plate_right">
        <div class="rigt">
          <div class='bgt'></div>
          <!-- <img class='btn rigt_1' src="../assets/img/gouwu.svg" alt=""> --></div>
      </div>
    </div>
    <div class="biaoqian">
      <mt-navbar v-model="selected"   :swipeable="true" class="info_hd">
        <mt-tab-item id="k_1">云服务器</mt-tab-item>
        <mt-tab-item id="k_2">产品详情信息</mt-tab-item>
        <mt-tab-item id="k_3">实例类型</mt-tab-item>
        <mt-tab-item id="k_4">定价</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected" class="info_list">
        <mt-tab-container-item id="k_1">
          <mt-cell >
            <div class="d_mod" >
              <h4>
                 {{fuwu_info.chanpin_name}}简介
              </h4>
              <p>
                {{fuwu_info.chanpin_info}}
              </p>
            </div>
         </mt-cell>
       </mt-tab-container-item>
       <mt-tab-container-item id="k_2">
        <mt-cell  >
        <div class="d_mod">
             <p>腾讯云 CVM 提供了在云中的可扩展的虚拟计算资源，允许您选择多种操作系统来启动 CVM 实例，并加载到您自定义的应用环境。后续随着业务量的变化，您还可以随时调整您的 CVM 规格。</p>
            <p>您可以使用控制台、命令行或 SDK 等多种管理工具来启动、监控或终止您的实例。</p>
            <p>腾讯云 CVM 提供按量计费和包年包月两种计费模式，您可以灵活选择付费方式，按量计费只需为您实际消耗的资源付费，按小时结算；包年包月适合业务量稳定的场景，费用更低廉。</p>
        </div>
       </mt-cell>
     </mt-tab-container-item>
     <mt-tab-container-item id="k_3">
        <mt-cell  >
        <div class="d_mod">
            <p>腾讯云提供不同的实例类型来满足用户特定的使用场景。这些实例类型由 CPU，内存，存储和网络带宽组成不同的组合。您需要根据将要运行在实例上的程序或者软件的要求，来选择合适的实例类型。</p>
            <p>我们把实例根据功能分组为不同的实例族。实例族一般以实例的最突出的特性命名，比如IO型实例表明此类实例的具有较高的 IOPS 性能，计算型表明此类实例处理器性能较高等。</p>
            <p>每个实例族都包括多种实例大小，CVM 支持不关机随时调整网络，支持关机状态下基于云盘的硬件调整和磁盘扩容。若随业务发展，您所选择的实例资源已不能满足需求，您可以将您的资源扩展以满足目标工作负载。您可在页面上通过鼠标点击操作，一键升级到更高性能和容量的实例规格，升级过程不影响业务的正常访问和使用。</p>
            <p>&nbsp;关于当前一代实例系列（系列2）与上一代实例系列（系列1）的说明：当前一代实例系列比上一代在 CPU 和内存上都有较大提升，建议您在新建实例时优先选用当前一代实例系列。&nbsp;</p>
        </div>
       </mt-cell>
     </mt-tab-container-item>
       <mt-tab-container-item id="k_4">
          <mt-cell  >
          <div class="d_mod">
               <p>腾讯云 CVM 提供了在云中的可扩展的虚拟计算资源，允许您选择多种操作系统来启动 CVM 实例，并加载到您自定义的应用环境。后续随着业务量的变化，您还可以随时调整您的 CVM 规格。</p>
              <p>您可以使用控制台、命令行或 SDK 等多种管理工具来启动、监控或终止您的实例。</p>
              <p>腾讯云 CVM 提供按量计费和包年包月两种计费模式，您可以灵活选择付费方式，按量计费只需为您实际消耗的资源付费，按小时结算；包年包月适合业务量稳定的场景，费用更低廉。</p>
          </div>
         </mt-cell>
       </mt-tab-container-item>

   </mt-tab-container>
 </div>
  </div>


</template>

<script type="es6">
import {mapMutations} from 'vuex'

import { Navbar, TabItem } from 'mint-ui'

export default {
  data () {

    return {
      selected:'k_1',
      chanpin_id:1, 
      fuwu_info:[],
    }
  },
  created(){
    this.init()

  },
  components:{

  },
  methods:{
      init(){
        this.chanpin_id = this.$route.params.id
        this.$http.post('api/shoppingmall/chanpin_read',{chanpin_id:this.chanpin_id})
        .then((rntD)=>{
          this.fuwu_info = rntD.data
          console.log(this.fuwu_info)
        })
      }

    },
    anclick(n){

    }
  }
</script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style >
    /*@import '../assets/css/help.css';*/
    /* ------------------------公共样式----------------------------- */
  .action{
    color:#fff;
    font-size: 14px;
    padding-bottom: 30px;
  }
  img{
    width: 100%;
  }

/* ------------------------------------------------- */
  .nav_head{
    background-color: #202124;
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
    align-items:center;
    color: #fff;
    padding:5px 10px 5px 10px;
  }
  .nav_head .logo{
    flex: 1;
    display: flex;
    text-align: left;
    flex-direction:row;
    align-items:center;
    margin-left: 6px;

  }
  .nav_head .logo img{
    height: 30px;
    width: 30px;
    margin-right:5px;
  }
  .nav_head .logo h3{
    font-size:22px;
    margin-top:9px;
  }
  .plate{
    padding :20px 20px 30px 20px;
    background-color: #1e2530;
    display: flex;
    flex-direction:row;
    align-items:center;
  }
  .plate .plate_left{
    text-align: left;
    line-height: 1.5;
  }
  .plate .plate_left h2{
    font-weight: 400;
    font-size: 22px;
    margin:20px 0;

  }
  .plate .plate_left{
    font-size: 12px;
  }
  .plate .plate_right {
   
  }
  .plate .plate_right .rigt{

    border-radius: 60px;
    background-color: #00a4ff;
    width: 50px;
    height: 50px;
    overflow: hidden;
    
  }
  /* .plate .plate_right .rigt:after{
     content: '';
     background: url(../assets/img/gouwu.svg);
   }*/
  .plate .plate_right .rigt .bgt{
      height: 50px;
      
      background: url(../assets/img/gouwu.svg) no-repeat center;
  }
   .plate .plate_right .rigt_1{
    
    width: 110px;
    height: 60px;
    position: relative;

  }
  .biaoqian .info_hd{
    background-color: #272d3a;
  }
  .biaoqian .mint-tab-item-label{
    font-size: 14px;

  }
  .biaoqian .mint-navbar .mint-tab-item.is-selected{
    color:#26a2ff;
  }
  .mint-cell-title{
    flex: 0;
  }
  .biaoqian .info_list .d_mod{
      font-size: 14px;
      margin:10px 15px;
      color:#272d3a;
    }
  .biaoqian .info_list .d_mod h4{
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    }
  .biaoqian .info_list .d_mod p{
    padding-top: 5px;
    text-align:left;
    margin-top: 5px;
    line-height: 1.7;
  }

</style>