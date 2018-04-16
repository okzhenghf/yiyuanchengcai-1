<template>
	<div class="tags">
		<div class="tags_title">
			<!-- <span @click=""><返回</span> -->
			 <router-link :to="'/tutorDetails/'+vid"><返回</router-link>
			<span>我的标签管理</span>
			<span></span>
		</div>
		<ul class="tags_lists">
			<li class="tags_list" v-for="(i,index) in tags_list">
	            <div class="list">
	            	<div>{{i.tags}}</div>
	            	<div class="use_xinxi">
	            		<div class="beizan">
	            			<span>被赞</span>
		            		<i class="like-icon-zan"></i>
		              		<span>{{i.zan}}</span>
	            		</div>
	            		<div class="iswho">
	            			<span>{{i.user_name}}</span>
	            			<span>赠与</span>
	            		</div>
	            		
	            	</div>
	            	
	            </div>
	            
	            <div class="tags_dome">
	              <!-- <div class="delete">删除</div> -->
	              <el-button type="danger" @click="deleteTag(index)">删除</el-button>
	            </div>
          	</li>
		</ul>

	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return{
			vid:'',
			tags_list:[],//标签列表

		}
	},
	mounted(){
		this.init()
	},
	methods:{
		init(){
			this.vid=this.$route.params.id
			this.$http.get('api/tags/',{params:{
		        vid:this.vid
		     }})
		     .then((rtnD)=>{
		        this.tags_list = rtnD.data
		        // console.log(this.tags_list)
		    })

		},
		deleteTag(index){
			this.$http.get('api/tags/tagdelete',{params:{
				id:this.tags_list[index].id
			}})
			.then((rtnD)=>{
				console.log(rtnD)
			})
			this.tags_list.splice(index,1);

		}

	}
}
</script>
<style>
	.tags{
		min-height:90%;
		background: #f5f5f5;
		/*padding-bottom: 4.16666667rem;*/
	}
	.tags .tags_title{
		display: flex;
		justify-content: space-between;
		padding: .2rem .5rem;
		background:#fff;
    	font-size: 1.3rem;
    	font-weight: 700;
	}

	.tags .tags_lists{
		margin-top: 0.5rem;
	}
	.tags .tags_list{
		display: flex;
		justify-content: space-between;
		padding: .475rem 1rem;
	    align-items: center;
	    background-color: #fff;
	    border-bottom: 1px solid #ccc;
	}
	
	.tags .tags_list .list span{
		/*white-space: nowrap;*/
	}
	.tags .tags_list .tags_dome{
		flex: 0 0 30%;
	}
	.tags .tags_list .delete{
		color: red;
	}
	.tags .tags_list .list{
		font-size: 1rem;
		width: 100%;
		font-weight: 600;
		text-align: left;
	}
	.tags .tags_list .list .use_xinxi{
		font-size: .8rem;
		font-weight:500;
		display: flex;
		justify-content: space-between;
		color: #ccc;
	}
	.el-button{
		font-size: 1rem;
	}
	.like-icon-zan {
	  	width: 0.8rem;
	  	height: 0.8rem;
	  	color: #999;
	  	display: inline-block;
	  	background-repeat: no-repeat;
	  	background-size: contain;
	  	vertical-align: -10%;
	  	background-image: url("../../assets/img/tutorDetails-good.png");
	}
</style>