<template>
   <div class="homework">
      <div class="head">
         <div class="left"><i class="fa fa-angle-left fa-2x"></i></div>
         <div class="light">
           <h4>发布作业</h4>
         </div>
      </div>
      <div class="coatainer">
          <div class="title">
            <div class="left">主题</div>
            <div class="light"><el-input v-model="title" placeholder="请输入内容"></el-input></div>
          </div>
          <hr/>
          <div class="title_1">
            <div class="left">发布时间</div>
            <div class="light">
              <el-radio-group v-model="radio">
                <el-radio :label="time_date">立即</el-radio>
                <el-radio :label="liji">
                    <el-date-picker size="small" format="MM月dd日hh:mm"  v-model="liji" type="datetime">
                    </el-date-picker>
                </el-radio>
              </el-radio-group>
            </div>
          </div>
          <hr/>
          <div class="title_2">
            开始与结束时间
             <div>
               <el-date-picker size="small" format="MM月dd日hh:mm"  v-model="time_star" type="datetime">
               </el-date-picker>
               <el-date-picker size="small" format="MM月dd日hh:mm"  v-model="time_end" type="datetime">
               </el-date-picker>
             </div>
          </div>
          <hr>
          <div class="title_3">
            <div class="ti">选取班级</div>
            <hr/>
            <div class="duanxuan">
              <ul>
               <!--  <el-checkbox-group v-model="checkList">
                     <el-checkbox label="A"></el-checkbox>
                     <el-checkbox label="B"></el-checkbox>
                     <el-checkbox label="C"></el-checkbox>
                     <el-checkbox label="D"></el-checkbox>
                  </el-checkbox-group> -->
                <li><el-checkbox v-model="checked1">A</el-checkbox></li>
                <li><el-checkbox v-model="checked2">A</el-checkbox></li>
                <li><el-checkbox v-model="checked3">A</el-checkbox></li>
              </ul>
            </div>
          </div>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>选取内容</span>
            </div>
           <div class="nr_box">
              <el-checkbox-group v-model="checkList" v-for="info in info_list"  class="checkbox_list">
                <div  class="text">
                   <el-checkbox :label="info.id">{{info.tc_content1.substr(0, 8)}}</el-checkbox>
                </div>
              </el-checkbox-group>
           </div>
          </el-card>
          <div class="btnn" @click="click_liji">
            立即发布
          </div>
      </div>
   </div>
</template>

<script type="es6">
import 'font-awesome/css/font-awesome.css'
export default {
  data () {
    return {
      title:"",//主題內容
      radio:null,//当前时间
      value1:'',
      liji:"", //时间颁布
      time_star:"", //时间颁布
      time_end:"", //时间颁布
      checked1:false,
      checked2:false,
      checked3:false,
      time_date:new Date(),//获取当前时间
      checkList:[],//作业创建id 存在这
      info_list:[],//获取hw_rel_find返回的信息
    }

  },
  created(){
    this.init()
  }
  ,
  methods: {
    init(){
      this.$http.get('api/homework/hw_rel_find')
        .then((rntD)=>{
          this.info_list = rntD.data
        })
    }
    ,
    click_liji(){
      this.$http.post('api/homework/rel_save',{
        "tc_title":this.title,
        "now_time":this.radio.valueOf()/1000,
        "s_time":this.time_star.valueOf()/1000,
        "e_time":this.time_end.valueOf()/1000,
        "homework_add_id":JSON.stringify(this.checkList),
      })
      .then((rntD)=>{
        if(rntD.data.status){
          console.log(rntD.data.msg)

        }
      })
    }

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 公共样式 */

.homework{
   padding-bottom: 50px;
   color:#625c65;
   font-weight: bold;
}
.homework hr{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

}
/* ------------------------------- */
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
.homework .title{
  line-height: 35px;
  margin-top: 15px;
  display: flex;
  flex-direction:row;
  align-items:center;
  text-align: center;
}
.homework .title .left{
  flex: 1;
}
.homework .title .light{
  margin-right: 10px;
  flex: 2;
}
.homework .title_1{
  display: flex;
  flex-direction:row;
  align-items:center;
  text-align: center;
}
.homework .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 150px;
}
.homework .title_1 .left{
  flex: 1;
}
.homework .title_1 .light{
  flex:3;
  flex-direction:row;
}
.homework .title_3 .ti{
  text-align: left;
  margin-left:10px; 
}
.homework .title_3 .duanxuan ul{
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  align-items:center;
  text-align: center;
}
.homework .title_3 .duanxuan ul li{
  width: 45%;
}
.homework .btnn{
  font-weight: normal;
  margin:40px 20px;
  background-color: #25b89c;
  border-radius: 5px;
  color: #fff;
  line-height: 35px;
}
.homework .box-card {
  margin:5px;
  
    
}
.homework .nr_box{
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  text-align: left;
  margin-left: 5px;
}
.homework .checkbox_list{
  width: 50%;
}
.homework .text {
    font-size: 14px;
}



</style>