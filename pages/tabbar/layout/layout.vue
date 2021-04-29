<template>
	<view  class="container">

		<text class ="view1">view1</text>
		<text class="view2">view2</text>
		<text class="view3">view3</text>
		<text class="view4">view4</text>
	
<!-- 		<text class="view5">view5</text>
		<text class="view6">view6</text> -->
		
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
		//align-items: stretch;
	
		//3.换行产生的多行。单行设置无效
		//
		//align-items 失效了 得改由 align-content。多了space-between
		// flex-wrap:wrap;
		// align-items: flex-start;//无效
		// align-content: space-between;
		
		//4.flex-flow
		// flex-flow: row wrap; //换行有间须 再下面的布局
		// align-content: flex-start;
		
		//===================子项常见属性
		//5.flex 子项目的占份数 默认是0  cool
		//分配的是剩余空间。 如果空间满了,就保持不变了。
		
		
		//6.align-self控制子项自己再侧轴的排列方式
		
		
		//7.order属性定义排列顺序
		

		
		width: 500rpx;
		height: 500rpx;
		background-color: #F07373;
		
		// =================flex:1 占用比
		// .view1 {
		// 	width: 100rpx;
		// 	height: 100rpx;
		// 	background-color: blue;
		// }
		// .view2 {
		// 	height: 100rpx;
		// 	background-color: yellow;
		// 	flex:1;
		// }
		// .view3 {
		// 	width: 100rpx;
		// 	height: 100rpx;
		// 	background-color: green;
		// }
		
		//=================
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
