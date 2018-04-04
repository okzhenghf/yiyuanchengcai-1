<template>
   <div class="vue_html">
    <header>
      <div class="nav">
        <transition name="fade">
          <div class="message"  v-show="is_hot_status">
            <a href="" style="color:#fff;">
            <p >{{hot_msg}}</p>
            </a>
          </div>
        </transition>

        <div class="container">
          <div class="search">
            <input type="text" name="search_input" class="search_input" placeholder="搜索答主和相关问题"></div>
        </div>
        <div class="bs-example" data-example-id="simple-carousel">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic"   v-for="(slide,index) in slide_a" :data-slide-to="index" :class="{'active':index==0}"></li>
               
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="item" v-for="(slide,index) in slide_a" :class="{'active':index==0}">
                <a :href="slide.link_url">
                  <img  :src="$gretUrl+slide.slidehdp_path" data-holder-rendered="true"></a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="menu">
        <div style="height:30px"></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-3 menu_img">
              <router-link to="/Promote">
                <img src="../../assets/job/images/tisheng.png">
                <p class="menu_title">一元提升</p>
              </router-link>
            </div>
            <div class="col-xs-3 menu_img">
              <router-link to="/oldindex">
                <img src="../../assets/job/images/zhaopin.png">
                <p class="menu_title">一元教学</p>
              </router-link>
            </div>
            <div class="col-xs-3 menu_img">
               <router-link to="/yishangcheng">
                <img src="../../assets/job/images/jiaoxue.png">
                <p class="menu_title">一元招聘</p>
              </router-link>
            </div>
            <div class="col-xs-3 menu_img">
              <router-link to="/yishangcheng">
                <img src="../../assets/job/images/mall.png">
                <p class="menu_title">一元商城</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="kc_list_first">
        <h4 class="kc_title">一 / 元 / 课 / 程</h4>
        <div class="container">
          <!-- 分类 -->
          <div class="kc_nav">
            <div class="el-tabs__nav-scroll">

              <div role="tablist" class="el-tabs__nav" style="transform: translateX(0px);">

                <div class="el-tabs__item is-top "   v-for="(cate,cate_index) in kecheng_cate" :class="{'is-active':cate_index == cur_kc_cate_index}" @click="change_kecheng_cate(cate_index,cate.id)">{{cate.cate_name}}</div>
 

              </div>
            </div>
          </div>
          <!-- 列表 -->
          <div class="kc_main" @touchstart="kc_touch_s(event)" @touchmove="kc_touch_m(event)" @touchend="kc_touch_e()">
            <ul class="kc_list">

              <li v-for="ke_info in kecheng_a">
                <div class="list_left">
                  <img :src="$gretUrl+ke_info.smalltalk_img+'140_140.jpg'"></div>
                <div class="list_right">
                  <h4>{{ke_info.title}}</h4>
                  <p>主讲人：{{ke_info.real_name}}</p>
                  <div class="list_bottom">
                    <p>{{ke_info.cate_name}}</p>
                    <span>{{ke_info.join_num}}人参加</span>
                  </div>
                </div>
              </li>
             

            </ul>

          </div>

        </div>
      </div>
      <div class="kc_list_second">
        <h4 class="kc_title">一 / 元 / 咨 / 讯</h4>
        <div class="container">
          <div class="kc_main">
            <ul class="kc_list">
              <li v-for="(news,index) in news_lists">
                <a href="" v-if="index == 0">
                  <img src="../../assets/job/images/picture.png" class="img_title">
                </a>
                <a href="" v-if="index > 0">
                  <div class="list_left">
                    <p>{{news.title}}</p>
                  </div>
                  <div class="list_right">
                    <img src="../../assets/job/images/11.png"></div>
                </a>
              </li>
               
            </ul>
          </div>
        </div>
      </div>
      <div class="kc_list_third">
        <h4 class="kc_title">一 / 元 / 人 / 才</h4>
        <div class="container">
          <div class="kc_nav">
            <div class="el-tabs__nav-scroll">
              <div role="tablist" class="el-tabs__nav" style="transform: translateX(0px);">

                <div class="el-tabs__item is-top "   v-for="(cate,cate_index) in vip_cate" :class="{'is-active':cate_index == cur_vip_cate_index}" @click="change_viper_cate(cate_index,cate.id)">{{cate.cate_name}}</div>

              </div>
            </div>
          </div>
          <div class="kc_main">
            <ul class="kc_list">
              <li class="underline" v-for="vip in vip_a">
                <div class="list_left">
                  <img src="../../assets/job/images/women.jpg"></div>
                <div class="list_right">
                  <ul>
                    <li class="list_right_top">
                      <p>{{vip.real_name}}</p>
                      <span>电商视觉设计学员</span>
                    </li>
                    <li class="list_right_center">
                      <p>人气指数：</p>
                      <span>{{vip.listen_num}}</span>
                    </li>
                    <li class="list_right_bottom">
                      <p>设计分类</p>
                      <span>学习时长：100小时</span>
                    </li>
                  </ul>
                </div>
              </li>
               
            </ul>
          </div>
        </div>
      </div>
      <div style="height: 120px;text-align: center;color: #9f9f9f;line-height: 50px;font-size: 18px;">没 有 更 多 了</div>
    </main>
  </div>
