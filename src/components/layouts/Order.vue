<template>
	<div>
        <div class="f_center title">
        	<h2>Мой заказ</h2>
	        <i @click="trash" class="far fa-trash-alt"></i>
	    </div>
		<div v-if="!orders[0]">
			<div class="empty">
				<img src="../../assets/plate.png">
				<p>Пока пусто ;)</p>
			</div>
		</div>
		<div v-else>
			<div class="order_items">
		    	<div class="order" v-for="(order, index) in orders">
					<order-item :order="orders[index]"/>
				</div>
			</div>
			<div class="form">
				
			</div>
		</div>
	</div>
</template>

<script>
import OrderItem from './OrderItem.vue'
import {mapGetters} from 'vuex';


export default {

	name: 'Order',
	components:{
		OrderItem
	},
	data () {
		return {

		}
	},
    computed: {
        ...mapGetters(["orders"]),
    },
    methods: {
    	trash: function () {
    		this.$store
			.dispatch("removeOrders")
			.then(() => {
				console.log("Success Report data request");
			})
			.catch(() => {
				console.log("Error Report data request");
			});
    	}
    }
}
</script>

<style lang="scss" scoped>
.title{
	justify-content: space-between;
	padding: 0 20px;
}
.title > i{
	color: #C9C9C9;
	cursor: pointer
}
.order_items{
	width: 100%;
	height: 50%;
}
.empty{
	text-align: center;
}
.empty > img{
	width: 100%;
}
.empty > p{
	color: #A7A7A7;
}
</style>