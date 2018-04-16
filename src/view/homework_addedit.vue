<template>
   <div class="homework">
      <div class="head">
         <div class="left"><i class="fa fa-angle-left fa-2x"></i></div>
         <div class="light">
           <h4>修改作业</h4>
         </div>
      </div>
      <div class="fwben">
          <vue-html5-editor :content="content_1" :height="200" @change="updateData_1"></vue-html5-editor>
      </div>
      <div class="xuanzhe">
         <el-tabs type="border-card" name="2" el-tabs v-model="activeName" @tab-click="handleClick" disabled>
            <el-tab-pane label="题型" disabled></el-tab-pane>
            <el-tab-pane label="单选">
            答案：
               <el-radio v-model="radio" label="1">A</el-radio>
               <el-radio v-model="radio" label="2">B</el-radio>
               <el-radio v-model="radio" label="3">C</el-radio>
               <el-radio v-model="radio" label="4">D</el-radio>
            </el-tab-pane>
            <el-tab-pane label="多选">
            答案： <el-checkbox-group v-model="checkList">
                     <el-checkbox label="A"></el-checkbox>
                     <el-checkbox label="B"></el-checkbox>
                     <el-checkbox label="C"></el-checkbox>
                     <el-checkbox label="D"></el-checkbox>
                  </el-checkbox-group>

            </el-tab-pane>
            <el-tab-pane label="判断">
                答案：
               <el-radio v-model="radio2" label="1">对</el-radio>
               <el-radio v-model="radio2" label="2">错</el-radio>
            </el-tab-pane>
            <el-tab-pane label="填空题">
               <div class='xiaoti'>
                  <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple">小题</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">&nbsp;{{num1}}</div></el-col>
                    <el-col :span="8">
                        <el-input-number v-model="num1" :min="1" :max="20" label="描述文字"  size="mini"></el-input-number>
                    </el-col>
                  </el-row>
               </div>
               <hr/>
               <div class='xiaoti'>
                  <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple">手动批改</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                    <el-col :span="4">
                        <el-switch v-model="value1" active-color="#13ce66"></el-switch>
                    </el-col>
                  </el-row>
               </div>
               <hr/>
               <ul >
                  <li v-for="(item,n) in tiankong_list">
                     <div class="contain">
                        <span class="quan">
                          {{n+1}}
                        </span>
                        <div>
                           <el-input v-model="item.input1" :disabled="!value1" ></el-input>
                        </div>
                        <i class="el-icon-circle-plus-outline" style="color:#2ac1a2;"></i>
                        <i class="el-icon-remove" style="color:red;"></i>
                     </div>
                     <hr/>
                  </li>
               </ul>
            </el-tab-pane>
            <el-tab-pane label="解答题">
               <div class='xiaoti'>
                  <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple">小题</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                    <el-col :span="8">
                        <el-input-number v-model="num2" @change="handleChange_2" :min="0" :max="10" label="描述文字"  size="mini"></el-input-number>
                    </el-col>
                  </el-row>
               </div>
               <hr/>
               <div class='xiaoti'>
                  <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple">手动批改</div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple">&nbsp;</div></el-col>
                    <el-col :span="4">
                        <el-switch v-model="value2" active-color="#13ce66"inactive-color="#ff4949"></el-switch>
                    </el-col>
                  </el-row>
               </div>
               <hr/>
               <div class="fwben">
                  <vue-html5-editor :content="content_2" :height="200" @change="updateData_2" ></vue-html5-editor>
               </div>
            </el-tab-pane>
         </el-tabs>
      </div>
      <div class="tijiao">
         <div class="left" ><router-link to="/homework_add"></router-link>继续添加</div>
         <div class="light" @click="click_submit">保存预览</div>
      </div>
      <el-button type="success" round style="margin-top:10px;">立即发布</el-button>
   </div>
</template>

<script type="es6">
import Vue from 'vue'
import VueHtml5Editor from 'vue-html5-editor'
import 'font-awesome/css/font-awesome.css'


