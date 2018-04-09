<template>
	<div class="container job_list" >
		<div class="box">
			<div class="search">
				<img src="../../assets/job/image/icon-home.png" height="36" 	width="36" alt="">
				<p>
					<a href="">广州</a>
					<input type="text" v-model="keyword"></p>
				<button @click="search()">搜索</button>
			</div>
			<div class="menu">

				<van-tabs :active="active" sticky>
					<van-tab v-for="index in 4" :title="'选项 ' + index">内容 {{ index }}</van-tab>
				</van-tabs>

			</div>
		</div>
		<div class="loading" ref="job_list_box">

			<ul class="loading_list" v-infinite-scroll="loadMore"  		infinite-scroll-disabled="loading" infinite-scroll-distance="10"	 	infinite-scroll-immediate-check="true">
				<li v-for="info in job_list" >
					<router-link :to="'/job/info/'+info_id">

						<img src="https://www.zhipin.com/v2/chat_v2/images/	v2/defaultlogov2.jpg" alt="">
						<div class="text" >
							<div class="title">
								<h4>{{info.job_name}}</h4>
								<span>6K-8K</span>
							</div>
							<div class="name">{{info.company_name}}</div>
							<div class="msg"> <em>广州</em> <em>1年以内</em>
								<em>本科</em>
							</div>
						</div>
					</router-link>

				</li>
				<li v-if="loading" style="text-align: center;">加载中...</li>
				<li v-if="!has_more" style="text-align: center;">无更多内容了...</li>
			</ul>
		</div>
	</div>

</template>
<script type="es6">
	export default{
		data(){
			return{
				job_list:[],
    		    loading:false,
    		    active:null,
				page:1,//数据的页码
				has_more:true,//数据还有没有更多
				keyword:null,//搜索关键词
				action_step:null,//up上拉，down下拉
				info_id:this.$route.params.id,
			}
		},
		created(){
    		this.init()
    	},
    	 
    	methods:{
    		loadMore(){
    			if (this.has_more) {
    				this.loading = true
	    			++this.page
	    			this.$http.get(this.$jobApiURL+"/api/job/lists",{
	    				
	    				params:{
	    					p:this.page,
	    					cateID:this.info_id
	    				}
	    			})
	    			.then((rtnD)=>{
	    				console.log(rtnD.data.length)
	    				if (rtnD.data.length>0) {
	    					this.job_list.push(...rtnD.data)
	    				}else{
	    					this.has_more = false
	    				}
	    				this.loading = false
	    			})
    			}else{
    				 
    			}
    			
    		},
    		init(){
    			this.$http.get(this.$jobApiURL+"/api/job/lists",{
    				params:{
    					p:this.page,
    					cateID:this.info_id 
    				}
    			})
    			.then((rtnD)=>{
    				this.job_list = rtnD.data
    			})
    		},
    		search(){
    			this.page = 1
    			this.$http.get(this.$jobApiURL+"/api/job/lists",{
    				params:{
    					p:this.page,
    					keyword:this.keyword
    				}
    			})
    			.then((rtnD)=>{
    				this.job_list = rtnD.data
    			})
    		}
    	}
	}
</script>
<style>
body{
		height: 100%;
	}
	@import url('../../assets/job/css/lists.css');
	@import url('https://unpkg.com/mint-ui/lib/style.css');
</style>