<template>
	<div class="bottom_modal">
		<div class="img f_center">
			<img src="https://t4.ftcdn.net/jpg/00/80/54/85/240_F_80548564_ePiSWip0h4ucEf9VcnwLNO0hkn9glSDF.jpg" alt="">
		</div>
		<div class="desk">
			<div @click="hide()" class="f close">
				<i class="fas fa-times"></i>
			</div>
			<div class="about">
				<div>
					<h3 class="name">Плов<b class="mass"> 256 г.</b></h3>
				</div>
				<div class="text">
					<p class="title">Описание</p>
					<p class="subtitle">Описание Описание Описание Описание Описание Описание Описание Описание Описание </p>
				</div>
				<div class="text">
					<p class="title">Состав</p>
					<p class="subtitle">Описание Описание Описание Описание Описание Описание Описание Описание Описание </p>
				</div>
				<div class="text">
					<p class="title">Состав</p>
					<div class="food_price">
						<div>
							<h3><b>34</b></h3>
							<p class="title">белки</p>
						</div>
						<div>
							<h3><b>34</b></h3>
							<p class="title">белки</p>
						</div>
						<div>
							<h3><b>34</b></h3>
							<p class="title">белки</p>
						</div>
						<div>
							<h3><b>34</b></h3>
							<p class="title">белки</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'BottomModal',
  props: {
	  	dish: {
		  	type: Object,
		  	required: true
	  }
  },
  mounted(){
  	function removeStyle() {
  		document.querySelector(".v--modal-box.v--modal").removeAttribute('style');
  	}
  },
  methods: {
	  hide () {
        this.$modal.hide('hi');
      }

    },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>

	.bottom_modal{
		width: 100%;
		height: 90%;
		background-color: #FFF;
		z-index: 1;
		display: flex;
	}
	.img{
		height: 100%;
		width: 60%;
	}
	.desk{
		height: 100%;
		width: 40%;
		background-color: #E8EAED;
	}
	.close{
		width: 100%;
		height: 20%;
		justify-content: flex-end;
	}
	.close > i{
		font-size: 2rem;
		color: #c9c9c9;
		padding: 20px 30px;
		cursor: pointer;
	}
	.about{
		padding: 10% 20%;
		
	}
	.mass{
		color: #d8d8d8;
	}
	.food_price{
		display: flex;
		justify-content: space-between;
	}
	.text > .title{
		color: #d8d8d8;
		width: 100%;
		padding-top: 30px;
	}
	.text > .title{
		padding-top: 10px;
		width: 100%;
		
	}
	@media only screen and (max-width: 764px) { 
        .bottom_modal{
        	flex-direction: column;
        }
        .img{
			height: 50%;
			width: 100%;
		}
		.desk{
			height: 100%;
			width: 100%;
			background-color: #E8EAED;
		}
		.modal_overlay {
		    width: 100%;
		    height: 250vh;
		}
		.close{
			position: absolute;
			top: 0%;
		}
    }

</style>