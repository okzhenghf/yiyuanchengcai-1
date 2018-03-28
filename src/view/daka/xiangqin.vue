<template>
 <div class="contion">
 	<div class="header_box">
	 	<div class="title">
	 		<div class="left">
				<img v-if="con.imgpath" :src="$gretUrl+con.imgpath">
			</div>
			<div class="right">
<<<<<<< HEAD
				<h3>{{con.theme}}</h3>
				<p style="color:red;font-size:.8rem;">活动还剩5天6小时45分</p>
				<div class="box">
					<div class="bar">
						<div class="cur"></div>
					</div>
=======
				<h4 class="title">#{{con.theme}}#</h4>
				<div class="activity">
					<p style="color:red; padding-left: 6rem;">{{time_cont}}</p>
					<div class="bar-box" ><div class="bar" ref="input1" id="input1"></div></div>
>>>>>>> 8c8603083e4b7431ebd639d2c0639f45234d5acf
				</div>
			</div>
			
	 	</div>
	 	<div class="ha">
	 		<span style="font-size:0.8rem">参于人数{{info_a}}</span>
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
 	<div class="actv">
 		<h3>全部动态</h3>
 	</div>
 	<ul class="NR">暂时没有动态</ul>
	<div class="daka" @click="dodaka()">参与打卡</div>
 </div>
</template>
<<<<<<< HEAD


=======
<script>
 import {mapState,mapMutations} from 'vuex'
export default{
		data(){
			return{
				content:'',
				hid:false,
				show:true,
				// con:'时间是最美的画笔，人生如梦，岁月无情，一盏灯，一个月明，此生不易，来世多少的容易，想起一段哭泣，温柔一段慈悲，只是一句话，一个人，一段沧桑。岁月无痕，人间冷漠，沧桑了孤独的自己，有一种冷漠，也有一种淡泊，藏着风花雪月，藏着无情等待，只是一种观望，一个人生的错觉。付出是一种观望，也是一种奇迹，爱情分明，人海孤独，只是苍老的世界，一个人的誓言，一个人的回忆，温柔的慈悲，伤感最后的熟悉，每一个憔悴，每一个冰冷，只是一种年华，一种谢幕。再见的爱情，人生的冷落，只是思念太短，人生太无期，回首往昔的天亮，一个人哭泣。　一段岁月，一份想起，人生的在意，梦里的眷恋，只是一种想起，一种再见，温柔的慈悲，伤感的憔悴，人生如此眷恋，爱意如此朦胧，只是一种不甘心，一种不在意，沧桑了自己的独白，人生一句话，也是一种温柔的锁甲。爱意分别，人海孤独，只是一首凌乱，一段烦躁，孤独的活着。爱情分明，人海孤独，只是苍老的世界，一个人的誓言，一个人的回忆，温柔的慈悲，伤感最后的熟悉，每一个憔悴，每一个冰冷，只是一种年华，一种谢幕。再见的爱情，人生的冷落，只是思念太短，人生太无期，回首往昔的天亮，一个人哭泣。，孤独的活着。爱情分明，人海孤独，只是苍老的世界，一个人的誓言，一个人的回忆，温柔的慈悲，伤感最后的熟悉，每一个憔悴，每一个冰冷，只是一种年华，一种谢幕。再见的爱情，人生的冷落，只是思念太短，人生太无期，回首往昔的天亮，一个人哭泣'
				con:'',
				info_a:[],
				time_cont:''
			}
		},
		computed:{
		    ...mapState(['info'])
		  },
		mounted(){
			
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
							var bar =document.querySelector('.bar')
							// console.log(bar)
							bar.style.width = ct/zt*100 +"%";  // 人数/总人数 * 100
							
						},0)//
					}else{
						this.time_cont ="活动已结束"
					}
					
				},1000)
				

				

			})
				
>>>>>>> 8c8603083e4b7431ebd639d2c0639f45234d5acf

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
			info_a:[]
		}
	},
	computed:{
		    ...mapState(['info'])
		  },
	mounted(){
		
 		this.$http.get("/api/dakatheme/xiangqin",{
				params:{
					id:this.$route.params.id,
					uid:this.info.user_id
				}
			})
			.then((rtnD)=>{
				console.log(rtnD)
				this.con = rtnD.data

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
		dodaka(){
				this.$router.push("/daka/dodaka/"+this.$route.params.id)
<<<<<<< HEAD
			}
		
		
=======
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
>>>>>>> 8c8603083e4b7431ebd639d2c0639f45234d5acf
	}

}
	
</script>


<style type="text/css" scoped>
	p{
		padding: 0px;
		
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
		overflow: hidden;
		position: relative;
		height :100px;
	}

	.shang{
		text-align: center;
	}
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
	
	.actv{
		text-align: left;
		padding-left: 20px;
	}
	
  .daka{
	width: 100%;
	height: 40px;
	line-height: 40px;
	background: #09bb05;
	color: #fff;
	position: fixed;
	bottom: 50px;
}
	
</style>