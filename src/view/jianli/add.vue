<template>
	<div class="container jladd">
		<h3>信息录入</h3>

		<div class="jb" v-if="type == 'jiben'">
			<mt-field label="姓名:" placeholder="请输入" v-model="uname"></mt-field>
			
			<mt-field label="出生年月:" placeholder="请输入" v-model="birthdate"></mt-field>
			<mt-field label="户籍:" placeholder="请输入" v-model="household"></mt-field>
			<mt-field label="毕业院校:" placeholder="请输入" v-model="school_name"></mt-field>
			<mt-field label="毕业时间:" placeholder="请输入" v-model="graduated"></mt-field>
			 <mt-field label="工作年限:" placeholder="请输入" v-model="work_years"></mt-field>
			 <mt-field label="工作状态:" placeholder="请输入" v-model="status"></mt-field>
			 <mt-field label="学历:" placeholder="请输入" v-model="educational"></mt-field>
			<mt-field label="专业:" placeholder="请输入" v-model="major"></mt-field>
			<mt-field label="电话:" placeholder="请输入" v-model="tel"></mt-field>
			<mt-field label="邮箱:" placeholder="请输入" v-model="mail"></mt-field>
			
			<b-row>
				<b-col>性别&nbsp;:</b-col>
				<b-col cols="8">
					 <el-radio v-model="radio" label="1"><span>男</span></el-radio>
					 <el-radio v-model="radio" label="2"><span>女</span></el-radio>
				</b-col>
			</b-row>
			
			
			<b-row>
				<b-col>自我推荐:</b-col>
				<b-col cols="8">
					<textarea v-model="peculiarity" placeholder="请输入"cols="20" rows="4"></textarea>
				</b-col>
			</b-row>
		</div>
		<div class="qiuzhi" v-if="type == 'qiuzhi' " >
		         <mt-field label="期望工作性质:" placeholder="请输入" v-model="job_type"></mt-field>
		         <mt-field label="期望工作地点:" placeholder="请输入" v-model="expected_location"></mt-field>
		         <mt-field label="期望从事职业:" placeholder="请输入" v-model="expected_position"></mt-field>
		         <mt-field label="期望月薪:" placeholder="请输入" v-model="expected_monthly_income"></mt-field>
		</div>
		<div class="shixi" v-if="type == 'jingli' " >
		    <mt-field label="工作时间:" placeholder="请输入" v-model="working_time"></mt-field>
		    <mt-field label="工作公司:" placeholder="请输入" v-model="company_name"></mt-field>
		    <mt-field label="工作行业:" placeholder="请输入" v-model="job_description"></mt-field>
		    <mt-field label="工作岗位:" placeholder="请输入" v-model="job_title"></mt-field>
		    
		<!-- 	<b-row>
				<b-col>工作时间&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="working_time" >
				</b-col>
			</b-row>
			<b-row>
				<b-col>工作公司&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="company_name" >
				</b-col>
			</b-row>
			<b-row>
				<b-col>工作行业&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="job_description" >
				</b-col>
			</b-row>
			<b-row>
				<b-col>工作岗位&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="job_title" >
				</b-col>
			</b-row> -->
			<b-row>
				<b-col>工作证明&nbsp;:</b-col>
				<b-col cols="8">
					<img :src="imgUrl" title="点击添加证明">
        			<input type="file" class="zhengshu" @change='onUploadImg'>
				</b-col>
			</b-row>
		</div>
		<div class="youshi" v-if="type == 'youshi' " >
			<b-row>
				<b-col>优势&nbsp;:</b-col>
				<b-col cols="8">
					<!-- <input type="text" v-model="superiority" > -->
					<textarea v-model="superiority" cols="20" rows="4"></textarea>
				</b-col>
			</b-row>
		</div>

		<div class="btn">
			<b-button class="btn" 
			variant="success"
			style="width:200%;
			background: #409eff;
			border:none"
			 @click='add()'>确认</b-button>
		</div>
	</div>
	
	
</template>
<script type="text/javascript">
import { Toast } from 'mint-ui' 

