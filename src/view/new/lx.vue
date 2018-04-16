<template>
	<div class="lx">
		<div class="box">
			<p v-for="(rencai,rencai_index) in rencai_cate"
			:class="{'cur':rencai_index == rencai_cate_index}"
			@click="rencai_cate_lists(rencai_index,rencai.id)" 
			>{{rencai.cate_name}}</p>
			
		</div>
		<ul class="lists">
			<li v-for="rencai_lists in rencai_lists">
				{{rencai_lists.title}}
			</li>
		</ul>
	</div>
</template>
<style>
    
    .cur{
    	background: blue;
    	color: #fff;
    }
	.lx{
		width: 100%;
	}
	.lx .box{
		width: 100%;
		display: flex;
	}
	.lx .box p{
		width: 25%;
		border: 1px solid #ccc;
	}
	.lx .lists{
		width: 100%;
	}
	.lx .lists li{
		background: blue;
		color: #fff;
		width: 100%;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
	}
</style>
<script type="es6">
	export default{
		data(){
			return{
				rencai_cate:[],
				rencai_lists:[],
				rencai_cate_index:0,
			}
		},
		created(){
			this.init()
		},
		methods:{
			init(){
				this.$http.post("/api/rencai/getrencai")
				.then((rtn)=>{
					this.rencai_cate = rtn.data
					console.log(rtn.data)
					 return this.rencai_cate[0]['id']
				})
				.then((rencaiId)=>{
                    this.$http.post("/api/rencai",{'rencaiId':rencaiId})
                    .then((dataDtn)=>{
                         this.rencai_lists = dataDtn.data.data
                         console.log(dataDtn.data.data)
                    })
				})
			},
			rencai_cate_lists(index,rencaiId){
				this.rencai_cate_index = index
				this.$http.post("/api/rencai",{'rencaiId':rencaiId})
				.then((dataDtn)=>{
					this.rencai_lists = dataDtn.data.data
				})
			}
		},
	}
	
</script>