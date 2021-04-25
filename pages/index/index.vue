<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title1" v-bind:class="className" v-on:click="open">{{title}}</text>
			<text class="title2" :class="className" @click="open">{{title}}</text>
			<text v-if="showSubTime">{{subTitle}}</text>
			<text v-else >其他文案</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				subTitle:'niubi',
				className:'active',
				showSubTime:false,
			}
		},
		onLoad() {
			//
			// setTimeout(()=>{
			// 	this.title = '标题1'
			// },2000);
		},
		methods: {
			open() {
				console.log('click_open');
				//this.title = '我被点击了'
				this.showSubTime = !this.showSubTime
			}

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
