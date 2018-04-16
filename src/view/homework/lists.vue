<template>
	<div class="container ">
		<mt-header title="一元教学排行榜">
		  <router-link to="/homework/homework" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="title">
			<p>周四(7.16.16.40)作业 - 正数和负数</p>
		</div>
		<div class="a"></div>
		
			<div class="content" v-for="(lists,id) in work_list">
			<div class="img"><p>{{lists.id}}</p></div>
			<div class="name_time">
				<p>{{lists.name}}&nbsp
				<router-link :to="'/homework/info/'+lists.id">
				<i style="font-size:.1rem;color:#ff8f1f">作业详情</i>
				</router-link>
				</p>
				<p style="color:#ccc">7月12日 17:30</p>
			</div>
			<div class="jdt">
			    <el-progress type="circle" :percentage="lists.num*10"
					:width="40"
					:stroke-width="2"
				></el-progress>
			</div>
			<div class="zan">
			    <p style="color:#ccc" @click="zan(id)">赞</p>
				<p style="color:#ccc">{{lists.number}}</p>
			</div>
			</div>
		
		
	</div>
</template>
<style>
	@import url('../../assets/homework/css/lists.css');
	/*@import url('../../assets/homework/css/iconfont.css');*/
</style>
<script>
	import mockjs from "mockjs"
	export default{
		data(){
			return{
				work_list:[],
			}
		},
		created(){
			this.init()
		},
		methods:{
			init(){
				var rtn = mockjs.mock({
					'data|1-10':[{
						
						'name|1':[
						"张三","李四","王五","赵六"
						],
						'num|1-10':1,
						'number|1-100':1,
						'id|+1':1
					}]
				})
				this.work_list = rtn.data
				// console.log(this.work_list)
			},
			zan(id){
				this.work_list[id].number +=1
			}
		}

	}
</script>