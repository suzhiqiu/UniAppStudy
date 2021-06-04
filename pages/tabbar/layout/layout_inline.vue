<template>
	<view class="container">
		<text class="view1">view1_{{getLogin1}}</text>
		<text class="view2">view2_{{getLogin2()}}</text>
	    <button @click="clickLogin">vuex_存储</button>
		<button @click="clickRead">vuex_读取</button>
		<text>普通布局</text>
		<view class="view3">
			<text class="view11">我是子组件1</text>
			<text class="view12">我是子组件2</text>
			<view class="view13">我是子组件3</view>
			<text class="view14">我是子组件4</text>
			<text class="view15">我是子组件5</text>
			<text class="view16">我是子组件66666</text>
		</view>
		<text>flex布局</text>
		<view class="view4">
			<text class="view11">我是子组件1</text>
			<text class="view12">我是子组件2</text>
			<view class="view13">我是子组件3</view>
			<text class="view14">我是子组件4</text>
			<text class="view15">我是子组件5</text>
			<text class="styleObject">我是子组件6</text>
		</view>
		<text>inline-block </text>
		<view>
			<view class="inline-block1">
				eee1
			</view>
			<view class="inline-block2">
				eee2
			</view>
			<text class="inline-block3">eee3</text>
			<view>eee4</view>
		</view>
		
		<text>inline-block </text>
		<view class="view20">
			<view class="view21"/>
			<view class="view22"/>
		</view>
	</view>
</template>

<script>
	import customtText from './custom-text/custom-text.vue'
	export default {
		components:{
			customtText,
		},
		
		data() {
			 console.log('this.$store:',this.$store)
			return {
				login: false,
				 styleObject: {
				    color: 'red',
				    'font-size': '13rpx',
				 }
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
				this.$store.commit('setUserInfo',{'username':'我爱罗'});
			},
			clickRead() {
				console.log('读取',this.$store.state.userinfo.username);
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
		background-color: white;

		// height: 500rpx;
		// width: 500rpx;

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
			//height: 200rpx;
		
		}
		.view4 {
			display: flex;
			background-color: red;
			//height: 200rpx;
		}
		.view11 {
			background-color: yellow;
		}
		.view12 {
			background-color: green;
		}
		.view13 {
			background-color: pink;
		}
		.view14 {
			background-color: blue;
		}
		.view15 {
			background-color: yellow;
		}
		.view16 {
			background-color: orange;
		}
		//一个场景 view 背景 想排成一行
		.inline-block1{
			display: inline-block;
			background-color: orange;
			height: 299rpx;
		}
		.inline-block2{
			display: inline-block;
			background-color: yellow;
		}
		.inline-block3{
			background-color: blue;
			height: 100rpx;
			width: 100rpx;
		}
		
		.view20 {
			background-color: yellow;
		}
		.view21 {
			background-color: yellow;
		}
		.view22 {
			background-color: orange;
		}

	}
</style>