Vue.use(VueHtml5Editor, {
    // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效  
    // global component name 
    name: "vue-html5-editor",
    // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称 
    // if set true,will append module name to toolbar after icon 
    showModuleName: false,
    // 自定义各个图标的class，默认使用的是font-awesome提供的图标 
    // custom icon class of built-in modules,default using font-awesome 
    icons: {
        text: "fa fa-pencil",
        color: "fa fa-paint-brush",
        font: "fa fa-font",
        align: "fa fa-align-justify",
        list: "fa fa-list",
        link: "fa fa-chain",
        unlink: "fa fa-chain-broken",
        tabulation: "fa fa-table",
        image: "fa fa-file-image-o",
        hr: "fa fa-minus",
        eraser: "fa fa-eraser",
        undo: "fa-undo fa",
        "full-screen": "fa fa-arrows-alt",
        info: "fa fa-info",
    },
    // 配置图片模块 
    // config image module 
    image: {
        // 文件最大体积，单位字节  max file size 
        sizeLimit: 512 * 1024,
        // 上传参数,默认把图片转为base64而不上传 
        // upload config,default null and convert image to base64 
        upload: {
            url: null,
            headers: {},
            params: {},
            fieldName: {}
        },
        // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩 
        // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG) 
        // set null to disable compression 
        compress: {
            width: 1600,
            height: 1600,
            quality: 80
        },
        // 响应数据处理,最终返回图片链接 
        // handle response data，return image url 
        uploadHandler(responseText){
            //default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"} 
            var json = JSON.parse(responseText)
            if (!json.ok) {
                alert(json.msg)
            } else {
                return json.data
            }
        }
    },
    // 语言，内建的有英文（en-us）和中文（zh-cn） 
    //default en-us, en-us and zh-cn are built-in 
    language: "zh-cn",
    // 自定义语言 
    i18n: {
        //specify your language here 
        "zh-cn": {
            "align": "对齐方式",
            "image": "图片",
            "list": "列表",
            "link": "链接",
            "unlink": "去除链接",
            "table": "表格",
            "font": "文字",
            "full screen": "全屏",
            "text": "排版",
            "eraser": "格式清除",
            "info": "关于",
            "color": "颜色",
            "please enter a url": "请输入地址",
            "create link": "创建链接",
            "bold": "加粗",
            "italic": "倾斜",
            "underline": "下划线",
            "strike through": "删除线",
            "subscript": "上标",
            "superscript": "下标",
            "heading": "标题",
            "font name": "字体",
            "font size": "文字大小",
            "left justify": "左对齐",
            "center justify": "居中",
            "right justify": "右对齐",
            "ordered list": "有序列表",
            "unordered list": "无序列表",
            "fore color": "前景色",
            "background color": "背景色",
            "row count": "行数",
            "column count": "列数",
            "save": "确定",
            "upload": "上传",
            "progress": "进度",
            "unknown": "未知",
            "please wait": "请稍等",
            "error": "错误",
            "abort": "中断",
            "reset": "重置"
        }
    },
    // 隐藏不想要显示出来的模块 
    // the modules you don't want 
    hiddenModules: [],
    // 自定义要显示的模块，并控制顺序 
    // keep only the modules you want and customize the order. 
    // can be used with hiddenModules together 
    visibleModules: [
        "text",
        "color",
        "font",
        "align",
        "list",
        "link",
        "unlink",
        "tabulation",
        "image",
        "hr",
        "eraser",
        "undo",
        "full-screen",
        "info",
    ],
    // 扩展模块，具体可以参考examples或查看源码 
    // extended modules 
    modules: {
        //omit,reference to source code of build-in modules 
    }
})
export default {
  data () {
    return {
      num1:1,
      num2:0,
      content_2:'',
      content_1:``,
      activeName: '1',
      radio:null,  //单选       输出值为1,2,3,4
      radio2:null, //判断对错   输出值为1,2
      checkList:[],
      value1:false,//开关1
      value2:false,//开关2
      tiankong_list:[
         {input1:''},
      ],
      input:'', 
      info_id:33,
    }

  },
  watch:{
    //监听num1的状态进行判断
   num1 (val) {
      // console.log(val)
        if(this.num1>this.tiankong_list.length){

            let n = this.num1 - this.tiankong_list.length 

            for(let i = 0;i<n;i++){
              this.tiankong_list.push({input1:''})
            }

         }else if(this.num1<this.tiankong_list.length)
         {
            let n =this.tiankong_list.length - this.num1 

            for(let i = 0;i<n;i++){

             this.tiankong_list.pop()
           }
         }
    }
  },
  created(){
    this.init()
  },
  methods: {
      init(){
        this.$http.get('api/homework/addedit',{params:{
          "id":this.info_id,
        }})
        .then((rntD)=>{
            this.content_1 = rntD.data.tc_content1
            this.content_2 = rntD.data.tc_content2
            this.radio = rntD.data.tc_danxuan.toString() //由于传回来的类型是number类型，所以转化为字符串类型
            this.radio2 = rntD.data.tc_panduan.toString() //由于传回来的类型是number类型，所以转化为字符串类型
            this.checkList = JSON.parse(rntD.data.tc_duoxuan)
            this.tiankong_list = JSON.parse(rntD.data.tc_tiankong)
            this.num1 = this.checkList.length
        })
      },
      handleClick(tab, event) {
         // console.log(this.tiankonglisht)
      },
      updateData_1(v){
         //富文本数据传入
         this.content_1 = v;
         // console.log(this.content)
      },
      updateData_2(v){
         //答案 富文本数据传入
         this.content_2 = v;
      },
      handleChange_2(){
      },
      //资料上传保存
      click_submit(){
         this.$http.post('api/homework/addedit_update',{
            'id':this.info_id,
            'tc_content1':this.content_1,
            'tc_content2':this.content_2,
            'tc_danxuan':this.radio,
            'tc_duoxuan':JSON.stringify(this.checkList),
            'tc_panduan':this.radio2,
            'tc_tiankong':JSON.stringify(this.tiankong_list)
         })
         .then((rtnD)=>{
            if(rtnD.data.status == 1)
            {
               console.log(rtnD.data.msg)
               this.$router.push("/homework_rel")
            }
         })

      },
      // click_add(){
      //    this.$router.push('/homework_add')
      // }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.homework{
   padding-bottom: 50px;
   color:#;
}
.homework .head{
  display: flex;
  flex-direction: row;
  flex-wrap:wrap ;

  align-items:center;
  background: #2ac1a2;
  color: #fff;
  line-height: 35px;
  padding-top: 5px;
}
.homework .head .left{
  margin-left: 5px;
}
.homework .head .light{
  flex: 1;  
}
.homework .head .light h4{
  font-weight: 500;
  font-size: 21px;
}
.homework .fwben{
  margin:5px;
}
.homework .fwben ul{
  font-size: 20px;
  color: #2ac1a2;
}
.homework .xuanzhe {
   margin: 5px;
}
.homework ul li {
  
  margin-bottom: 10px;
}
.homework ul li .contain{
  margin-left: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap ;
  align-items:center;
}
.homework ul li .quan{
   margin-right: 5px;
   display: block;
   background-color: #25ba9c;
   color: #fff;
   line-height: 19px;
   width: 20px;
   height: 20px;
   border-radius: 10px;
}
.homework ul li i{
   margin-left: 5px;
}
.homework  .tijiao{
   margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap ;
  align-items:center;
  text-align: center;
  line-height: 35px;
  color: #fff;
}
.homework .grid-content .bg-purple{
   text-align: left;
}
.homework  .tijiao .left{
   flex: 1;
   background: #2ac1a2;
}
.homework  .tijiao .light{
   flex: 1;
   background: #f6c25f;
}
</style>