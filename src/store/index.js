import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import orders from './modules/orders';
import dishes from './modules/dishes';

export const store = new Vuex.Store({
    modules: {
    	orders: orders,
    	dishes: dishes
    },
    strict: false
});