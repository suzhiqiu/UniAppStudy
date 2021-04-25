<template>
	<view class="btn-box" :style="{color:textColor}" @click="onClick">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props:{
			textColor:{
				type:String,
				default:'#000'
			},
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			onClick() {
				console.log('被点击了');
				this.$emit('change','_xx_')
			}
		}
	}
</script>

<style>
	.btn-box {
		width: 100rpx;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
		
	}
	

</style>
