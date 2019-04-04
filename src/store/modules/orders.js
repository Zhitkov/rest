const state = {
	orders: [

	]
};

const actions = {
    madeNewOrder: ({commit, dispatch}, newOrder) => {
      return new Promise((resolve, reject) => {
        commit('NEW_ORDER', newOrder);
      })
	},
	NewOrderAmount: ({commit, dispatch}, newOrder) => {
      return new Promise((resolve, reject) => {
        commit('CHANGE_ORDER_AMOUNT', newOrder);
      })
	},
	removeOrder: ({commit, dispatch}, currentOrder) => {
      return new Promise((resolve, reject) => {
        commit('REMOVE_ORDER', currentOrder);
      })
	},
	removeOrders: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        commit('REMOVE_ORDERS');
      })
	},
};

const mutations = {
    NEW_ORDER(state, newOrder) {
      state.orders.push(newOrder);
	},
	CHANGE_ORDER_AMOUNT(state, newOrder) {
      state.orders.find((element) => {
      	if(element === newOrder){
      		element.amount = newOrder.amount;
      	}
      });
	},
	REMOVE_ORDER(state, currentOrder) {
      state.orders = state.orders.filter(item => item !== currentOrder);
	},
	REMOVE_ORDERS(state, currentOrder) {
      state.orders = [];
	},
};

const getters = {
    orders: state => state.orders,
};

export default {
    state,
    actions,
    mutations,
    getters
}

