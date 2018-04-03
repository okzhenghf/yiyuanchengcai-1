<template>
<div class="box">
	<div class="content" ref="input" id="input" >
		<div class="head">
			<div class="left">
				<img v-if="con.imgpath" :src="$gretUrl+con.imgpath" alt="">
			</div>
			<div class="right">
				<h4 class="title">#{{con.theme}}#</h4>
				<div class="activity">
					<p style="color:red; padding-left: 6rem;">{{time_cont}}</p>
					<div class="bar-box" ><div class="bar" ref="input1" id="input1"></div></div>
				</div>
				<button class="yq">邀请好友</button>
			</div>
		</div>
		<p class="can" style="color:#ccc">已有{{info_a}}人参与</p>
		<div class="text">
		<div class="up" @click="daka"
			v-if ="hid" 
			>展开更多 v</div>
			<p style="margin-top: -3rem;">{{con.xiangqin}}</p>
			
			<div class="btn" 
			@click="sq"
			v-if ="show"
			>收起 ^</div>
		</div>
		
	</div>
	<div class="DT">全部动态</div>
	<ul class="NR">暂时没有动态</ul>
	<div class="daka" @click="dodaka()">参与打卡</div>
</div>
</template>
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
				


				this.$http.get('/api/daka/themelist',{
					params:{
						id:this.$route.params.id
					}
					
				})
				.then((rtnD)=>{
					// console.log(rtnD)
					this.info_a=rtnD.data
				})		
			
		},
		methods:{
			daka(){
				this.hid=false,
                this.show = true,
                this.$refs.input.style = "overflow: hidden"
			},
			sq(){
                this.hid=true,
                this.show = false,
                this.$refs.input.style = "height: 280px"

               //res只有触发后才生效
			},
			dodaka(){
				this.$router.push("/daka/dodaka/"+this.$route.params.id)
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
<style scoped>

/*.footer{
	display: none;
}*/
/*.box{
	margin-bottom:50px; 
}*/
.title{
	margin: 10% 10% 10px;
    font-size: 1.5rem;
    padding-left: 2rem;
}
.bar-box{

	width:190px;
	height: 4px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-left: 35%;
	margin-top:5px
}
.bar-box .bar{
	width: 20%;
	height: 100%;
	background: #09bb05;
}
.yq{
	margin-left: 150px;
	margin-top:1rem;
	background: #09bb05;
	color: #fff;
	border-radius: 4px;
	border: 1px solid  #09bb05;
}
.up,.btn{
	width: 100%;
    text-align: center;
}
p{
	font-size: 1rem;
}
.content .can{
	position: relative;
	top: -7.5rem;;
	left: -100px;
	

}
.text{
	margin-top: 30px;
	padding: 10px;
}
.content .text{

	position: relative;
	/*transition: height 3s;*/
	top: -120px;
	text-align: left;

}

.up{
	position: relative;
	top: 0.5rem;
	width: 100%;
	height: 40px;
	line-height: 40px;

	/*transition: height 3s;*/
	background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0.9))
}
/*.up:hover{
	height: 300px;
}*/
.DT{
	position: relative;
	top: 20px;
	left: -110px;
}
.NR{
	margin-top: 300px;
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
.content{
	margin: auto;
	transition: height 3s;
	overflow: hidden;
	width: 97%;
	border:1px solid #fbf8f8;
	box-sizing: border-box;
    border-radius:3px;
    box-shadow:0px 0px 30px rgba(0,0,0,.2);   
}
.content .head .left{
	position: relative;
	top: 10px;
	left: -6rem;

}
.content .head .right{
	position: relative;
	top: -6rem;
	right: -20px;
}


.content .head .left img{
	width: 7rem;
	height: 7rem;
}

</style>