export default{
	data(){
		return{
			radio: '1',//性别选项
			uname:'', //姓名
			sex:'',   //性别
			birthdate:'', //出生年月
			// volk:'',  //民族
			// political:'' ,//政治面貌
			household:'', //户籍
			school_name:'',//毕业院校
			graduated:'',//入校时间
			educational:'',//学历
			major:'',//专业
			work_years:'',//工作年限
			tel:'',//电话
			mail:'',//邮箱
			status:'',//工作状态
			peculiarity:'',//自我推荐
			type:this.$route.params.type,
			intension:'',//求职意向
			practice:'',//经历
			superiority:'',//优势

			job_type:'',//期望工作性质
			expected_location:'',//期望工作地点(市)
			expected_position:'',//期望从事职业
			expected_monthly_income:'',//期望月薪

			working_time:'',//工作时间
			company_name:'',//公司
			job_description:'',//工作行业
			job_title:'',//工作岗位

			imgUrl:'',
			img:null,


		}
	},
	mounted(){
		console.log(this.$route.params.type)
	},
	methods:{
		onUploadImg(e){
			// this.showImg=false
	        this.img = e.target.files[0];
	        this.imgUrl = window.URL.createObjectURL(this.img);
	        // console.log(window.URL.createObjectURL(this.img))
      	},

		add(){
			if(this.type == 'jiben'){
				if(this.radio == 1){
					this.sex ="男"
				}else{
					this.sex ="女"
				}
				this.$http.get(this.$jobApiURL+'/api/jianli/nickinfo/',{params:{
					id:this.$route.params.id,
					nickname:this.uname,
					sex:this.sex,
					birthdate:this.birthdate,
					household:this.household, 
					educational:this.educational,
					work_years:this.work_years,
					peculiarity:this.peculiarity,
					tel:this.tel,
					mail:this.mail,
					status:this.status,
					type:this.type,

					school_name:this.school_name,
					graduated:this.graduated,
					major:this.major

				}})
				.then((rtnD)=>{
					 Toast({
           			 message:rtnD.data.msg
           			})
					// this.$router.push('/jianli/jianli/'+this.$route.params.id)
				})
			}else if(this.type == 'qiuzhi'){
				this.$http.get(this.$jobApiURL+'/api/jianli/nickinfo/',{params:{
					id:this.$route.params.id,
					type:this.type,
					job_type:this.job_type,
					expected_location:this.expected_location,
					expected_position:this.expected_position,
					expected_monthly_income:this.expected_monthly_income,
				}})
				.then((rtnD)=>{
					 Toast({
           			 message:rtnD.data.msg
           			})
				})
			}else if(this.type == 'jingli'){
			// 	console.log('jingli')
				// this.$http.get(this.$jobApiURL+'/api/job/nickinfo',{
				// 	params:{
				// 		id:this.$route.params.id,
				// 		type:this.type,
				// 		working_time:this.working_time,
				// 		company_name:this.company_name,
				// 		job_description:this.job_description,
				// 		job_title:this.job_title,
				// 	}})
				// .then((rtnD)=>{
				// 	console.log(rtnD)
				// })

				this.$http.interceptors.request.eject(this.$myInterceptor);
	      		let jianli = new FormData(); 
		      	if(this.img){
		      	  jianli.append('file', this.img);
		      	}
		      	jianli.append('type', this.type);
		      	jianli.append('uid', this.$route.params.id);
		      	jianli.append('job_title', this.job_title);
		      	jianli.append('working_time', this.working_time);
		      	jianli.append('company_name', this.company_name);
		      	jianli.append('job_description', this.job_description);

		      	console.log(jianli.get('uid'))
		      	this.$http({
		      	  method: "post",
		      	  url:this.$jobApiURL+'/api/jianli/addjingli/',
		      	  data: jianli,
		      	  processData: false
		      	})
		      	.then((rtnD)=>{
		      		 Toast({
           			 message:rtnD.data.msg
           			})
		      	})
			}
			this.$router.push('/jianli/jianli/'+this.$route.params.id)
			
			
		}
	}
	
}
</script>
<style type="text/css" scoped>
	.row{
		margin-bottom: 3%;

	}
	select{
		width: 100%;
	}
	.jladd{
		margin-top: 2rem;
		margin-bottom: 6rem;
	}
	.shixi img{
		position: absolute;
	    line-height: 8rem;
	    width: 88%;
	    height: 100%;
	    left: 15px;
	    right: 15px;
	}
	.shixi .zhengshu{
	    opacity: 0;
	    height: 8rem;
	    width: 100%;

	}
</style>