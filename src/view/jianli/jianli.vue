<template>
<div class="job_jianli">
	<div class="A1">
		 <b-container>
		    <b-row class='A1_1'> 
		        <b-col  cols = "6"  class='zhi'>boss直播</b-col > 
		        
		        <b-col class='wei'>更新时间10-10-10 </b-col > 
		    </b-row > 
		 </b-container >			 
	</div>
	<div class="c1">
        <b-row class='c2_2'> 
		        <b-col cols = "8" class='qian'>
		        	<p class="uname">XXX</p>   

		        	<p class="gray">应届生&nbsp;|&nbsp;大专学历&nbsp;|&nbsp;在职</p>
		        	<p class="gray">电话：&nbsp;|&nbsp;微信&nbsp;|&nbsp;在职</p>
		        	<p class="gray">邮箱：&nbsp;|&nbsp;微信&nbsp;|&nbsp;在职</p>

		        </b-col > 
		        
		        <b-col class="figure">
		        	<img src="https://img2.bosszhipin.com/boss/avatar/avatar_2.png" alt="" />
		        	<b-button class="btn" variant="success">编辑</b-button>
		        </b-col >
		    </b-row>
	</div>
	<div class="container">
		<div class="text_a">
			<hr/>
		    <b-row > 
		    	<b-col cols='9' ><h5>我的优势</h5></b-col ><b-col class='tianjia' >
		    		<b-button class="btn" variant="success" @click='dbUpdate()'>编辑</b-button>
		    		</b-col >	
		    	
		    </b-row > 
		    <div class='text_t1' v-show='!inputIsShow'>{{ text1 }}</div>
		    <div class="text_t2" v-show='inputIsShow'>
				<b-form-input v-model="text1" type="text"  @blur='updateInfo()' :placeholder="text1" ></b-form-input >
				<b-button class="btn" variant="success" @click="updateInfo()" >确定</b-button>
			</div>
		</div>
		<div class="text_a">
			<hr/>
		    <b-row > 
		    	<b-col cols='9' >
		    		<h5>求职意向</h5></b-col ><b-col class='tianjia' >
		    		<b-button class="btn" variant="success">添加
		    		</b-button></b-col >	
		    	
		    </b-row > 
		    <div class='text_tt'>1111</div>
			
		</div>
		<div class="text_a">
			<hr/>
		    <b-row > 
		    	<b-col cols='9' ><h5>实习经历</h5></b-col ><b-col class='tianjia' >添加</b-col >	
		    </b-row > 
		    <div class='text_tt'>111111111</div>
		</div>
		<div class="text_a">
			<hr/>
		    <b-row > 
		    	<b-col cols='9' ><h5>我的优势</h5></b-col ><b-col class='tianjia' >添加</b-col >
		    </b-row > 
		    <div class='text_tt'></div>
		</div>  
	</div>
</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			modalShow:true,
			inputIsShow:false,
			cur_tr_index:null,
			text1: ''
		}
	
	},
	methods:{
		dbUpdate(){
 			this.inputIsShow = true
		},
		updateInfo(){
			this.inputIsShow = false
		}
	}
}
	
	
</script>
<style type="text/css">
	button{
		margin-top: 10%;
	}
	.figure.col{
		padding-right: 0px;
	}
	.row.c2_2{
		width: 100%;
	}
	.A1{
		padding: 2%;
	}
	.qian{
		margin: auto;
	}
	.uname{
		font-size: 2rem;
	}
</style>