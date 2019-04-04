	import Vue from 'vue'
import App from './App.vue'
import {store} from './store/index.js'
import VModal from 'vue-js-modal'

Vue.use(VModal);


new Vue({
  	el: '#app',
	store,
  	render: h => h(App)
})
