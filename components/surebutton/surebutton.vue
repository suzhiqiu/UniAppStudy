<template>
	<view class="btn-box" :style="{color:textColor}" @click="onClick">
		<slot></slot>
	</view>
</template>




<script>
	export default {
		beforeCreate() {
			console.log('commponent_beforeCreate');
		},
		created(){
			console.log('commponent_create');
		},

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
				console.log('点击了');
				//子组件向父组件传递数据的方式 触发方式
				this.$emit('click','_xx_1')
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


<!-- 加冒号的，说明后面的是一个变量或者表达式；没加冒号的后面就是对应的字符串字面量！

加上冒号会首先将这个属性当作变量解析，没加冒号就直接是字符串

列：

  <input :disable="true">打开</input>

输出：true 或 false   值是变量/Boolean类型

<input disable="true">打开</input>

输出：true   值是String类型 -->
