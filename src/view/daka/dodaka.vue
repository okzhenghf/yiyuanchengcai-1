<template>
 <div class="contion">
 	<div class="header_box">
	 	<div class="title">
	 		<div class="left">
				<img src="../../assets/img/1_1.png">
			</div>
			<div class="right">
				<h3>主题</h3>
				<p>活动日期</p>
				<div class="box">
					<div class="bar">
						<div class="cur"></div>
					</div>
				</div>
			</div>
			
	 	</div>
	 	<div class="ha">
	 		<span>参于人数参于人数</span>
	 		<ul>
	 			<li v-for="item in 5">
	 			<img src="../../assets/img/1_1.png" alt=""></li>
	 			<!--<li><img src="../assets/logo.png" alt=""></li>
	 			<li><img src="../assets/logo.png" alt=""></li>
	 			<li><img src="../assets/logo.png" alt=""></li>
	 			<li><img src="../assets/logo.png" alt=""></li>-->
	 		</ul>
	 	</div>
		<div class="content" id="box" ref="box">
			<div class="text">
				参于人数参于人数参于人数参于人数参于人数,,
				参于人数参于人数参于人数参于人数参于人数
				参于人数参于人数参于人数参于人数参于人数
				参于人数参于人数参于人数参于人数参于人数
				参于人数参于人数参于人数参于人数参于人数
				参于人数参于人数参于人数参于人数参于人数
				参于人数参于人数参于人数参于人数参于人数
				参于人数参于人数参于人数参于人数参于人数
				参于人数参于人数参于人数参于人数参于人数
			</div>
			<div class="xia" @click="xia" v-if="chu" style="
			"> 
				<p>显示更多<span></span></p>
			</div>
			<div class="shang" @click="shang" v-if="shou"> 
				<p>收起<span></span></p>
			</div>

		</div>

		
	</div>
	<div class="conter">
		<div class="do" @click="daka_info()">
			<h1>去打卡</h1>
		</div>
		<div class="go">
			<h3 @click="toplist()">排行榜 &nbsp;></h3>
		</div>

	
	
	</div>
 	<!-- <h2>打卡列表</h2>
 	<ul>
 		<li v-for="info in daka_list">{{info.input}}<el-button type="success"><router-link :to="'/info/'+info._id">去打卡 {{info.daka_record}}</router-link></el-button></li>
 	</ul> -->
 	<div class="me">
 		<img src="../../assets/img/1_1.png">
 		<div class="con">
 			<h3>打卡</h3>
 			<p>排行</p>
 		</div>
 		<div class="mydo" @click="mydaka()">我的打卡&nbsp;></div>
 	</div>
 	
 	
 	<div class="actv">
 		<h3>全部动态</h3>
 		<div class="data">
 			<img src="../../assets/img/1_1.png">
 			<div class="data_list">
 				<p class="name">ssss</p>
 				<p class="time">2018</p>
 				<h4 class="text" style="word-wrap:break-word;">dsvsdsvscasafzfacscdsvscasafzfacscdsvscasafzfacsccasafzfacsc</h4>
 				<div class="icon">
	 				<span><img src="../../assets/img/reward_detail4.png">111</span>
	 				<span><img src="../../assets/img/shu.png">11</span>
 				</div>
 			</div>
 		</div>
 	</div>
 </div>
</template>



<script type="text/javascript">
import Axios from 'axios'
export default {
	data(){
		return {
			daka_list: [],
			chu:true,
			shou:false,
		}
	},
	created(){
		// this.$https.get('/api/list_api')
		// .then((rtnD)=>{
		// 	// console.log(rtnD.data.listData)
		// 	this.daka_list = rtnD.data.listData
		// })
	},
	methods:{
		shang(){
			this.chu=true;
			this.shou=false;
			//console.log(this)
			//console.log(this.$refs.box)
			this.$refs.box.style="overflow: hidden;"
		},
		xia(){
			this.shou=true;
			this.chu=false
			// console.log(this.$refs.box)
			this.$refs.box.style="height :300px;"
		},
		daka_info(){
	       this.$router.push('/daka/daka_info')
		},
		toplist(){
			this.$router.push('/daka/toplist')
		},
		mydaka(){
			this.$router.push('/daka/daka_rili')
		}
	}

}
	
</script>


