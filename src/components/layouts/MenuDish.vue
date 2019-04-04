<template>
    <div>
        <div class="title"><h2>Популярные блюда</h2></div>
        <div class="title2"><h1>Популярные</h1></div>
        <div class="menu_dish">
        	<div v-for="(dish, index) in dishes">
        		<dish class="dish" :dish="dishes[index]"/>
        	</div>
        </div>
        <modal class="modal" name="hi">
            <bottom-modal/>
        </modal>
    </div>
</template>

<script>
import BottomModal from './modals/BottomModal';
import Dish from './Dish';
import {mapGetters} from 'vuex';


export default {

  name: 'MenuDish',
  components:{
  	Dish,
    BottomModal
  },

  data () {
    return {

    }
  },
  computed: {
        ...mapGetters(["dishes"]),
    },
}
</script>
<style type="text/css">
    .v--modal.v--modal{
        top: 10% !important;
        width: 100% !important;
        height: 100% !important;
        bottom: 0 !important;
        left: 0 !important;
        display: flex !important;
        position: absolute !important;
        bottom: 0px !important;
        transition: 1s;
    }
</style>
<style lang="scss" scoped>

    .title{
        padding: 2% 2%;
    }
    .title2{
        display: none;
    }
	.menu_dish{
		display: flex;
-webkit-flex-direction: row;
    -ms-flex-direction: row;
        flex-direction: row;
-webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
	}
    .dish{
        cursor: pointer
    }
	.menu_dish > div{
		width: 16%;
        padding: 1% 4%;
	}
    .menu_dish > div:hover ~ .amount{
        color: #F22C2C;
    }
    .menu_dish > div:hover ~ .fa-minus{
        color: #333333;
    }
    .modal_overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #00000050;
    }
    @media only screen and (max-width: 375px) { 
        .menu_dish > div{
            width: 100% !important;
        }
        .title2{
            display: block;
            font-size: 3vw;
            padding: 2% 4%;
        }
        .title{
            display: none  !important;
        }

    }
    @media only screen and (max-width: 991px) { 
        .menu_dish > div{
            width: 25.3%;
        }
    }
    @media only screen and (max-width: 764px) { 
        .menu_dish > div{
            width: 42%;
        }
        .title{
            font-size: 3vw;
            padding: 2% 4%;
        }
    }

</style>