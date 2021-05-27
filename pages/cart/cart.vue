<template>
	<view>
		<text>购物车页面</text>
		<button :data-index="12" @click1="clickNextPage(1,$event)">点击1</button>
		<button @click="clickNextPage(2,$event)">点击2</button>
		<surebutton textColor ="red" @click="clickCommit">我爱罗</surebutton>
		<!-- 插槽 整个标签-->
		<surebutton textColor ="red" @click="clickCommit"><button>我哈哈</button></surebutton>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			//事件传值:
			clickNextPage(index,event) {
				console.log(event.currentTarget.dataset.index);
				console.log(index,event);
			},
			clickCommit(text){
				//console.log('提交',text);
				console.log('全局数据1:',this.customURL);
				console.log('全局数据2:',getApp().globalData.customURL2);
				//vuex  全局数据3
				//数据存储  全局数据4
				
			},

		}
	}
</script>

<style>

</style>