<style type="text/css">
.footer{
	display: none;
}
	p{
		padding: 0px;
		margin: 5px;
	}
	a{
		list-style: none;
		text-decoration: none;
	}
	.contion{
		margin: 5px auto;
		width: 97%;
	}
	.header_box{
		width: 100%;
		background: #fff;
		padding: 10px;
		 
		box-sizing: border-box;
		box-shadow: 0px 0px 30px rgba(0,0,0,.2);
	}
	.header_box .content{
		text-align: left;
		/*display: flex;
		flex-direction: column;*/
		overflow: hidden;
		position: relative;
		height :100px;
	}

	.shang{
		text-align: center;
	}
	/*.content */
	.xia{
	    text-align: center;
	    position: absolute;
	    background: rgba(255,255,255,0.8);
	    top: 63px;
	    padding: 5px;
	    width: 100%;
	}
	.text{
		color: #666;
	}
	/*.content .text{
		height: 40px;
		overflow: hidden;
		text-overflow : ellipsis;
		padding-bottom: 20px;
		position: relative;
		background: #fff;

	}*/
	.content .xia span{
		width: 0px;
		height: 0px;
		border-left:8px solid transparent;
		border-right:8px solid transparent;
		border-bottom:16px solid #ccc;
		position: relative;
		top: -16px;
	}
	.content .shang span{
		width: 0px;
		height: 0px;
		border-top:16px solid #ccc;
		border-left:8px solid transparent;
		border-right:8px solid transparent;
		position: relative;
		top: 16px;
	}
	.title{
		display: flex;

	}
	.title .left{
		margin-right: 10px; 
	}
	.title .left img{
	  width: 100px;
	  height: 100px;
	}
	.title .right{
		flex: auto;
		text-align: left;
	}
	.title .right .box{
		width: 100%;
	}
	.title .right .box .bar{
		width: 100%;
		height: 5px;
		background: #ccc;
	}
	.title .right .box .bar .cur{
		background: green;
		height: 100%;
		width: 15%;
	}
	.ha{
	
		display: flex;
		padding: 10px;
		color: #ccc;
	}
	/*.ha span{
		display: inline;
	}*/
	.ha ul{
		flex: 1;
		display: flex;
		list-style: none;
		margin: 0px;
		position: absolute;
		right: 20px;
	}
	.ha ul li{
		width: 20px;
		height: 20px;
		border-radius: 100%;
		background: #ccc;
		/*position: absolute;*/
		/*position: relative;*/
		line-height:20px;
		overflow: hidden;
		border: 3px solid #fff;
		box-sizing: border-box;

	}
	.ha ul li img{
		width: 100%;
		height: 100%;

	}
	.ha ul li+li{
		position: relative;
		margin-left: -5px;
	}
	.conter {
		margin: 10px auto;
	}
	
	.conter .do{
		width: 150px;
		height: 150px;
		background: yellowgreen;
		border-radius: 100%;
		margin:  0px auto 10px;
		box-shadow: 0px 0px 20px #32c503;

	}
	.conter .do h1{
		line-height: 150px;
		font-size: 32px;
		color: #fff;
	}
	.conter .go{
		width: 30%;
		margin: auto;
	}
	.conter .go h3{
		color: #32c503;
	}
	 h3{
	 	padding: 10px 0px;
		font-size: 20px;
		margin: 0px;
	}
	.me{
		width: 93.33333333%;
		display: flex;
		padding: 5px 10px;
		border-bottom: 3px solid #999;
		border-top: 3px solid #999;
		align-items: center;
	}
	.me img{

		width: 50px;
		height: 50px;
		border-radius: 100%;
		flex:  0 0 50;
	}
	.me .con{
		flex: 4;
		text-align: left;
	}
	.me .con p{
		margin: 0px;
	}
	.data_list h4{
		text-align: left;
		font-size: 20px;
	}
	.me .mydo{
		flex: auto;
	}
	.actv{
		text-align: left;
		padding-left: 20px;
	}
	.actv img{
		width: 50px;
		height: 50px;
		border-radius: 100%;
	}
	.actv .data{
		display: flex;
		padding-bottom: 5px;
	}
	.actv .data .data_list{
		width: 80%;
	}
	.actv .data .data_list .time{
		color: #999;
		font-size: 16px;
	}
	.actv .data .data_list .icon{
		text-align: right;
		margin-right: 20px;
	}
	.actv .data .data_list .icon img{
		width: 16px;
		height: 16px;
	}
	.actv .data .data_list .icon span{
		margin-right: 20px;
	}
</style>