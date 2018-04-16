<template>
<div class="job_box box">
	<!-- 头部 -->
	<div class="head">
		<h1>一元招聘</h1>
		
		<div class="search">
			<input type="text" v-model="kd" placeholder="搜索职位/公司" class="search-input">
			<a @click="search">搜索</a>
		</div>
	</div>


<!-- 内容 -->
	<div class="main job_list">
		<div class="neirong" v-for="cate in job_cate">
			
			<h4>{{cate.cate_name}}</h4>
			<img src="../../assets/job/img/2.png" alt="">  <!-- 一个 ../ 就跳出一层 -->
			<div class="some">
			<router-link :to="'/job/lists/'+child.id" v-for="child in cate.child_menu">
			{{child.cate_name}}
			</router-link>
			</div>
		</div>
	</div>


	
</div>
</template>
<script type="es6">

export default {
    data(){
      	return {
      		job_cate:[],
      		kd:''
      	}
    },
    created(){
		// 生命周期
		this.init()
	 },
	methods:{
		init(){
			this.$http.post(this.$jobApiURL+"/api/cate",{
				params:{
					p:1
				}
			})
			.then((rtnD)=>{
				console.log(rtnD)
				this.job_cate = rtnD.data
			})
		},
		search(){
			this.$router.push('/job/lists/kd/'+this.kd)
		}
	}
}
</script>
<style>
@import url('../../assets/job/css/index.css');
</style>