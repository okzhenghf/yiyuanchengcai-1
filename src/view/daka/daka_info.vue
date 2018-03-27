<template>
<div>
	<h3>打卡详情</h3>
	<h3>主题:{{daka_info.theme}}</h3>
	<h3>头像:<!-- <img :src="$node_url+daka_info.thumb" alt="" 
	style="width:100px"> --></h3>
	
	<div class="text">
		详情：<textarea v-model="msg" placeholder="今天对自己鼓励一下"></textarea>
	</div>
	<el-button type="success" round @click="daka()">打卡</el-button>
</div>
	
	
</template>
<script>
	export default{
		data(){
			return{
				daka_info:[],
				msg:''
			}
		},
			created(){ //this.$route == req
				// this.$https.get('/api/daka_info',{
				// 	params:{
				// 		id:this.$route.params.id
				// 	}
				// })
			// this.$https.get('/api/daka_info/'+this.$route.params.id)
			// .then((rtnD)=>{
			// 	this.daka_info = rtnD.data.info
			// })
		},
		methods:{
			daka(){

	       this.$router.push('/daka/daka_rili')
				// this.$https.post('/api/daka_go',{
				// 	uid:9517,
				// 	daka_id:this.daka_info._id,
				// 	msg:this.msg
				// })
			}
		}
	}
</script>
<style>
	.footer{
	display: none;
}
</style>