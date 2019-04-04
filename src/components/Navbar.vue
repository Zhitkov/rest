<template>
	<div class="navbar">
		<nav class="nav">
			<div class="nav_item">
				<p>Меню</p>
			</div>
			<div class="nav_item">
				<p>Меню</p>
			</div>
			<div class="nav_item">
				<p>Меню</p>
			</div>
			<div class="nav_item">
				<div class="red_squre"></div>
			</div>
			<div class="nav_item">
				<p>Меню</p>
			</div>
			<div class="nav_item">
				<p>Меню</p>
			</div>
			<div class="nav_item">
				<p>Меню</p>
			</div>
		</nav>
		<nav class="phone_nav">
			<div class="nav_item">
				<i class="fas fa-bars"></i>
			</div>
			<div class="nav_item">
				<div class="red_squre"></div>
			</div>
			<div class="nav_item">
				<i class="fas fa-user"></i>
			</div>
			</nav>
	</div>
</template>

<script>
export default {

  name: 'Navbar',

  data () {
    return {

    }
  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
.navbar{
	width: 100vw;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #EFEFEF;
	padding: 10px 0;
}
	.nav{
		height: 3em;
		padding: 2px 0;
		display: flex;
		justify-content: space-between;
		-webkit-align-items: center;
		        align-items: center;
		width: 40%;
	}
	.nav > .nav_item{
		padding: 0 2%;
	}
	.phone_nav{
		display: none;
		justify-content: space-around;
		-webkit-align-items: center;
		        align-items: center;
	    width: 100%;
	}
	.phone_nav > .nav_item > i{
	.phone_nav > .nav_item > div{
	    padding: 0 25%;
	}
	    font-size: 20px;
	    cursor: pointer;
	    color: #575757;
	}
	.red_squre{
		background-color: #F00;
		width: 50px;
		height: 50px;
	}
	 @media only screen and (max-width: 764px) { 
        .nav{
            display: none
        }
		.phone_nav{
			display: flex;
			padding:5px;
        }
    }
</style>