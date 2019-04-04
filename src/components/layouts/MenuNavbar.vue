<template>
	<div>
		<nav>
		    <ul>
		    	<div class="navbar_overlay"></div>
		        <li>Популярное</li>
		        <li>Горячее</li>
		        <li>Гарниры</li>
		        <li>Выпечка</li>
		        <li>Ничего</li>
		        <li>Ничего</li>
		        <li>Ничего</li>
		        <li>Ничего</li>
		        <li>Ничего</li>
		        <li>Ничего</li>
		        <li>Ничего</li>
		        <div class="border-container">
		        	<div class="border"></div>
		        </div>
		    </ul>
		</nav>
	</div>
</template>

<script>
export default {

  name: 'MenuNavbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	nav {
	    text-align:center;
		width: 100%;
	}
	.navbar_overlay{
		background: linear-gradient(to left, #ffffff 10%, #ffffff00);
		position: absolute;
		margin: 0px 1% 1% 70%;
		width: 30%;
		height: 98%;
	}
	ul {
	    display:inline-flex;
	    flex-wrap: nowrap;
		width: 100%;
	    list-style:none;
	    margin:0;
	    padding:0;
	    position:relative;
	    font-size:0px;
	    overflow-x:scroll;
	    overflow:hidden;
	    overflow-style: none;
	}
	ul li {
	    display:inline-block;
	    padding: 20px 1% 20px;
	    max-width: 10%;
	    min-width: 10%;
	    text-align:center;
	    font-size:15px;
	    cursor:pointer;
	    border-bottom: 1px solid #E8EAED;
	}
	div.border-container{
	    position:absolute;
	    width:12%;
	    left:0%;
	    bottom:0;
	    transition: .5s linear;
	    display: flex;
	    justify-content: center;
	    height:2px;
	}
	div.border {
	    background:red;
	    width: 17%;
	    height: 100%;
	}

	@for $i from 1 through 12 {
	  li:nth-child(#{$i}):hover ~ div.border-container {
	    left: 12% * $i - 24%;
	  }
	  li:nth-child(#{$i}):active ~ div.border-container {
	    left: 12% * $i - 24%;
	  }
	}
	@media only screen and (max-width: 764px) { 
		nav {
			display: none
		}
	}
</style>