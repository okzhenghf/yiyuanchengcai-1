<template>
	<div class="container jladd">
		<h3>信息录入</h3>
		<div class="jb" v-if="type == 'jiben'">
			<b-row>
				<b-col>姓名&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="uname" >
				</b-col>
			</b-row>
			<b-row>
				<b-col>性别&nbsp;:</b-col>
				<b-col cols="8">
					 <el-radio v-model="radio" label="1"><span>男</span></el-radio>
					 <el-radio v-model="radio" label="2"><span>女</span></el-radio>
				</b-col>
			</b-row>
			<b-row>
				<b-col>出生年月&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="birthdate">
				</b-col>
			</b-row>
			<!-- <b-row>
				<b-col>民族&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="volk">
				</b-col>
			</b-row>
			<b-row>
				<b-col>政治面貌&nbsp;:</b-col>
				<b-col cols="8">
					 <input type="text" v-model="political">
				</b-col>
			</b-row> -->
			<b-row>
				<b-col>户籍&nbsp;:</b-col>
				<b-col cols="8">
					 <input type="text" v-model="household">
				</b-col>
			</b-row>
			<b-row>
				<b-col>毕业院校&nbsp;:</b-col>
				<b-col cols="8">
					 <input type="text"v-model="school_name">
				</b-col>
			</b-row>
			 <b-row>
				<b-col>毕业时间&nbsp;:</b-col>
				<b-col cols="8">
					 <!-- <input type="text" v-model="graduated"> -->
					 <select v-model="graduated">
	                    <option value="">请选择</option>
	                    <option value="2018-6">2018-6</option>
	                    <option value="2017-6">2017-6</option>
	                    <option value="2016-6">2016-6</option>
	                    <option value="2015-6">2015-6</option>
	                    <option value="2014-6">2014-6</option>
	                    <option value="2013-6">2013-6</option>
	                    <option value="2012-6">2012-6</option>
	                    <option value="2011-6">2011-6</option>
	                    <option value="2010-6">2010-6</option>
	                    <option value="2009-6">2009-6</option>
	                    <option value="2008-6">2008-6</option>
	                </select>
				</b-col>
			</b-row> 

			<b-row>
				<b-col>学历&nbsp;:</b-col>
				<b-col cols="8">
					<!-- <input type="text" v-model="educational"> -->
					<select v-model="educational">
	                    <option value="">请选择</option>
	                    <option value="小学">小学</option>
	                    <option value="初中">初中</option>
	                    <option value="高中">高中</option>
	                    <option value="中专">中专</option>
	                    <option value="大专">大专</option>
	                    <option value="高职">高职</option>
	                    <option value="本科">本科</option>
	                    <option value="研究生">研究生</option>
	                    <option value="博士">博士</option>
	                    <option value="教授">教授</option>
	                </select>
				</b-col>
			</b-row>

			<b-row>
				<b-col>工作年限&nbsp;:</b-col>
				<b-col cols="8">
					<!-- <input type="text" v-model="educational"> -->
					<select v-model="work_years">
	                    <option value="">请选择</option>
	                    <option value="应届生">应届生</option>
	                    <option value="往届生">往届生</option>
	                    <option value="1年内">1年内</option>
	                    <option value="2年内">2年内</option>
	                    <option value="3年内">3年内</option>
	                    <option value="4年内">4年内</option>
	                    <option value="5年内">5年内</option>
	                    <option value="5年以上">5年以上</option>
	                    <option value="10年以上">10年以上</option>
	                </select>
				</b-col>
			</b-row>
			<b-row>
				<b-col>专业&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="major">
				</b-col>
			</b-row>
			<b-row>
				<b-col>电话&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="tel">
				</b-col>
			</b-row>
			<b-row>
				<b-col>邮箱&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="mail">
				</b-col>
			</b-row>
			<b-row>
				<b-col>工作状态&nbsp;:</b-col>
				<b-col cols="8">
					<select v-model="status">
	                    <option value="">请选择</option>
	                    <option value="就业">就业</option>
	                    <option value="目前正在找工作">目前正在找工作</option>
	                    <option value="待业">待业</option>
	                </select>
				</b-col>
			</b-row>
			<b-row>
				<b-col>自我推荐:</b-col>
				<b-col cols="8">
					<textarea v-model="peculiarity" cols="20" rows="4"></textarea>
				</b-col>
			</b-row>
		</div>
		<div class="qiuzhi" v-if="type == 'qiuzhi' " >
			<b-row>
				<b-col>期望工作性质&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="job_type" >
				</b-col>
			</b-row>
			<b-row>
				<b-col>期望工作地点(市)&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="expected_location" >
				</b-col>
			</b-row>
			<b-row>
				<b-col>期望从事职业&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="expected_position" >
				</b-col>
			</b-row>
			<b-row>
				<b-col>期望月薪&nbsp;:</b-col>
				<b-col cols="8">
					<input type="text" v-model="expected_monthly_income" >
				</b-col>
			</b-row>
		</div>
		<div class="shixi" v-if="type == 'jingli' " >
			<b-row>
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
			</b-row>
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
			<b-button class="btn" variant="success" @click='add()'>确认</b-button>
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