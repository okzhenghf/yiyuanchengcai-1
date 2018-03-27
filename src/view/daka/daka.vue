<template>

		<!-- <ul>
  		<li v-for="info in daka_list">  <router-link :to="'/info/'+info._id"> {{info.theme}} </router-link></li>
  	</ul> -->
  	<div class="bgc">
	  	<div class="top">
			<el-carousel
			 :interval="5000" 
			 arrow="never"
			 height=200px>
			    <el-carousel-item v-for="item in 4" :key="item">
			      <h3>{{ item }}</h3>
			    </el-carousel-item>
			 </el-carousel>
			 <div class="channel">
			 	<el-row :gutter="20">
				  <el-col :span="6"><div class="grid-content bg-purple">风景</div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple">风景</div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple">风景</div></el-col>
				  <el-col :span="6"><div class="grid-content bg-purple">风景</div></el-col>
				</el-row>
			 </div>
		</div>

		<div class="docard">
			<el-row >
		 	 	<el-col :span="12"><div class="grid-content bg-purple docard_title">打卡</div></el-col>
		 		<el-col :span="12"><div class="grid-content bg-purple docard_add">全部打卡></div></el-col>
			</el-row>
			<div class="docard_list">
				<ul>
					<li v-for="item in 2">
						<!-- <img :src="$node_url+item.themb" alt="" > -->
						<div class="daka_info">
							<h3>{{item}}</h3>
							<p>333人参与 已打卡7天</p>
							<p>2018-02-05 至 2018-03-4</p>
						</div>
						  <el-button type="success" @click="dodaka()">去打卡</el-button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	data () {
    	return {
      		daka_list:[]
   		}
 	},
 	created(){
 		// this.$https.get('/api/list_api')
 		// .then((rtnD)=>{
 		// 	this.daka_list = rtnD.data.manhuaData
 		// })

 	},
 	methods:{
 		dodaka:function() {

	       this.$router.push('/daka/xiangqin')
	    }
 	}
 }
</script>
<style>
.footer{
	display: none;
}
.bgc{
	background-color: #d3dce6
}
.top{
	background-color: #fff
}
.docard{
	background-color: #fff;
	margin-top: -10px;
	text-indent:10px;
}
.docard .docard_title{
	font-weight: bold;
	font-size:20px;
	text-align: left;
}
.docard .docard_add{
	font-size: 14px;
	text-align: right;
}
.docard .docard_list ul{
	margin:0;
	padding:0;
	list-style: none;
}
.docard .docard_list ul li{
	height:80px;
	display:flex;
	justify-content: space-between;
}
.docard .docard_list ul li img{
	margin-top: 10px;
	margin-left:3%; 
	width:18%;
	height:60px;
}
.docard .docard_list ul li .daka_info{
	width: 62%;
	text-align: left;
}
.docard .docard_list ul li .daka_info h3{
	margin:10px 0 0 0;

}
.docard .docard_list ul li .daka_info p{
	font-size: 12px;
	color: #ccc;
	margin:4px 0 0 0;
}
.docard .docard_list ul li button{
	font-size: 12px;
	margin-top: 25px;
	padding:0 2%;
	height: 30px
}
body{
	margin: 0;
}
	.el-carousel{
		margin: 0;
	}
  	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
 	}
	.el-carousel__item:nth-child(2n) {
	 	background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

	.el-row {
	margin-top: 20px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px
  }
 
</style>