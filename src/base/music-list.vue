<template>
	<div>
		<scroll  class="scroll-wrapper" :datas = 'musicList'>
			<div>
				<dl class="music-list" v-for="(item, index) in musicList" @click="goView(index, item)">
					<dt>
						<img v-lazy="item.imgurl">
					</dt>
					<dd>
						<div>
							<p class="white-tit">{{item.creator.name}}</p>
							<p class="hui-content">{{item.dissname}}</p>
						</div>
					</dd>
				</dl>
			</div>
		</scroll>

	</div>
</template>
<script type="text/javascript">
	import Scroll from './scroll'

	export default {
		props: {
			musicList: {
				type: Array,
				default: []
			}
		},
		components: {
			Scroll
		},
		mounted () {
			
		},
		methods: {
			goView (index, item) {
				window.localStorage.setItem('viewId', JSON.stringify(item))
				console.log(item)
				this.$router.push({
					path: `/recommend/${item.dissid}`
				})

			}
		}
	}
</script>
<style type="text/css">
	.scroll-wrapper{
		height:400px;
		overflow: hidden;
	}
	.music-list{
		display: flex;
		color:#fff;
	}
	.music-list dt{
		float:left;
		flex:1;
		padding:0px 20px 10px 0;
	}
	.music-list dt img{
		width:100%;
	}
	.music-list dd{
		float:left;
		flex:4;
		line-height:24px;
	}

</style>