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
					<li v-for="item in daka_list">
						<img src="../../assets/img/5.jpg" alt="" >
						<div class="daka_info">
							<h3>{{item.theme}}</h3>
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
 import {mapState,mapMutations} from 'vuex'
export default {
	data () {
    	return {
      		daka_list:[],
   		}
 	},
 			computed:{
		    ...mapState(['info'])
		  },
 	mounted(){
 		this.$http.get('/api/dakatheme',{
 			params:{
 				uid:this.info.user_id
 			}})
 		.then((rtnD)=>{
 			// console.log(rtnD);
 			this.daka_list = rtnD.data
 		})

 	},
 	methods:{
 		dodaka:function() {

	       this.$router.push('/daka/xiangqin')
	    }
 	}
 }
</script>
<style scoped>
.footer{
	height: 0px;
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
.el-row{
	margin-right:0px !important; 
}
.docard .docard_title{
	font-weight: bold;
	font-size:20px;
	text-align: left;
	margin-top: 5%;
}
.docard .docard_add{
	font-size: 14px;
	text-align: right;
	margin-right: 10%;
	margin-top: 5%;
}
.docard .docard_list ul{
	margin:0;
	padding:0;
	list-style: none;
}
.docard .docard_list ul li{
	height:90px;
	padding: 0px 3%;
	margin: 3% 0px;
	display:flex;
	justify-content: space-between;
	/*flex-wrap: nowrap;*/
	align-items:center;
	border-top: 1px solid #ccc;

}
.docard .docard_list ul li img{
	margin-top: 10px;  
	width:18%;
	height:60px;
	flex: 0 0 1;
}
.docard .docard_list ul li .daka_info{
	width: 65%;
	text-align: left;
}
.docard .docard_list ul li .daka_info h3{
	
	white-space:nowrap;
	overflow: hidden;
	text-overflow:ellipsis;
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
  /*  margin-bottom: 20px;*/
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