<template>
	<div class="f_center order">
		<div class="f_center name">
			<p>{{ order.name }}</p>
			<p class="mass">{{ order.mass }}</p>
		</div>
		<spinner :amount="order.amount"/>
		<div class="f_center cost">
			<p>{{ order.cost * order.amount }} ₽</p>
		</div>
	</div>
</template>

<script>
import Spinner from './Spinner.vue'

export default {

  name: 'OrderItem',
  components:{
  	Spinner
  },
    props: {
	  	order:{
		  	type: Object,
		  	required: true
	  }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .order{
    border: 1px solid #F5F5F5;
    cursor: pointer;
  }
  .name{
    width: 60%;
  }
  .mass{
    color: #d3d3d3;
    margin: 3px 0px 0px 5px;
    font-size: 12px
  }
  .cost{
    margin-left: 5px;
  }
</style>