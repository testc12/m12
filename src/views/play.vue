<template>
	<div class="player">
		<div class="nomal-player" v-show="fullScreen">
			<div class="blur">
				<img src="">
			</div>
			<h2>
				违背的青春
				<p>薛之谦</p>
			</h2>
			<div class="per83">
				<swipers>
					<div class="swiper-slide">
						<img src="aaa">
						<p>不能让的</p>
					</div>
					<div class="swiper-slide">
						<div class="black">
							<p>不能让的</p>	
							<p>不能让的</p>
							<p>不能让的</p>
						</div>
					</div>
				</swipers>
			</div>
			<div class="play-time">
				<span class="icon iconfont icon-bofang">1</span>
				<span class="icon iconfont icon-xiayiqu">2</span>
				<span class="icon iconfont icon-shangyiqu">3</span>
			</div>
			<div class="play-control">
				<span class="icon iconfont icon-shangyiqu"></span>
				<span class="icon iconfont icon-bofang"></span>
				<span class="icon iconfont icon-xiayiqu"></span>			
				<span class="icon iconfont icon-danquxunhuan"></span>
				<span class="icon iconfont icon-danquxunhuan"></span>
			</div>
		</div>
		<div class="mini-player" v-show="!fullScreen">
			
		</div>
	</div>
</template>
<script type="text/javascript">
	import Swipers from '../base/swipers'
	import {mapGetters} from 'vuex'
	export default {
		data () {
			return{
				// viewShow: false
			}
		},
		components: {
			Swipers
		},
		computed: {
			...mapGetters([
				'fullScreen',
				'playList'
				])
		}
	}
</script>
<style lang="scss" scoped>
	@import '../assets/font/iconfont.css';
	.player{
		position: absolute;
		top:0;
		z-index: 110;
		left:0;
		background: #000;
		color:#fff;
		width:100%;
		height:100%;
		h2{
			font-size:20px;
			text-align: center;
		}
		.blur{
			position: absolute;
		}
		.blur img{
			filter: blur(20px)
		}
	}
	.swiper-container{
		height:420px!important;
	}
	.per83{
		height:83%
	}
	.play-control{
		display: flex;
		
		text-align: center;
		span{
			 flex:1;
			 font-size:30px;
		}
	}
	.black{
		color:#000;
	}
</style>