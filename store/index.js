//vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	//数据源
	state:{
		userinfo:{},
	},
	//修改数据？
	mutations:{
		setUserInfo(state,data) {
			console.log('store_setUserInfo_1',data);
			state.userinfo = data;
			console.log('store_setUserInfo_2',state.userinfo);
		}
	
	},
	//
	actions: {
	
	}
	
})

export default store;