<template>
	<div>
		<div class="buttons">
			<transition name="fade">
				<i v-if="this.newOrder.amount!==0" @click="decrement" class="fas fa-minus"></i>
			</transition>
			<transition name="fade">
				<p v-if="newOrder.amount!==0" class="amount">{{ dish.amount }}</p>
			</transition>
			<i @click="increment" class="fas fa-plus"></i>
		</div>
		<div class="modal_div" @click="show()">
		<div class="dish_img">
			<img :src="dish.img" :alt="dish.name">
		</div>
		<div class="dish_desk">
			<div class="f">
				<p class="name">{{ dish.name }}</p>
				<p class="mass">{{ dish.mass }}</p>
			</div>
			<p class="cost">{{ dish.cost }} ₽</p>
		</div>
		<div class="border"></div>
		<div class="dish_composition">
			<p>{{ dish.composition }}<b>подробнее</b></p>
		</div>
	</div>
	</div>
</template>

<script>
export default {

  name: 'Dish',
  props: {
	  	dish: {
		  	type: Object,
		  	required: true
	  }
  },
  data () {
    return {
    	newOrder: {
    		name: this.dish.name,
    		mass: this.dish.mass,
    		amount: this.dish.amount,
    		cost: this.dish.cost,
    	}

    }
  },
  methods: {
      show () {
        this.$modal.show('hi');
      },
  	increment:  function () {
  		this.newOrder.amount++;
  		if (this.newOrder.amount === 1) {
  			this.$store
			.dispatch("madeNewOrder", this.newOrder)
			.then(() => {
				console.log("Success Report data request");
			})
			.catch(() => {
				console.log("Error Report data request");
			});
  		} else {
  			this.$store
			.dispatch("NewOrderAmount", this.newOrder)
			.then(() => {
				console.log("Success Report data request");
			})
			.catch(() => {
				console.log("Error Report data request");
			});
  		}
  	},
  	decrement: function () {
  		if(this.newOrder.amount > 0) {
		  		this.newOrder.amount--;
	  		if (this.newOrder.amount >= 1) {
		  		this.$store
				.dispatch("NewOrderAmount", this.newOrder)
				.then(() => {
					console.log("Success Report data request");
				})
				.catch(() => {
					console.log("Error Report data request");
				});
	  		} else {
	  			this.$store
				.dispatch("removeOrder", this.newOrder)
				.then(() => {
					console.log("Success Report data request");
				})
				.catch(() => {
					console.log("Error Report data request");
				});
	  		}
  		}
  	}
  },
}
</script>

<style lang="scss" scoped>
	
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
	  opacity: 0;
	}


	.buttons{
		display: flex;
		justify-content: flex-end;
	}
	.buttons > i{
		font-size: .7rem;
		padding: 2px;
	}
	.buttons > .amount{
		font-size: 12px;
		margin: 0px;
		width: auto;
		color: #F22C2C;
		margin: 0px 5px;
	}
	.fa-minus{
		color: #333333;
		transition: .3s
	}
	.fa-plus{
		color: #F22C2C;
		transition: .3s
	}
	.dish_img > img{
		width: 100%;
	}
	.dish_desk{
		display: flex;
		justify-content: space-between;
	}
	.mass{
		margin-left: 5px;
		color: #c9c9c9;
	}
	.border{
		border: 1px solid #2E2E2E;
		transition: .3s;
	}
	.modal_div:hover > .border{
		border: 1px solid #D62323;
	}
	b{
		margin-left: 5px;
	}
</style>