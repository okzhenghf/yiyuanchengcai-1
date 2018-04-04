<template>
	<div>
			<div class="head">
				<h4>21天读书养成计划</h4>
				<div class="button">
					<a href="#">分享</a>
				</div>
				<ul>
					<li class="one">
						<h5>总排名</h5></li>
					<li class="two"><img v-if="info_o.head_img" :src="$gretUrl+info_o.head_img" /></li>
				</ul>
				<div class="null">

				</div>
			</div>
			<div class="out">
				<ul class="name">
					<li class="shang">
						<h5 class="left">打卡排名</h5>
						<h5> </h5>
						<h5 class="right">打卡次数</h5>
					</li>
					<li class="xia">
						<h5>{{}}</h5>
						<h5 >{{info_o.user_name}}</h5>
						<h5>{{info_o.num}}</h5>
					</li>
				</ul>
			</div>
			<div class="main">
				<h5>打卡总人数：{{info_a.allid}}</h5>
				<div class="list" v-for='(info,index) in info_a.toplist'>
					<ul>
						<li class="yes">
							<ol>
								<li>{{index+1}}</li>
								<li><img v-if="info.head_img" :src="$gretUrl+info.head_img" /></li>
								<li>{{info.user_name}}</li>
								<li>{{info.c}}</li>
							</ol>
						</li>

					</ul>
				</div>
			</div>
		</div>

</template>

<script>
 import {mapState,mapMutations} from 'vuex'
	export default{
		data(){
			return{
				info_o:'',
				info_a:''
			}
		},
		computed:{
		    ...mapState(['info'])
		  },
		mounted(){
			this.$http.get('/api/daka/has',{
					params:{uid:this.info.user_id}
				})
				.then((rtnD)=>{
					console.log(rtnD)
					this.info_o=rtnD.data[0]
				})
			this.$http.post('/api/daka/toplist')
				.then((rtnD)=>{
					console.log(rtnD)
					this.info_a=rtnD.data
				})
			
		},
		methods:{

		}
	}
</script>
<style scoped>
/*.footer{
	display: none;
}*/
			* {
				list-style: none;
				text-decoration: none;
			}
			
			body,html{
				margin: 0;
				padding: 0 0 50px;
			}
			
			.head {
				background: #fff4de;
				width: 100%;
				height: 13rem;
			}
			
			h4 {
				text-align: center;
				padding: 1rem;
			}
			
			.head .button a {
				border: 1px #c5b07b dotted;
				border-radius: 10%;
				color: #c5b07b;
				float: right;
				margin-top: -60px;
			}
			
			.head ul {
				width: 100px;
				height: 200px;
				margin: auto;
			}
			
			.head ul .one {
				height: 90px;
				color: red;
				text-align: center;
				margin-top: 30px;
				background: url("../../assets/img/1_1.png");
				background-size: 100%;
			}
			
			.head ul .one h5 {
				padding: 20px 10px;
			}
			
			.head ul .two {
				width: 60px;
				height: 60px;
				border: #2C3E50 1px dotted;
				margin: auto;
				border-radius: 50%;
				overflow: hidden;
				margin-top: -25px;
			}
			
			.head ul .two img {
				width: 100%;
			}
			
			.head .null {
				width: 100%;
				height: 3rem;
				background: #f6d48d;
				margin-top: -7rem;
			}
			
			.out {
				background: #ffffff;
				width: 80%;
				height: 6rem;
				margin: auto;
				margin-top: -3rem;
				border: 1px solid #ccc;
				box-shadow: 0px 0px 10px 5px #aaa;
				overflow: hidden;
			}
			
			.out .name {
				width: 100%;
				/*margin-left: 30px;*/
				margin-top: 15px;
			}
			
			.out .name li {
				/*margin-left: -2rem;*/
				width: 100%;
				display: flex;
			}
			
			.out .name .shang {
				display: flex;
				justify-content: space-around;
			}
			.out .name .shang h5{
				width: 100%;
				text-align: center;
			}
			
			.out .name .xia {
				display: flex;
				justify-content: space-around;
				/*margin-top: -2rem;*/
			}
			.out .name .xia h5{
				width: 100%;
				text-align: center;
			}
			/*.out .name .xia h5:nth-child(2){
				margin-left: -8%; 
			}
			.out .name .xia h5:nth-child(3){
				margin-left: -30%; 
			}*/
			.main .list .yes ol li:nth-child(3){
				flex: 0 0 30%;
			}
			.main {
				width: 100%;
				height: 100px;
				/*position: absolute;*/
				/*padding-bottom: 100px;*/
			}
			
			.main h5 {
				margin-top: 3%;
				text-align: center;
			}
			
			
			
			.main .list {
				width: 100%;
				height: 75%;
			}
			
			.main .list .yes img{
				width: 3rem;
				height: 3rem;
				border: 1px solid;
				border-radius: 50%;
				overflow: hidden;
			}
			
			.main .list img {
				width: 100%;
				height: 100%;
			}
			.main .list .yes ol{
				display: flex;
				justify-content: space-around;
				align-items:center;
				/*margin-left: -5rem;*/
			}
			.main .list .yes ol li{
				
				float: left;				
			}
		</style>