</template>

<script type="es6">
$(function(){
    var myElement = document.getElementById('carousel-example-generic')
    var hm = new Hammer(myElement);
    hm.on("swipeleft",function(){
      $('#carousel-example-generic').carousel('next')
    })
    hm.on("swiperight",function(){
      $('#carousel-example-generic').carousel('prev')
    })
  }) 
 function setRand(length) {
  return Math.ceil(Math.random()*length);
}
export default {
    data(){
      return {
            
              activeName: 'second',
              slide_a:[],//幻灯片的数据
              kecheng_a:[],//课程的数据列表
              kecheng_cate:[],//课程的分类
              cur_kc_cate_index:0,//当前课程分类的下标
              vip_a:[],//人才的数据列表
              vip_cate:[],//人才的分类
              cur_vip_cate_index:0,//当前课程分类的下标
              news_lists:[],//新闻列表
              kc_list:[],//课程列表，大数组的把每一次的ajax分门别类的存放
              kc_touch_start_x:null,//课程触屏起始坐标
              kc_touch_direction:null,//课程触屏方向
              is_hot_status : false,
              hot_msg : null,
        }
    },
      created(){

        this.init()

        let address = ['北京','天津','上海','重庆','河北','山西','辽宁','吉林','黑龙江','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','海南','四川','贵州','云南','陕西','甘肃','青海','台湾','内蒙古','广西','西藏','宁夏','新疆','香港','澳门']
        let people = `竹林威皓冬梅中锴山川吾光璇海学海午光绚海玉吾行晓珲吾航鳕海腾宵蕙雾瑕紫豪涛俊英敏轩海家豪鹃文兵海洲玉凤容礼义义华良宇汝杰萸艳子峰天宇慧艳德霞小瑞玉芝家宝林健民立民妍大宇彪传奇东承智江丽建荣玉胜金城伶俐墨晗新文玉峰墨然浩然智渊维杰树岗唯伊慧丽昀程紫佳立荣雪凡丽荣稼稼婷琳琳人稼白茹烁田野辉红辰生甜也文秀洪坚绍旭芳墨涵天涵赛旭炜继锋秋凤煜康士皓添冶玉容乐甜冶永和刚艳臣贵阳舔业薇湛博岩泰彰欷西华倩云春燕石浩静瑞凯嘉琦俊霞鹏一鹤梓含若岚若兰泉俊芳文婷家同子怡英博珈影凯丽竣景晏大炜琳以萍子仪墨琴馨章光一璇玉萍淑敏久久盘根品良希远本山可峰雪阳培雁英杰纯一锋伟存富思媛思谦东言春富雍婷永婷晨希曼孜曼希博敏孜莉蓉敏希朱柯柳清一龙程程炎炎婷婷志利柯朱春丽柯焦甜耶淮音红艳莉克勤俊一小焦红炎红楠春雷卓群莉莎红菲乙诚乙铖依琳斌兵文蓉志峰婧燕玲瑶瑶瑛志勇鑫宇懂常景鑫凯如月嘉美望卓静茹桦嘉丽臻粒非亚轩美琪建博珊珊凡家成瞿博天爱子茜龙月华天慈芪洁穗心如文杰心雨晨羲丽伟红娜美娜思恬宸曦宸希惠娜宸羲辰羲思甜辰曦小娜宸熹辰熹红燕辰希凡与建红凡舆子嫣珂芸珂阳漫蓉子文晓超金霞曙君瑷立刚安邦佳郧芬曼妮黉昵健辉义城业城业洪羿蓉志春昊宏刚雪利文卿磊奕成毅连弯忠义芃芃燕梅智志勇彩红祈雯鲁豫若雅蕾贾烁耀春光莹`

        setInterval(()=>{ 
          // 字符串获取随机位置的字符呢？
           // 字符串找到指定位置的值
           let xingm = ''
           for (var i = 0; i < setRand(4); i++) {
            xingm+=people.charAt(setRand(people.length))
           }
           
            this.hot_msg = address[setRand(address.length-1)]+'的'+xingm+"进来了"
            this.is_hot_status = !this.is_hot_status
            },3000);
      },
      methods: {
        init(){
        

          // es6 
          // 三种状态
          // reslove成功
          // reject失败
          // 
          // 幻灯片
          this.$http.post("/api/Mobilehdp",{'page_cate':'home'}).then( (rtnD)=> {
            this.slide_a = rtnD.data
            console.log(1)
          })
        
            // 先有课程分类
            this.$http.post("/api/kecheng/getKeCate")
              .then( (rtnCateD)=> {
                this.kecheng_cate = rtnCateD.data
                console.log(this.kecheng_cate)
                return this.kecheng_cate[0]['id']
              })
              .then((cateId)=>{
                 // 再获取课程的数据
                  this.$http.post("/api/kecheng",{'cateId':cateId})
                  .then( (rtnD)=> {
                    this.kecheng_a = rtnD.data.data
                  })
            })

           // 获取资讯
          this.$http.post("/api/news").then( (rtnD)=> {
            console.log(2)
            this.news_lists = rtnD.data.data
          })
           
          // 获取人才
         
          this.$http.post("/api/Viper/getVipCate")
            .then( (rtnD)=> {
                this.vip_cate = rtnD.data
                return this.vip_cate[0]['id']
            })
            .then((cateId)=>{
                this.$http.post("/api/Viper/index",{cateId})
                .then((rtnD)=> {
                  this.vip_a = rtnD.data
                })
            })
          
        },
          handleClick(tab, event) {
              console.log(tab, event);
          },
          
          change_kecheng_cate(index,cateId){
            this.cur_kc_cate_index = index
             this.$http.post("/api/kecheng",{'cateId':cateId}).then( (rtnD)=> {
              this.kecheng_a = rtnD.data

            })
          },
          change_viper_cate(index,cateID){
            this.cur_vip_cate_index = index
              this.$http.post("/api/Viper/index",{cateID},(rtnD)=> {
              this.vip_a = rtnD
            })
          },
          kc_touch_s(event){
            this.kc_touch_start_x = event.touches[0].pageX
          },
          kc_touch_m(event){
            let move_x = event.touches[0].pageX
            if (this.kc_touch_start_x > move_x) {
              this.kc_touch_direction = 'left'
              $('.kc_list').css('transform','translate(-'+move_x+'px,0)')
            }else{
              this.kc_touch_direction = 'right'
              $('.kc_list').css('transform','translate('+move_x+'px,0)')
              

            }
          },
          kc_touch_e(){
            if (this.kc_touch_direction == 'left') {
              if (this.cur_kc_cate_index < this.kecheng_cate.length-1) {
                ++this.cur_kc_cate_index 
              }
            }else{
              if (this.cur_kc_cate_index > 0) {
                --this.cur_kc_cate_index 
              }

            }
            this.change_kecheng_cate(
              this.cur_kc_cate_index,
              this.kecheng_cate[this.cur_kc_cate_index].id)
            $('.kc_list').css('transform','translate(0,0)')
          }
          
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/*多个样式用 @import url*/
@import url('../../assets/job/css/home.css');
@import url('../../assets/job/library/bootstrap3.3.7.min.css');

</style>