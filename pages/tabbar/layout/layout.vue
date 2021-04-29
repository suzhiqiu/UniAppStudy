<template>
	<view  class="container">

		<text class ="view1">view1</text>
		<text class="view2">view2</text>
		<text class="view3">view3</text>
		<text class="view4">view4</text>
<!-- 	
		<text class="view5">view5</text>
		<text class="view6">view6</text>
		 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		//1.决定子布局的位置和排列  默认值:
		// flex-direction: row;// 默认水平
		// justify-content: flex-start;//靠前
		// align-items: flex-start;//靠前
		// flex-wrap: nowrap;//不换行
		
		//2.stretch
		//需要子view 不能设置高度
		 align-items: stretch;
		
		
	 //    flex-direction: column;
		 justify-content: space-around;
		
		// align-items: center;
		
		width: 500rpx;
		height: 500rpx;
		background-color: #F07373;
		.view1 {
			width: 100rpx;
			height: 100rpx;
			background-color: blue;
		}
		.view2 {
			width: 100rpx;
			height: 100rpx;
			background-color: yellow;
		}
		.view3 {
			width: 100rpx;
			height: 100rpx;
			background-color: green;
		}
		.view4 {
			width: 100rpx;
			height: 100rpx;
			background-color: orange;
		}
		.view5 {
			width: 100rpx;
			height: 100rpx;
			background-color: #3F536E;
		}
		.view6 {
			width: 100rpx;
			height: 100rpx;
			background-color: #6E6E6E;
		}
	}

</style>
