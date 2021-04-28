<template>
	<view  class="container">
		<text class ="view1">view1</text>
		<text class="view2">view2</text>
		<text class="view3">view3</text>
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
		flex-direction: row;// 默认水平
	    flex-direction: column;
		justify-content: center;
		align-items: center;
		
		width: 100%;
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
	}

</style>
