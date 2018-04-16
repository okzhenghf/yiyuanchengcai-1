<template>

	<div class="homework">

		<div class="content">
		    <mt-header title="一元教学">
			  <router-link to="/" slot="left">
			    <mt-button icon="back">返回</mt-button>
			  </router-link>
			  <mt-button icon="more" slot="right"></mt-button>
			</mt-header>

			<ul>
                
				<li v-for="info in homework_list">
				
				    <div class="left">
				    	<p class="dot"></p>
				    	<p class="line"></p>
				    </div>
				    
					<div class="box">
						<div class="ON">
						    <i class="triangle"></i>
						    <p>今天|</p>
						    <p>07:03</p>
						    <p>已完成</p>
						</div>
                        <router-link :to="'/homework/lists/'+info.id">
						<div class="Under">

							<p class="title">有{{info.work}}作业</p>
							<p class="Ten">共{{info.number}}道题</p>
							<p class="data_time">
							<i class="el-icon-time"></i>
							截止7/20 周一 24:00 
							<i class="el-icon-share"></i>
							{{info.num}}人提交</p>
							<div class="jdt">
								<el-progress type="circle" :percentage="info.number*10"
								:width="50"
								:stroke-width="3"
								></el-progress>
							</div>
						</div>
						</router-link>	
					</div>
						
			    </li>
			   
			</ul>
		</div>
	</div>
</template>


<style>
	@import url('../../assets/homework/css/homework.css');
</style>
<script>
import mockjs from 'mockjs'
// var Random = mockjs.Random


	export default{

		data(){
			return{
				homework_list:[],
				
			}
		},
		created(){
			this.init()
		},
		methods:{
			init(){
			
					var rtn =mockjs.mock({
						'data|1-10':[{
							'id|+1':1,
							'work|1':[
							"前端","后台","UI","JS","Vue"
							],
							'number|1-10':10,
							'num|1-100':5,
						}]
					})
					 console.log(rtn.data)
					this.homework_list = rtn.data

			
			},
		},


	}
</script>



