<template>
	<transition name="view">
	<div class="view">
			<div>
				<p @click="returnPage()"><<</p>
				<div>
					<p>{{musicListDatas.dissname}}</p>
					<img :src="musicListDatas.logo">
				</div>
				<scroll :datas = "musicListDat" class="scroll-height">
					<div>
						<!-- <div v-for="(m,index) in musicListDat"  class="list" @click="selectSong(m, index)">
							<p class="white-tit">{{m.songname}}</p>
							<p class="hui-content">{{m.albumname}}</p>
						</div> -->
					</div>
				</scroll>
			</div>
	
	</div>
	</transition>
</template>
<script type="text/javascript">
	import Scroll from '../base/scroll'
	import MusicList from '../base/music-list'
	import {mapAction} from 'vuex'
	export default {
		data () {
			return {
				musicListDatas: {},
				musicListDat: [],
				item: ''
			}
			
		},
		components: {
			MusicList,
			Scroll
		},
		mounted () {
			this.getHotData ()
			this.item = JSON.parse(window.localStorage.getItem('viewId'))
			console.log('kkkllll', this.item)
		},
		methods: {
			getHotData () {
				console.log(8)
				this.$http.get('/apis/songList/').then(res => {
				console.log('res', res.data.cdlist)
					this.musicListDatas = res.data.cdlist[0]
					this.musicListDat = res.data.cdlist[0].songlist
				})
			},
			returnPage () {
				this.$router.push({
					path: '/recommend'
				})
			},
			selectSong (item, index) {
				this.selectPlay({
					list: item,
					index
				})
			},
			// ...mapAction([
			// 	'selectPlay'
			// 	])
		}
	}
</script>
<style lang="scss" scoped>
	.view{
		position:absolute;
		top:0;
		width:100%;
		height: 100%;
		background:#000;
		z-index:1000;
		left:0;
	}
	.view p{
		line-height: 20px;
		margin:2px 10px;
		color:#fff;
	}
	.view p.hui-content{
		color: #999;
	}
	.view-enter,.view-leave-to{
		transform: translate3D(100%, 0, 0);
	}
	.view-enter-active, .view-leave-active{
		transition: all 1s;
	}
	.list{
		margin:15px 0;
	}
	.scroll-height{
		height:300px;
		overflow: hidden;
	}
</style>