<template>
	<div class="tain">
		<div class="a1">
			<b-row class='a1_1'>
				<b-col class='zhi'>一元招聘</b-col >
				<b-col class='wei'>
					<div class="kang">搜索职位</div>
				</b-col >
			</b-row >
		</div>
		<div class="b1">
			<b-row class='text-center b1_1'>
				<b-col cols = "6"  class='qian'>{{job_info.job_name}}</b-col >
				<b-col >{{job_info.salary_low}}-{{job_info.salary_hig}}</b-col >
			</b-row>
			<b-row class='text-center b2_1'>
				<b-col cols = "6"  class='qian'>
					{{job_info.city}}|{{job_info.work_time}}|{{job_info.education}}|
				</b-col >
				<b-col >
					发布于
					<timeago :since="parseInt(job_info.add_time)*1000" class="fr"></timeago>
				</b-col >
			</b-row>

		</div>
		<div class="c1">
			<b-row class='c2_2'>
				<b-col class="figure">
					<img :src="$jobApiURL+'/Public/'+job_info.photo" alt="" />
				</b-col >
				<b-col cols ="8" class='qian'>{{job_info.company_name}}
					<div>
						<router-link :to="'/job/company/'+job_info.enterprise_id" class="btn btn-chat">公司详情</router-link>
						<button class="btn btn-chat" @click="toudi">简历投递
					</button>
					</div>
					
				</b-col >
			</b-row>
		</div>
		<div class="container">
			<div class="d1">
				<h3>职位描述</h3>
				<div class="text">
					{{job_info.job_describe}}
					{{job_info.job_require}}
				</div>
				<h3>公司简介</h3>
				<p class='text' v-html="job_info.company_description"></p>
				<div class="details">
					<div class="content">

						<router-link :to="'/job/company/'+job_info.enterprise_id">
							<button >
								<span>公司详情</span>
							</button>
						</router-link>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script type="es6">
 import {mapState,mapMutations} from 'vuex'
    export default{
    	data(){
    		return{
    			job_info:[],
    			company_id:this.$route.params.id
    		}
    	},
		computed:{
		  ...mapState(['info','todaymoney'])
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
			},
			toudi(){
				this.$router.push('/jianli/jianli/zhongzhuan/'+this.info.user_id+"/"+this.$route.params.id)

			}
		}		
    }
	
</script>
<style>
	@import url('../../assets/job/css/info.css');
	@import url('../../assets/job/library/bootstrap-vue.min.css');
	@import url('../../assets/job/library/bootstrap.min.css');
</style>