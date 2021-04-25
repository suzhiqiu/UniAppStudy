<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title1" v-bind:class="className" v-on:click="open">{{title}}</text>
			<text class="title2" :class="className" @click="open">{{title}}</text>
			<text v-if="showSubTime">{{subTitle}}</text>
			<text v-else >其他文案</text>
		</view>
		<view>
			<view v-for="(item,index) in arrayTitle" :key="index">{{index+' '+ item}}</view>
		</view>
		<view>
			<view v-for="(item,key1) in arrayTitle2"  v-bind:key="index">{{key1+':'+ item}}</view>
		</view>
		<view>
			<input v-model="inputText" />
			<text>当前的值:{{inputText}}</text>
		</view>
		<view>
			<surebutton textColor="red" @change="onChange">确定提交2</surebutton>
		</view>
		<!-- #ifdef APP-PLUS  -->
		<text >条件编译1</text>
		<!-- #endif -->
		
		<text  class="colorBg">外部样式处理</text>
		
		<view>
			<scroll-view class="homescroll" scroll-y="true" @scroll="moniterScroll">
				<view v-for="(item,index) in 1"  :key="index"  >{{item}}</view>
			</scroll-view>
		</view>
		
	
	
	
		
		
	</view>
</template>

<script>
	import surebutton from '@/components/surebutton/surebutton.vue'
	
	export default {
		components:{
			surebutton,
		},
		data() {
			return {
				title: 'Hello',
				subTitle:'niubi',
				className:'active',
				showSubTime:false,
				arrayTitle:['奔驰','宝马','奥迪'],
				arrayTitle2:{'01':'荣放','02':'奇骏','03':'CRV'},
				inputText:'',
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success(res) {
					console.log('res_success:',res);
				},
				fail(res) {
					console.log('res_falil:',res);
				},
				complete(res) {
					console.log('res_complete:',res);
				}
			})
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
			},
			moniterScroll(e) {
				console.log(e);
			},
			onChange(e) {
				console.log('外层点击了'+e);
			}

		}
	}
</script>

<style>
	@import './index.css';
	
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
	.homescroll {
		height: 500rpx;
		border: 1rpx #007AFF;
	}
</style>
