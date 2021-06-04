import Vue from 'vue'
import App from './App'
import store from './store'//引入vuex

Vue.prototype.$store = store
//
Vue.config.productionTip = false
//定义全局数据 通过vue的原型来实现
Vue.prototype.customURL='www.baidu.com'

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
