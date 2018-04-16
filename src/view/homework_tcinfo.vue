<template>
   <div class="homework">
      <div class="head">
         <div class="left"><i class="fa fa-angle-left fa-2x"></i></div>
         <div class="light">
           <h4>发布作业详情</h4>
         </div>
      </div>
      <div class="info_list">
        
        <el-collapse v-model="activeNames" @change="handleChange(i.homework_add_id)" v-for="(i,n) in info_list">
          <el-collapse-item  :name="n" >
            <template slot="title">
              {{i.tc_title}}  <span>{{i.now_time|date_time}}</span>
            </template>
            <div class="content_info">
              <el-collapse  @change="handleChange_list">
                <el-collapse-item  :name="n" v-for="(i,n) in info_list">
                  <template slot="title">
                    课程解读  <span>几班几号</span>
                  </template>
                  </el-collapse-item>
              </el-collapse>
            </div>
            
          </el-collapse-item>
        </el-collapse>
      </div>

   </div>
</template>

<script type="es6">
import 'font-awesome/css/font-awesome.css'
export default {
  data() {
      return {
        info_list:null,
        activeNames:1,
      }
       
  },
  filters: {  
      date_time: function(vale){
        let n = vale*1000
        let unixTimestamp = new Date(n) ;
        let commonTime = unixTimestamp.toLocaleString();
        return commonTime
      } 
  },
  created(){
      this.init();
  },
  methods: {
      init(){
        this.$http.get('api/homework/tcinfo_index')
          .then((rntD)=>{
            console.log(rntD.data)
            this.info_list =  rntD.data
          })
      },
     handleChange(val) {
      console.log(val)
        // this.$http.post('api/homework/tcin_list',{
        //   'homework_add_id':val
        // })
      },
      handleChange_list(val){

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

</style>