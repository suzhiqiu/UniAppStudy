<template>
	<view class="container">
		<text class="view1">view1_{{getLogin1}}</text>
		<text class="view2">view2_{{getLogin2()}}</text>
		<view class="view3">
			<text class="view4">我是子组件1</text>
			<text class="view5">我是子组件2</text>
			<view class="view6">我是子组件3</view>
			<text class="view7">我是子组件4</text>
		</view>
		<button @click="clickLogin">点击3</button>
		
	
	</view>
</template>

<script>
	import customtText from './custom-text/custom-text.vue'
	export default {
		components:{
			customtText,
		},
		data() {
			return {
				login: false,
			}
		},
		computed: {
			getLogin1() {
				if (this.login) {
					return "compute--登录的_火影";
				} else {
					return "compute--未登录_我爱罗";
				}
			}

		},
		methods: {

			clickLogin() {
				console.log('点击登录...');
				this.login = !this.login;
			},
			getLogin2() {
				if (this.login) {
					return "method--登录的_火影";
				} else {
					return "method--未登录_我爱罗";
				}
			}

		},
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: green;

		height: 500rpx;
		width: 500rpx;

		//=================align-self、order
		.view1 {
			color: blue;
			font-size: 28rpx;
			font-weight: 400rpx;
		}

		.view2 {
			color: yellow;
			font-size: 28rpx;
			font-weight: 400rpx;
		}
		
		.view3 {
			background-color: red;
		
		}
		.view4 {
			background-color: blue;
		}
		.view5 {
			background-color: yellow;
		}

	}
</style>
