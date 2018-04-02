<template>

<div class="app">
  
  <h1>基本打卡</h1>
    <b-modal v-if="question_cont.question" v-model="question_modal" :hide-footer="true" :hide-header="true" class="hongbao_box">

      <ul class="as">{{question_cont.question}}<span>(必答题)</span>
        <el-radio-group v-model="radio2">
            <li>
              <el-radio :label="1">
              {{question_cont.option1}}
              </el-radio>
            </li>
            <li>
              <el-radio :label="2">
              {{question_cont.option2}}
              </el-radio>
            </li>
            <li>
              <el-radio :label="3">
              {{question_cont.option3}}
              </el-radio>
            </li>
            <li>
              <el-radio :label="4">
              {{question_cont.option4}}
              </el-radio>
            </li>
        <!--   <li><el-radio :label="1">备选项</el-radio></li>
          <li><el-radio :label="2">备选项</el-radio></li>
          <li><el-radio :label="3">备选项</el-radio></li> -->
        </el-radio-group>
        </ul>
      <div class="footer">
        <b-button variant="" class="qu" :block="true" @click="go_daka()">领取</b-button>
      </div>
      
    </b-modal>


  <div class="form-group">
    
    <label><strong>*</strong>&nbsp;&nbsp;&nbsp;打卡主题：</label>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
 <!--  <div class="form-group">
    <strong>*</strong>&nbsp;&nbsp;&nbsp;<label>打卡时间：</label>
    <template>
      <el-date-picker v-model="value4"
      format='yyyy-MM-dd h:m:s'
      type="datetimerange"
      name='se'
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
      ref="se">

    </el-date-picker>
      {{value4}}
    </template>
  </div> -->
 <!--  <div class="form-group">
    <strong>*</strong>&nbsp;&nbsp;&nbsp;<label>封面图：</label>
    <el-upload class="avatar-uploader" action="/daka/file"  :on-success="handleAvatarSuccess" >
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload> -->
    <!--<input type="file" name="bumth" style="display: inline;">-->
  <!-- </div> -->
  <div class="form-group">
    <strong>*</strong>&nbsp;&nbsp;&nbsp;<label>打卡详情：</label>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea3">
    </el-input>
  </div>
  <el-button type="success" @click="daka()">去打卡</el-button>
</div>

	
</template>
<script>

 import {mapState,mapMutations} from 'vuex'
 import { Toast } from 'mint-ui'
	export default{
		data(){
			return{
				daka_info:[],
				msg:'',
				input:'',
				imageUrl:'',
				textarea3:'',
        radio2:null,
        question_cont:[],
        answer_cont:[],
        question_modal:false,
			}
		},
		computed:{
		    ...mapState(['info'])
		  },
		created(){ 

		//this.$route == req
				// this.$https.get('/api/daka_info',{
				// 	params:{
				// 		id:this.$route.params.id
				// 	}
				// })
			// this.$https.get('/api/daka_info/'+this.$route.params.id)
			// .then((rtnD)=>{
			// 	this.daka_info = rtnD.data.info
			// })
		},
		mounted(){
			// this.$nextTick(()=>{
	  //       let bscroll= new BScroll(this.$refs.se,{
		 //            probeType:3,//时时监听滚动
		 //            scrollX:true
		 //          });
		 //    })

     // new Promise((reslove,reject)=>{
        
     // })
     // .then((queRtnD)=>{
     //  this.$http.get('api/question/answer',{
     //    params:{
     //      question_id:queRtnD
     //    }})
     //  .then((rtnD)=>{
     //    // console.log(rtnD)
     //    this.answer_cont=rtnD.data
     //  })
     // })

     
		},
		methods:{
			daka(){
        this.question_modal=true
         this.$http.get('api/question',{params:{id:this.$route.params.id}})
         .then((rtnD)=>{
          console.log(rtnD)
          this.question_cont=rtnD.data[0]
          // reslove(rtnD.data[0].id)
         })
				
			},
      go_daka(){
        this.question_modal=false

        if(this.radio2 == this.question_cont.answer_id){
          Toast("回答正确")
          this.$http.get('/api/daka',{params:{
            uid:this.info.user_id,    
            input:this.input,
            textarea3:this.textarea3
            // question_id:this.question_cont.id
            // answer:this.radio2

          }})
           .then((rtnD)=>{
            this.$router.push('/daka/daka_rili/'+this.$route.params.id);
           })
        }
        else if(this.radio2 == null){
          Toast("请回答问题")
        }
        else{
          Toast('回答错误')
        }
        this.question_cont=[]
        this.radio2=null
      }
      

		}
	}
</script>
<style scoped>
.el-radio-group{
  display: block;
}
.as{
  text-align: left;
  margin-left:10%;
}
.app{
	margin-bottom: 50px;
  padding:3%;
}
.form-group{
	display: flex;
	padding: 0px 10px;
}
.form-group label{
	width: 180px;
}  
/*.form-group:nth-child(3) label{
	width: 80px;
} */ 
.el-picker-panel__footer{
	float: left;
}
  strong{
    color: red;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>