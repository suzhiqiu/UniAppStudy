<template>
	<view class="container">
		<text class="view1">view1_{{getLogin1}}</text>
		<text class="view2">view2_{{getLogin2()}}</text>
		<button @click="clickLogin">点击1</button>
	</view>
</template>

<script>
	export default {
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

	}
</style>
