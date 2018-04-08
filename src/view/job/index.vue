<template>
<div>
	<!-- 头部 -->
	<div class="head">
		<h1>找工作要跟老板谈</h1>
		<h2>BOSS直聘</h2>
		<div class="search">
			<input type="text" placeholder="搜索职位/公司" class="search-input">
			<a href="www.baidu.com">搜索</a>
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


	<!-- 脚部 -->
	<div class="foot">
		<a href="">
			<span class="btn">立即注册</span>
			<div class="text">
				<img src="../../assets/job/img/8.png" alt="">
				<p>找工作要跟<br>老板谈</p>
			</div>
		</a>
	</div>
</div>
</template>
<script type="es6">

export default {
    data(){
      	return {
      		job_cate:[]
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
		}
	}
}
</script>
<style>
@import url('../../assets/job/css/index.css');
</style>