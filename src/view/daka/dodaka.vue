<template>
 <div class="contion">
 	<div class="header_box">
	 	<div class="title">
	 		<div class="left">
				<img v-if="con.imgpath" :src="$gretUrl+con.imgpath">
			</div>
			<div class="right">
				<h3>{{con.theme}}</h3>
				<p>{{time_cont}}</p>
				<div class="box">
					<div class="bar">
						<div class="cur"></div>
					</div>
				</div>
			</div>
			
	 	</div>
	 	<div class="ha">
	 		<span>参于人数{{info_a}}</span>
	 		<ul>
	 			<li v-for="item in info_a.toplist">
	 			<img v-if="item.head_img" :src="$gretUrl+item.head_img" alt=""></li>
	 			<!--<li><img src="../assets/logo.png" alt=""></li>
	 			<li><img src="../assets/logo.png" alt=""></li>
	 			<li><img src="../assets/logo.png" alt=""></li>
	 			<li><img src="../assets/logo.png" alt=""></li>-->
	 		</ul>
	 	</div>
		<div class="content" id="box" ref="box">
			<div class="text">
			<p>{{con.xiangqin}}</p>
				
			</div>
			<div class="xia" @click="xia" v-if="chu" style="
			"> 
				<p>显示更多↓↓↓</p>
			</div>
			<div class="shang" @click="shang" v-if="shou"> 
				<p>收起↑↑↑</p>
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
 	
 	<div class="me">
 		<img v-if="con.head_img" :src="$gretUrl+con.head_img">
 		<div class="con">
 			<h3>打卡{{con.num}}</h3>
 			<p>排行</p>
 		</div>
 		<div class="mydo" @click="mydaka()">我的打卡&nbsp;></div>
 	</div>
 	
 	
 	<div class="actv">
 		<h3>全部动态</h3>
 	</div>
 	<div class="data" v-for="item in daka_list.allData">
 			<img v-if="item.head_img":src="$gretUrl+item.head_img">
 			<div class="data_list">
 				<p class="name">{{item.user_name}}</p>
 				<p class="time">2018</p>
 				<h4 class="text" style="word-wrap:break-word;">{{item.textarea3}}</h4>
 				<div class="icon">
	 				<span><img src="../../assets/img/reward_detail4.png">111</span>
	 				<span><img src="../../assets/img/shu.png">11</span>
 				</div>
 			</div>
 		</div>
 </div>
</template>



<script type="text/javascript">
import Axios from 'axios'
 import {mapState,mapMutations} from 'vuex'
