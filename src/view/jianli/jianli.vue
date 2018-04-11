<template>
<div class="job_jianli">
	<div class="A1">
		 <b-container>
		    <b-row class='A1_1'> 
		        <b-col  cols = "4"  class='zhi'>一元招聘</b-col > 
		        
		        <b-col class='wei' v-if="uptime">更新时间{{uptime}}</b-col > 
		    </b-row > 
		 </b-container >			 
	</div>
	<div class="c1">
        <b-row class='c2_2' > 
        	<b-col cols = "8" v-if="!user_xinxi.nickname"></b-col>
		        <b-col cols = "8" class='qian' v-if="user_xinxi.nickname">
		        	<p class="uname"><strong>
		        		{{user_xinxi.nickname}}
		        	</strong></p>   

		        	<p class="gray">{{user_xinxi.top_edu}}&nbsp;|&nbsp;{{user_xinxi.work_years}}&nbsp;|&nbsp;{{user_xinxi.birth}}</p>
		        	<p class="gray red">状态:{{user_xinxi.current_status}}</p>
		        	<p class="gray">电话:{{user_xinxi.phone}}</p>
		        	<p class="gray">邮箱:{{user_xinxi.e_mail}}</p>

		        </b-col > 
		        
		        <b-col class="figure">
		        	<img src="https://img2.bosszhipin.com/boss/avatar/avatar_2.png" alt="" />
		        	<!-- <b-button class="btn" variant="success">编辑</b-button> -->
		        	<!-- <img v-if="showImg" :src="user_xinxi.nick_img"> v-if="!user_xinxi.nick_img || !showImg"v-if="!user_xinxi.nick_img" -->

		        	<img :src="imgUrl" title="点击添加头像">
        			<input type="file" @change='onUploadImg'>
        			<p class='font_small'>只支持3M以内</p>
        			<!-- <input type="file" @change='onUploadImg'> -->
        			<b-button class="btn" variant="success" @click='saveImg()'>确定</b-button>
		        </b-col >
		    </b-row>
	</div>
	<div class="container">
		<div class="text_a">
			<hr/>
		    <b-row > 
		    	<b-col cols='8'><h5>基本信息</h5></b-col >
		    	<b-col class='tianjia' >
		    		<b-button class="btn" variant="success" @click='jibenadd()' v-if="!user_xinxi.nickname">添加</b-button>
		    	</b-col >	
		    </b-row > 
		    <div class='text_tt' v-if="user_xinxi.nickname">
		    	<div class="j_content">
		    		<b-row >
		    			<b-col cols="12">姓名: <span v-show="!inputIsShow">{{user_xinxi.nickname}}</span>
		    				<b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.nickname"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">性别: <span v-show="!inputIsShow">{{user_xinxi.sex}}</span>
		    				<b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.sex"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">年龄: <span v-show="!inputIsShow">{{user_xinxi.birth}}</span>
		    				<b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.birth"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">工作经验: <span v-show="!inputIsShow">{{user_xinxi.work_years}}</span>
		    				<!-- <b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.work_years"></b-form-input> -->
		    				<select v-show="inputIsShow" v-model="user_xinxi.work_years">
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
		    		<b-row >
		    			<b-col cols="12">毕业时间: <span v-show="!inputIsShow">{{user_xinxi.graduated}}</span>
		    				<!-- <b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.graduated"></b-form-input> -->
		    				<select v-show="inputIsShow" v-model="user_xinxi.graduated">
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
		    		<b-row >
		    			<b-col cols="12">毕业院校: <span v-show="!inputIsShow">{{user_xinxi.school_name}}</span>
		    				<b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.school_name"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">学历: <span v-show="!inputIsShow">{{user_xinxi.top_edu}}</span>
		    				<!-- <b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.top_edu"></b-form-input> -->
		    				<select v-show="inputIsShow" v-model="user_xinxi.top_edu">
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
		    		<b-row >
		    			<b-col cols="12">专业: <span v-show="!inputIsShow">{{user_xinxi.major}}</span>
		    				<b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.major"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">地址: <span v-show="!inputIsShow">{{user_xinxi.current_city}}</span>
		    				<b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.current_city"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">电话: <span v-show="!inputIsShow">{{user_xinxi.phone}}</span>
		    				<b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.phone"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">邮箱: <span v-show="!inputIsShow">{{user_xinxi.e_mail}}</span>
		    				<b-form-input type="text" v-show="inputIsShow" v-model="user_xinxi.e_mail"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<div class="btn">
		    			<span v-show="inputIsShow" @click="update()">确定</span>
		    			<span v-show="!inputIsShow" @click="updateInfo()">修改</span>
		    		</div>
		    	
		    	</div>
		    </div>
		</div>
		<div class="text_a">
			<hr/>
		    <b-row > 
		    	<b-col cols='8' >
		    		<h5>求职意向</h5>
		    	</b-col >
		    	<b-col class='tianjia' >
		    		<b-button class="btn" variant="success" @click="qiuzhiadd()" v-if="!user_xinxi.expected_position">添加
		    		</b-button>
		    	</b-col >	
		    </b-row > 
		    <div class='text_tt' v-if="user_xinxi.expected_position">
		    	<div class="j_content">
		    		<b-row>
		    			<b-col cols="12">工作性质：<span v-show="!inputIsShow1">{{user_xinxi.job_type}}</span>
		    				<b-form-input type="text" v-show="inputIsShow1" v-model="user_xinxi.job_type"></b-form-input></b-col>
		    		</b-row>
		    		<b-row>
		    			<b-col cols="12">工作地点：<span v-show="!inputIsShow1">{{user_xinxi.expected_location}}</span>
		    				<b-form-input type="text" v-show="inputIsShow1" v-model="user_xinxi.expected_location"></b-form-input></b-col>
		    		</b-row>
		    		<b-row>
		    			<b-col cols="12">从事职业：<span v-show="!inputIsShow1">{{user_xinxi.expected_position}}</span>
		    				<b-form-input type="text" v-show="inputIsShow1" v-model="user_xinxi.expected_position"></b-form-input></b-col>
		    		</b-row>
		    		<b-row>
		    			<b-col cols="12">期望月薪：<span v-show="!inputIsShow1">{{user_xinxi.expected_monthly_income}}</span>
		    				<b-form-input type="text" v-show="inputIsShow1" v-model="user_xinxi.expected_monthly_income"></b-form-input></b-col>
		    		</b-row>
		    		<div class="btn">
		    			<span v-show="inputIsShow1" @click="update1()">确定</span>
		    			<span v-show="!inputIsShow1" @click="updateInfo1()">修改</span>
		    		</div>	
		    	</div>
		    </div>
		</div>
		<div class="text_a">
			<hr/>
		    <b-row > 
		    	<b-col cols='8' ><h5>工作经历</h5></b-col >
		    	<b-col class='tianjia' >
		    		<b-button class="btn" variant="success" @click="shixiadd()" >添加
		    		</b-button>
		    	</b-col >		
		    </b-row >
		    <div class='text_tt' v-if="jingli">
		    	<div class="j_content" v-for="(item,n) in jingli">
		    		<b-row >
		    			<b-col cols="12">时间：<span v-show="!inputIsShow2 || cur_tr_index != n">{{item.working_time}}</span>
		    				<b-form-input type="text" v-show="inputIsShow2 && cur_tr_index == n" v-model="item.working_time"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">公司：<span v-show="!inputIsShow2 || cur_tr_index != n">{{item.re_company_name}}</span>
		    				<b-form-input type="text" v-show="inputIsShow2 && cur_tr_index == n" v-model="item.re_company_name"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">职位：<span v-show="!inputIsShow2 || cur_tr_index != n">{{item.job_title}}</span>
		    				<b-form-input type="text" v-show="inputIsShow2 && cur_tr_index == n" v-model="item.job_title"></b-form-input>
		    			</b-col>
		    		</b-row>
		    		<b-row >
		    			<b-col cols="12">行业：<span v-show="!inputIsShow2 || cur_tr_index != n">{{item.job_description}}</span>
		    				<b-form-input type="text" v-show="inputIsShow2 && cur_tr_index == n" v-model="item.job_description"></b-form-input>
		    			</b-col>
		    		</b-row>

					<b-row >
		    			<b-col cols="5">工作证明：</b-col>
		    			<b-col>
		    				<img :src="$jobApiURL+item.work_know" v-if="!inputIsShow2 || cur_tr_index != n">
		    				<img :src="imgUrl2 || $jobApiURL+item.work_know" v-if="inputIsShow2 && cur_tr_index == n" alt="">
							<input type="file" v-if="inputIsShow2 && cur_tr_index == n" @change='onUploadImg2'>
		    			</b-col>
	    				
		    			
		    		</b-row>

		    		
		    		<input type="hidden" v-model='item.experience_id'>
		    		<div class="btn">
		    			<span v-show="inputIsShow2 && cur_tr_index == n" @click="update2(n)">确定</span>
		    			<span v-show="!inputIsShow2" @click="updateInfo2(n)">修改</span>
		    		</div>	
		    	</div>
		    	
		    </div>
		</div>
