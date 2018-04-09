<template>	

	<div>
		<h2>{{title}}</h2>
		<!-- 插槽slot -->
		<slot></slot>
		<ul>
			  <li v-for="info in data">
				{{info}}  <a  @click="zan(info)">赞</a>
			 </li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		props:['title','data'],//接收父组件传过来的信息
		data(){
			return {

			}
		},
		methods:{
			zan(info){
				// $emit子组件传值给父组件
				this.$emit('input',info+'被点赞了！')
			}
		}
	}
</script>