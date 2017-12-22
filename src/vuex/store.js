import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

//保存所有的数据
const state = {
	date: new Date()+"",
	//订单列表
	orderList:[{
		name:'成人',
		price:1200,
		num:1
	}]
	
};

//同步修改state中状态的方法
const mutations = {
	//参数固定是state
	setDate(state){
		state.date = new Date() +""
	},
	addPro(state,pro){
		var flag = true;
		for(var n=0; n<state.orderList.length;n++){
			if (pro.name == state.orderList[n].name) {
				state.orderList.splice(n, 1,pro);
				// state.orderList[n].num++;
				flag = false;
			};
		}
		if (flag) {
			// pro.num++;
			state.orderList.push(pro);
		};
	},
	musPro(state,pro){
		for(var n=0; n<state.orderList.length; n++){
				state.orderList.splice(n,1,pro);
			// if (pro.name === state.orderList[n].length) {
			// 	// state.orderList[n].num--;
			// } 
			if (state.orderList[n].num <= 0) {
				state.orderList.splice(n,1);
			};
		}
	}

};

// 调用mutations中的方法修改state的方法，actions中可以发布异步请求，ajax请求而mutation只能同步
const actions = {
	set_date(store){
		//计时器是异步操作
		setInterval(function(){
			//actions使用commit调用mutation中的方法
			store.commit('setDate');
		},1000)
	},
	add_Pro({commit},pro){
		commit('addPro',pro);
	},
	mus_Pro({commit},pro){
		commit('musPro',pro);
	}		
			
};

const getters = {
	total(state){
		var total =0;
		for(var n=0; n<state.orderList.length; n++){
			total +=state.orderList[n].price * state.orderList[n].num;
		}
		return total;
	}
}

export default new Vuex.Store({
	state,mutations,actions,getters
})