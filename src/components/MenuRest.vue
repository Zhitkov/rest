<template>
	<div class="rest">
		<div class="menu">
			<menu-navbar/>
			<menu-dish/>
		</div>
		<div class="order">
			<order/>
		</div>
	</div>
</template>

<script>
import MenuDish from './layouts/MenuDish';
import MenuNavbar from './layouts/MenuNavbar';
import Order from './layouts/Order';


export default {

  name: 'Menu',

  components:{
		MenuDish,
		MenuNavbar,
		Order
	},
  data () {
    return {
    	
    }
  },
}
</script>

<style lang="scss" scoped>

.order > div{
	width: 100%;
}
	.rest{
		display: flex;
-webkit-flex-direction: row;
    -ms-flex-direction: row;
        flex-direction: row;
		width: 100%;
	}
	.menu{
		border-right: 1px solid #E8EAED;
		display: flex;
-webkit-flex-direction: column;
    -ms-flex-direction: column;
        flex-direction: column;
		width: 80%;
	}
	.order{
		display: flex;
		width: 20%;
	}
	@media only screen and (max-width: 764px) { 
		.rest{
		display: flex;
-webkit-flex-direction: column;
    -ms-flex-direction: column;
        flex-direction: column;
		}
		.menu{
        	width: 100%;
        }
        .order{
        	width: 100%;
        }
    }
</style>