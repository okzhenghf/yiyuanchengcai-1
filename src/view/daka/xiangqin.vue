<template>
<div class="box">
	<div class="content" ref="input" id="input" >
		<div class="head">
			<div class="left"><img src="http://p1.so.qhimgs1.com/t01bdc8e833aa80013d.jpg" alt=""></div>
			<div class="right">
				<h4 class="title">#一起坚持起早床#</h4>
				<div class="activity">
					<p style="color:red">活动开始剩5天23小时33分</p>
					<div class="bar-box" ><div class="bar" ref="input1" id="input1"></div></div>
				</div>
				<button class="yq">邀请好友</button>
			</div>
		</div>
		<p class="can" style="color:#ccc">已有0人参与</p>
		<div class="text">
		<div class="up" @click="daka"
			v-if ="hid" 
			>展开更多 v</div>
			<p>{{con}}</p>
			
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
export default{
		data(){
			return{
				content:'',
				hid:false,
				show:true,
				con:'时间是最美的画笔，人生如梦，岁月无情，一盏灯，一个月明，此生不易，来世多少的容易，想起一段哭泣，温柔一段慈悲，只是一句话，一个人，一段沧桑。岁月无痕，人间冷漠，沧桑了孤独的自己，有一种冷漠，也有一种淡泊，藏着风花雪月，藏着无情等待，只是一种观望，一个人生的错觉。付出是一种观望，也是一种奇迹，爱情分明，人海孤独，只是苍老的世界，一个人的誓言，一个人的回忆，温柔的慈悲，伤感最后的熟悉，每一个憔悴，每一个冰冷，只是一种年华，一种谢幕。再见的爱情，人生的冷落，只是思念太短，人生太无期，回首往昔的天亮，一个人哭泣。　一段岁月，一份想起，人生的在意，梦里的眷恋，只是一种想起，一种再见，温柔的慈悲，伤感的憔悴，人生如此眷恋，爱意如此朦胧，只是一种不甘心，一种不在意，沧桑了自己的独白，人生一句话，也是一种温柔的锁甲。爱意分别，人海孤独，只是一首凌乱，一段烦躁，孤独的活着。爱情分明，人海孤独，只是苍老的世界，一个人的誓言，一个人的回忆，温柔的慈悲，伤感最后的熟悉，每一个憔悴，每一个冰冷，只是一种年华，一种谢幕。再见的爱情，人生的冷落，只是思念太短，人生太无期，回首往昔的天亮，一个人哭泣。，孤独的活着。爱情分明，人海孤独，只是苍老的世界，一个人的誓言，一个人的回忆，温柔的慈悲，伤感最后的熟悉，每一个憔悴，每一个冰冷，只是一种年华，一种谢幕。再见的爱情，人生的冷落，只是思念太短，人生太无期，回首往昔的天亮，一个人哭泣'
			}
		},

		created(){
			setTimeout(function(){
				var bar =document.querySelector('.bar')
				console.log(bar)
				bar.style.width = 2/4 *100 +"%";  // 人数/总人数 * 100
				
			},0)//

			
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
				this.$router.push("/daka/dodaka")
			}
		}
	}

</script>
<style>
.footer{
	display: none;
}
.title{
	margin: 10% 10% 10px;
    font-size: 20px;
    padding-left: 25px;
}
.bar-box{

	width:190px;
	height: 4px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-left: 30%;
	margin-top:5px
}
.bar-box .bar{
	width: 20%;
	height: 100%;
	background: #09bb05;
}
.yq{
	margin-left: 150px;
	margin-top:5px;
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
	font-size: 5px;
}
.content .can{
	position: relative;
	top: -100px;
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
	top: 85px;
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
	bottom: 0px;
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
	left:-100px;

}
.content .head .right{
	position: relative;
	top: -90px;
	right: -20px;
}


.content .head .left img{
	width: 80px;
	height: 80px;
}

</style>