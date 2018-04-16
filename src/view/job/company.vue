<template>
	<div class="app company_info">
		<header class="title">

			<el-row :gutter="20">

				<el-col :span="12">
					<h3>一元招聘</h3>
				</el-col>

				<el-col :span="8" class="right">
					<el-button round><router-link to="/login">立即注册</router-link></el-button>
				</el-col>
			</el-row>
		</header>
		<div class="box" v-if="info.hj_1+info.hj_2+info.hj_3 != 'null' ">
			<mt-swipe :show-indicators="false" :auto="0">
				<mt-swipe-item  v-if="info.hj_1">
					<img :src="$jobApiURL+'/Public/'+info.hj_1" alt=""></mt-swipe-item>
				<mt-swipe-item  v-if="info.hj_2">
					<img :src="$jobApiURL+'/Public/'+info.hj_2" alt=""></mt-swipe-item>
				<mt-swipe-item  v-if="info.hj_3">
					<img :src="$jobApiURL+'/Public/'+info.hj_3" alt=""></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="gs_lg">
			<div class="left">
				<img style="width:53px" :src="$jobApiURL+'/Public/'+info.photo" alt="" />
			</div>
			<div class="right">
				<p class="big">{{info.company_name}}</p>
				<p>{{info.address}}</p>
				<p>
					<span>{{info.type}}</span>
					<span>{{info.shangshi}}</span>
					<span>{{info.people}}</span>
				</p>
			</div>
		</div>
		<div class="tab">
			<el-tabs v-model="activeName" @click="handleClick">
				<el-tab-pane label="公司简介" name="first" class="first">
					<p class="detail-text show-switch" data-height="120" deep="4"	v-html="info.company_description"></p>
				</el-tab-pane>
				<el-tab-pane label="招聘岗位" name="second">

					<el-row class="job_llll" :gutter="20" v-for="job in info.job_list">
						<el-col :span="18">
							<h3>
								<router-link :to="'/job/info/'+job.id">{{job.job_name}}</router-link>
							</h3>
							<el-row :gutter="20">
								<el-col :span="8">{{job.work_time}}</el-col>
								<el-col :span="8">{{job.education}}</el-col>
								<el-col :span="8">{{job.salary_low}} - {{job.salary_hig}}</el-col>
							</el-row>
						</el-col>
						<el-col :span="6">
							<h3>
								<timeago :since="parseInt(job.add_time)*1000" class="fr"></timeago>
							</h3>
						</el-col>
					</el-row>

				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>
<script type="es6">
	export default{
		data(){
			return{
				activeName: 'first',
				info: [],
			    activeName1: 'first1',
			}
		},
		created(){
			this.$http.post(this.$jobApiURL+'/api/job/company',{id:this.$route.params.id})
				.then((rtnD)=>{
					this.info = rtnD.data
				})
		},
		methods:{
			  handleClick(tab, event) {
		        console.log(tab, event);
		      },
		      handleClick1(tab, event) {
		        console.log(tab, event);
		      }
		},
	}
</script>
<style>
h3{font-size: 0.95rem !important}
.job_llll{margin-bottom: 10px;border-bottom: 1px solid #eee;padding-bottom: 10px;}

	@import url('../../assets/job/css/company.css');
	 
</style>