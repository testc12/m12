<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in datas">
					<img :src="item.picUrl"  :onerror="errpic">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	export default {
		data () {
			return {
				errpic: 'this.src="' + require('../assets/imgs/pic.png') + '"'
			}
		},
		props: {
			datas: {
				type: Array,
				default: () => []
			}
		},
		created () {
			
		},
		mounted () {
			this.$nextTick(function(){
				var mySwiper = new Swiper ('.swiper-container', {
			    loop: true, 
			    autoplay: 3000,
			    pagination: '.swiper-pagination',
		     	observer:true
 		 		})   
			})
		}
	}
</script>
<style type="text/css">
	@import 'swiper/dist/css/swiper.min.css';
	.swiper-wrapper{
		height:200px;
	}
	.swiper-wrapper img{
		height:100%;
	}
	.swiper-pagination-bullet{
    	width:10px;
    	height: 10px;
    	background: #fff;
    	opacity: .6;
    	border-radius:50%;
    }
    .swiper-pagination-bullet-active{
    	width:20px;
    	transition: all .1s;
    	border-radius:10px;
    	display: inline-block;
    	opacity: 1
    }
    
</style>