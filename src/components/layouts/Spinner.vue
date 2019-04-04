<template>
	<div class="count">
		<button @click="increment">
			<i class="fas fa-chevron-up"></i>
		</button>
		<div class="value"><p>{{ amount }}</p></div>
		<button @click="decrement">
			<i class="fas fa-chevron-down"></i>
		</button>
	</div>
</template>

<script>

export default {

  name: 'Spinner',

  data () {
    return {
    	amount: this.$parent.order.amount
    }
  },
  methods: {
  	increment: function () {
  		return this.amount++;
  	},
  	decrement: function () {
  		if (this.amount !== 0) {
	  		return this.amount--;
  		}
  	}
  }
}
</script>

<style lang="scss" scoped>
	.count{
		width: 32px;
		height: 57px;
		background: #ffffff;
		transition: .3s
	}
	.count:hover{
		background: #E5E5E5;
	}
	.count:hover{
		width: 32px;
		height: 57px;
		background: #F0F0F2;
	}
	.count > button{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 30%;
		border: none;
		padding: 0px;
		background: none;
	}
	.count > .value{
		font-size: 14px;
		height: 40%;
		width:100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.count > .value > p{
		margin: 0px;
	}
	i{
		color: #00000000;
		font-size: 0.5rem;
		transition: .3s
	}
	.count:hover > button > i{
		color: #000000;
	}
</style>