<template>
	<div class="tain">	
		<div class="a1"> 
			    <b-row class='a1_1'> 
			        <b-col class='zhi'>一元招聘</b-col > 
			        <b-col class='wei'> <div class="kang">搜索职位</div> </b-col > 
			    </b-row > 
		</div>
		<div class="b1">
				<b-row class='text-center b1_1'> 
			        <b-col cols = “6”  class='qian'> {{job_info.job_name}} </b-col > 
			        <b-col > </b-col > 
			        <b-col >  {{job_info.salary_low}}-{{job_info.salary_hig}} </b-col > 
			   </b-row>
			   <b-row class='text-center b2_1'> 
			        <b-col cols = “6”  class='qian'>{{job_info.city}}|{{job_info.work_time}}|{{job_info.education}}|</b-col > 
			        <b-col > </b-col > 
			        <b-col >  发布于昨天 </b-col > 
			   </b-row>
				<b-row class=' b2_2'> 
			        <b-col cols = “8”  class='qian'><div class="box">anguar</div><div class="box">Nodejs</div><div class="box">Vue</div></b-col > 
			        <b-col > </b-col > 
			   </b-row>
		</div>
		<div class="c1">
            <b-row class='c2_2'> 
            		<b-col class="figure"><img src="https://img2.bosszhipin.com/boss/avatar/avatar_2.png" alt="" /></b-col >
			        <b-col class='qian'>赖经理 <p class="gray">广州澳源科技<em class="vdot">·</em>人事经理</p></b-col > 
			        <b-col ><a class="btn btn-chat">立即沟通</a></b-col >
			</b-row>
		</div>
		<div class="container">	
			<div class="d1">
				<h3>职位描述</h3>
				<div class="text">
	                        岗位职责：<br>1、负责公司网站平台各产品线Web前端研发；<br>2、解决不同浏览器及不同版本的兼容性问题；<br>3、根据要求，用Javascript、Jquery编写出各种特殊交互效果；<br>4、与后台开发人员进行沟通以完成前后台的对接工作；<br><br>任职要求：<br>1、本科学历，计算机相关专业，1年以上web前端开发工作经验，精通HTML/XHTML、DIV+CSS，能够真实还原视觉设计；<br>2、熟悉网站页面架构和布局；熟悉W3C标准，对HTML5、CSS3以及响应式交互有一定了解的优先；<br>3、精通Html,css,javascript,jquery等前端技术，有Vue.js、Angular.Js等前端框架使用经验优先。<br>4、熟练使用gulp、webpack等前端工程构建工具，有nodejs开发经验者优先；<br>5、熟悉网页跨浏览器和跨平台的兼容性问题，了解高性能网站优化方法；<br>6、熟悉响应式页面布局，能处理不同的终端屏幕；<br>7、熟悉git代码管理；
	            </div>
	            <h3>公司简介</h3>
	            <p class='text'>澳源科技由澳元健集团和知名房地产商投资运营，在互联网行业、电子商务业和广告业迅猛发展的时代背景下，澳源科技依靠强大的技术团队为企业和客户提供专业的：IT科技服务、商业视觉设计和品牌策划服务、网站策划与互联网开发服务、电子商务与网络营销服务、IT技能提升与人才发展服务、教育产业大数据研究、VR游戏与影视动画研究、室内外建筑设计服务等。</p>
				<h3>工商信息</h3>	
				<div class="details">
					<p>澳源科技</p>
					<div class="content">
						<table>
							<tr>
								<th>法人代表：叶克成</th>
								<th>经营状态：上市</th>
							</tr>
							<tr>
								<td>成立时间：1990-06-07</td>
								<td>注册资本：1000亿</td>
							</tr>
						</table>
						<router-link :to="'/job/company/'+company_id">
							<button ><span>展开</span></button>
						</router-link>
					</div>
				</div>	

			</div>
		</div>
	</div>            
</template>
<script type="es6">

    export default{
    	data(){
    		return{
    			job_info:[],
    			company_id:this.$route.params.id
    		}
    	},
    	created(){
		    this.init()
		},
		methods:{
			init(){
				console.log(this.company_id)
				this.$http.get(this.$jobApiURL+'/api/job/info',
					{
						params:{
							id:this.company_id
						}
					})
				.then( (rtnD)=>{
					this.job_info = rtnD.data
				})
			}
		}		
    }
	
</script>
<style>
	@import url('../../assets/job/css/info.css');
	@import url('../../assets/job/library/bootstrap-vue.min.css');
	@import url('../../assets/job/library/bootstrap.min.css');
</style>