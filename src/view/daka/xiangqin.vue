<template>
 <div class="contion">
 	<div class="header_box">
	 	<div class="title">
	 		<div class="left">
				<img v-if="con.imgpath" :src="$gretUrl+con.imgpath">
			</div>
			<div class="right">
				<h3>{{con.theme}}</h3>
				<p style="color:red;font-size:.8rem;">活动还剩5天6小时45分</p>
				<div class="box">
					<div class="bar">
						<div class="cur"></div>
					</div>
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
			}
		
		
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