<!-- 		<div class="text_a">
			<hr/>
		    <b-row > 
		    	<b-col cols='8' ><h5>我的优势</h5></b-col >
		    	<b-col class='tianjia' >
		    		<b-button class="btn" variant="success" @click="youshiadd()">添加
		    		</b-button>
		    	</b-col >	
		    </b-row > 
		    <div class='text_tt' v-if="has">
		    	<div class="j_content">
		    		<b-row>
		    			<b-col cols="12">优势：<span v-show="!inputIsShow3">{{user_xinxi.peculiarity}}</span>
		    				<b-form-input type="text" v-show="inputIsShow3" v-model="user_xinxi.peculiarity"></b-form-input></b-col>
		    		</b-row>
		    		<div class="btn">
		    			<span v-show="inputIsShow3" @click="update3()">确定</span>
		    			<span v-show="!inputIsShow3" @click="updateInfo3()">修改</span>
		    		</div>	
		    	</div>
		    </div>

		</div>   -->
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			has:false,
			modalShow:true,
			inputIsShow:false,
			inputIsShow1:false,
			inputIsShow2:false,
			inputIsShow3:false,
			cur_tr_index:null,
			img2:null,
			imgUrl2:'',//证明
			user_xinxi:[],
			jingli:[],
			img:null,
			imgUrl:'',//头像
			showImg:true,//头像
			uptime:''//更新时间
		}
	
	},
	// filters:{
	// 	getDate:function() {
	// 		// body...
	// 		let 
	// 		return 
	// 	}
	// },
	mounted(){
		this.init()
	},
	methods:{
		init(){
			this.$http.get(this.$jobApiURL+'/api/jianli/',{
				params:{uid:this.$route.params.id}
			})
			.then((rtnD)=>{
				// console.log(rtnD.data.user_xinxi)
				this.user_xinxi=rtnD.data.user_xinxi
				this.jingli = rtnD.data.nick_jingli
				this.imgUrl = this.$jobApiURL+this.user_xinxi.nick_img ;
				this.has=true
				this.uptime= rtnD.data.uptime

			})
		},
		jibenadd(){
 			this.$router.push('/jianli/add/jiben/'+this.$route.params.id)
		},
		qiuzhiadd(){
			this.$router.push('/jianli/add/qiuzhi/'+this.$route.params.id)
		},
		shixiadd(){
			this.$router.push('/jianli/add/jingli/'+this.$route.params.id)
		},
		youshiadd(){
			this.$router.push('/jianli/add/youshi/'+this.$route.params.id)
		},
		updateInfo(){

			this.inputIsShow = true
			this.inputIsShow1 = false
			this.inputIsShow2 = false
			this.inputIsShow3 = false
		},
		update(){
			this.inputIsShow = false
			this.$http.get(this.$jobApiURL+'/api/jianli/updatenick/',{
				params:{
					uid:this.$route.params.id,
					nickname:this.user_xinxi.nickname,
					sex:this.user_xinxi.sex,
					school_name:this.user_xinxi.school_name,
					top_edu:this.user_xinxi.top_edu,
					major:this.user_xinxi.major,
					current_city:this.user_xinxi.current_city,
					phone:this.user_xinxi.phone,
					e_mail:this.user_xinxi.e_mail,
					birth:this.user_xinxi.birth,
					work_years:this.user_xinxi.work_years,
					graduated:this.user_xinxi.graduated

				}})
			.then((rtnD)=>{
				console.rtnD
			})
			
		},
		updateInfo1(){
			this.inputIsShow1 = true
			this.inputIsShow = false
			this.inputIsShow2 = false
			this.inputIsShow3 = false
		},
		update1(){
			this.inputIsShow1 = false
			this.$http.get(this.$jobApiURL+'/api/jianli/updateqiuzhi/',{
				params:{
					uid:this.$route.params.id,
					job_type:this.user_xinxi.job_type,
					expected_location:this.user_xinxi.expected_location,
					expected_position:this.user_xinxi.expected_position,
					expected_monthly_income:this.user_xinxi.expected_monthly_income
				}})
			.then((rtnD)=>{
				console.rtnD
			})
		},
		updateInfo2(n){
			this.cur_tr_index = n 
			this.inputIsShow2 = true
			this.inputIsShow1 = false
			this.inputIsShow = false
			this.inputIsShow3 = false
			console.log(this.cur_tr_index)
		},
		update2(n){
			// this.cur_tr_index=n
			this.inputIsShow2 = false
			// console.log(n)
			// this.$http.get(this.$jobApiURL+'/api/job/updatejingli/',{
			// 	params:{
			// 		uid:this.$route.params.id,
			// 		experience_id:this.jingli[n].experience_id,
					
			// 		working_time:this.jingli[n].working_time,
			// 		re_company_name:this.jingli[n].re_company_name,
			// 		job_title:this.jingli[n].job_title,
			// 		job_description:this.jingli[n].job_description,
			// 	}
			// })
			// .then((rtnD)=>{
			// 	console.log(rtnD)
			// })



			this.$http.interceptors.request.eject(this.$myInterceptor)
			let zhengming = new FormData(); 
	      	if(this.img2){
	      	  	zhengming.append('file', this.img2);
	      	}else{
	      		zhengming.append('file', this.jingli[n].work_know);
	      	}
	      	// console.log(zhengming.get('file'))
	      	zhengming.append('jingli', JSON.stringify(this.jingli[n]));
	      	zhengming.append('id', this.$route.params.id);

	      	// console.log(zhengming.get('jingli'))
	      	this.$http({
	      	  method: "post",
	      	  url:this.$jobApiURL+'/api/jianli/updatejingli/',
	      	  data: zhengming,
	      	  processData: false
	      	})
	      	.then(()=>{
	      		console.log(111)
	      		this.init()
	      	})
	      	// this.init()
	      	// this.imgUrl2 = window.URL.createObjectURL(this.img2)

		},
		updateInfo3(){
			this.inputIsShow3 = true
			this.inputIsShow1 = false
			this.inputIsShow2 = false
			this.inputIsShow = false
		},
		update3(){
			this.inputIsShow3 = false
		},
		onUploadImg(e){
			// this.showImg=false
	        this.img = e.target.files[0];
	        this.imgUrl = window.URL.createObjectURL(this.img);
	        // console.log(window.URL.createObjectURL(this.img))
      	},
      	onUploadImg2(e){
			// this.showImg=false
	        this.img2 = e.target.files[0];
	        this.imgUrl2 = window.URL.createObjectURL(this.img2);
	        // console.log(window.URL.createObjectURL(this.img))
      	},
      	saveImg(){
      		// if(this.imgUrl == ''){
      		// 	this.imgUrl = this.user_xinxi.nick_img
      		// }
      		// this.$http.get(this.$jobApiURL+'/api/job/saveimg/',{
      		// 	params:{
      		// 		uid:this.$route.params.id,
      		// 	}
      		// }).then((rtnD)=>{
      		// 	console.log(rtnD)
      		// })



      		this.$http.interceptors.request.eject(this.$myInterceptor);
      		let jianli = new FormData(); 
	      	if(this.img){
	      	  jianli.append('file', this.img);
	      	}
	      	// jianli.append('type', 'edit');
	      	jianli.append('info', this.$route.params.id);

	      	// console.log(jianli.get('info'))
	      	this.$http({
	      	  method: "post",
	      	  url:this.$jobApiURL+'/api/jianli/saveimg/',
	      	  data: jianli,
	      	  processData: false
	      	})
	      	.then(()=>{
	      		console.log(111)
	      		
	      	})
	      	// this.$router.push('/jianli/jianli/'+this.$route.params.id)
      	}
	},
	directives:{
		focus:{
			update:function(el,{value}){
				el.focus()
			}
		}
	}
}
	
	
</script>
<style type="text/css">
img{
	width: 100%;
}
	p{
		margin: 0;
		white-space: nowrap;
		overflow: hidden;

	}
	hr{
		margin-top: 0rem;
	    margin-bottom: 0.5rem;
	}
	h5{
		font-size: 18px;
		font-weight:700;
	}
	button{
		margin: 10%;
		padding:0;
	}
	hr{
		width: 100%;
	}
	.red{
		color: red;
	}
	.form-control{
		margin-bottom: 3%;
		width: 60%;
		display: inline-block;
		padding: 0.1rem;
	}
	.job_jianli{
		margin-bottom:5rem;
	}
	.figure.col{
		padding: 0px;
		width: 30%;
	}
	.figure.col input{
		opacity: 0;
	    height: 8rem;
	    width: 100%;
	}
	.figure.col input+input{
		opacity: 1;
		height: 2rem;
		width: 75%;
	}
	.figure.col img{
		 position: absolute; 
	     width: 100%; 
	     height: 8rem; 
	     line-height: 8rem; 
	     font-size: 0.94444444rem;
	}
	.row.c2_2{
		width: 100%;
	}
	.A1{
		width: 100%;
		padding: 2%;
		box-shadow: 0 0 10px rgba(0,0,0,1);
		background: #40ffe5;
	}
	.row.A1_1{
		margin:0;
	}
	.c1{
		margin-top: 3%;
	}
	.qian{
		margin: auto;
	}
	.qian.col-8{
		padding: 0;
		margin-left: 1%;
		margin-top: 0%
	}
	.b-form-input{
		margin-left: 5%;
	}
	.uname{
		font-size: 2rem;
	}
	.container button{
		margin-top: 0;
	}
	.row{
		align-items: center;
	}
	h5.jl_content{
		font-size: 16px;
	}
	.text_tt .j_content .row{
		text-align: left;
	}
	.text_tt .j_content h5 a{
		float: right;
	}
	.btn span{
		float: right;
		color: #007bff;
	}
/*	.j_content+.j_content{
		margin-top:2rem;
	}*/
	.font_small{
		font-size: 0.3rem;
		color: #999;
	}
	span{
		display: inline-block;
	}
	.job_jianli select{
		width: 60%;
		margin-bottom: 3%;
	}
</style>