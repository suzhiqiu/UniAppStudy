//vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	//数据源
	state:{
		historyList:[]
	},
	//修改数据？
	mutations:{
		SET_HISTORY_LIST(state,history){
			state.historyList = history;
		},
	},
	//
	actions: {
		set_history({commit,state},history) {
			commit('SET_HISTORY_LIST',history);//调用 mutations的方法
		},
	}
	
})

export default store;