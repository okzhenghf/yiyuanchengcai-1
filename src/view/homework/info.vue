<template>
	<div class="info">
	    <div class="bg">
			<mt-header title="7.6 14:26 作业报告">
		  <router-link to="/homework/lists" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
			</mt-header>
			<div class="box">
				<div class="content">
					<p class="situation">基本情况</p>
					<div class="jdt">
				    	<el-progress type="circle" :percentage="100"
							:width="100"
							:stroke-width="4"
						></el-progress>
				    </div>
					<p class="title">第
						<strong style="font-size:1rem;">
						2</strong>
						个交作业，全班正确率：
						<strong style="font-size:1rem;color:#ff8f1f">60%</strong>
					</p>
				</div>
			</div>
			<div class="box_two">
				<div class="content">
					<p class="situation">详细情况</p>
					<div class="details">
					    <div class="T">
					    	<p>共作答</p>
					    	<p>用时</p>
					    	<p>提交时间</p>
					    </div>
						<div class="F">
							<p>5道题</p>
							<p>4分15秒</p>
							<p>7.18 15:24</p>
						</div>
					</div>
					<p class="sheet">答题卡</p>
					<div class="sheet_content">
						<div class="sorting">
							<p>1</p>
							<p>2</p>
							<p>3</p>
							<p>4</p>
							<p>5</p>
						</div>
						<div class="logo">
							<p><i class="el-icon-error"></i></p>
							<p><i class="el-icon-error"></i></p>
							<p><i class="el-icon-warning"></i></p>
							<p><i class="el-icon-success"></i></p>
							<p><i class="el-icon-question"></i></p>
						</div>
					</div>
					
					
				</div>
			</div>
		
		</div>
	</div>
</template>
<style>
	@import url('../../assets/homework/css/info.css');
</style>
<script>
	import mockjs from 'mockjs'
	export default{
		data(){
			return{
				info_list:[],
			}
		},
		created(){
			this.init()
		},
		methods:{
			init(){
				var rtn = mockjs.mock({

					'num|+1':1,
				})
				this.info_list = rtn.data
			}
		}
	}
</script>