export default {
	data(){
		return {
			daka_list: [],
			chu:true,
			shou:false,
			con:'',
			page:1,
			info_a:[],
			time_cont:''
		}
	},
	computed:{
		    ...mapState(['info'])
		  },
	mounted(){
		this.$http.get('/api/daka/allData',{
 			params:{
 				theme_id:this.$route.params.id,
 				p:this.page
 			}})
 		.then((rtnD)=>{
 			// console.log(rtnD);
 			this.daka_list = rtnD.data
 		})
 		new Promise((reslove,reject)=>{
				this.$http.get("/api/dakatheme/xiangqin",{
					params:{
						id:this.$route.params.id,
						uid:this.info.user_id
					}
				})
				.then((rtnD)=>{
					// console.log(rtnD)
					// console.log(2)
					this.con = rtnD.data
					reslove(rtnD.data)
				})
			})
			.then((rtnDT)=>{
				//开始时间
				let sTime = rtnDT.starTime;
				//结束时间
				let eTime = rtnDT.endTime;
				//活动总时长
				let zt = eTime - sTime
				let nowTime = setInterval(()=>{
					//现在时间
					let ntime =  new Date()
					let nowTime= Date.parse(ntime)/1000;
					//剩余时间
					let st = Number(eTime) - nowTime;
					let ct = Number(zt) - st
					// console.log(st)
					//时间戳转正常时间
					// let nowdate = this.dataTime(nowTime*1000);
					if(st > 0){
						let edate = this.dataTime(eTime*1000)

						let eDate = new Date(edate)
						let alltime=parseInt((eDate-ntime)/1000);
			            let ms=ntime.getMilliseconds()/1000
			            let s=alltime % 60;
			            let m=parseInt(alltime / 60 % 60);
			            let h=parseInt(alltime / 60 / 60 % 24);
			            let t=parseInt(alltime / 60 / 60 / 24);
			            this.time_cont = "活动开始剩"+t+"天"+h+"小时"+m+"分";
			            setTimeout(function(){
							var bar =document.querySelector('.cur')
							// console.log(bar)
							bar.style.width = ct/zt*100 +"%";  // 人数/总人数 * 100
							
						},0)//
					}
					
				},1000)
			})
			this.$http.get('/api/daka/themelist',{
					params:{
						id:this.$route.params.id
					}
					
				})
				.then((rtnD)=>{
					console.log(rtnD)
					this.info_a=rtnD.data
				})
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
			this.$refs.box.style="height :100%;"
		},
		daka_info(){
	       this.$router.push('/daka/daka_info/'+this.$route.params.id)
		},
		toplist(){
			this.$router.push('/daka/toplist/'+this.$route.params.id)
		},
		mydaka(){
			this.$router.push('/daka/daka_rili/'+this.$route.params.id)
		},
		dataTime(value) {
				var date = new Date(value);
				let Y = date.getFullYear();
				let m = date.getMonth() + 1;
				let d = date.getDate();
				let H = date.getHours();
				let i = date.getMinutes();
				let s = date.getSeconds();
				if (m < 10) {
				m = '0' + m;
				}
				if (d < 10) {
				d = '0' + d;
				}
				if (H < 10) {
				H = '0' + H;
				}
				if (i < 10) {
				i = '0' + i;
				}
				if (s < 10) {
				s = '0' + s;
				}
				// 获取时间格式 2017-01-03 10:13:48 
				var t = Y+'-'+m+'-'+d+' '+H+':'+i+':'+s;
				// <!-- 获取时间格式 2017-01-03 -->
				// var t = Y + '-' + m + '-' + d;
				return t;
				}
	}

}
	
</script>


<style type="text/css" scoped>
/*.footer{
	display: none;
}*/
	p{
		padding: 0px;
		/*margin: 5px;*/
	}
	a{
		list-style: none;
		text-decoration: none;
	}
	.contion{
		margin: 5px auto 50px;
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
	    top: 67px;
	    padding: 5px;
	    width: 100%;
	}
	.text{
		letter-spacing: 2px;
		font-size: 0.5rem;
		text-indent: 2rem;
		color: #ccccc0;
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
	.title .right p{
		font-size: 14px;
		padding-bottom: 10px;
		color: #ccc;
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
		background: #09bb05;
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
		width: 30px;
		height: 30px;
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
		margin-left: -10px;
	}
	.conter {
		margin: 30px auto;
	}
	
	.conter .do{
		width: 120px;
		height: 120px;
		background: #09bb05;
		border-radius: 100%;
		margin:  0px auto 10px;
		box-shadow: 0px 0px 10px #09bb05;

	}
	.conter .do h1{
		line-height: 120px;
		font-size: 20px;
		color: #fff;
	}
	.conter .go{
		width: 30%;
		margin: auto;
	}
	.conter .go h3{
		color: #09bb05;
	}
	 h3{
	 	padding: 10px 0px;
		font-size: 20px;
		margin: 0px;
	}
	.me{
		/*width: 93.33333333%;*/
		display: flex;
		padding: 5px 10px;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
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
		margin: 3% 4% 3% -4%;
	}
	.data{
		display: flex;
		padding:3% 3% 0;
		text-align: left;
		border-top: 1px solid #ccc;

	}
	.data img{
			width: 50px;
			height: 50px;
			border-radius: 100%;
			margin: 3% 3% 3% 0;
	}
	.data .data_list{
		width: 80%;
	}
	.data .data_list .time{
		color: #999;
		font-size: 16px;
	}
	.data .data_list .icon{
		text-align: right;
		/*margin-right: 20px;*/
	}
	.data .data_list .icon img{
		width: 16px;
		height: 16px;
	}
	.data .data_list .icon span{
		margin-right: 10px;
	}
</style>