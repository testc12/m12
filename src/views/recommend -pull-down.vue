<template>
	<div>
		<m-header></m-header>
		<swipers :datas = "recommend" class="mt-top">
		</swipers>
		<h2 class="title">热门歌单推荐</h2>
		<!-- <music-list :musicList="musicListDat"></music-list> -->
		<scroll :datas='musicListDat' :pullDown="pulldown" :pullUp="pullup" @pulldown="getHotData" @pullup="goPullup" class="scroll-height">
			<list :datas="musicListDat" @goList="goList">
				<p v-show="downText"  class="scroll-pull-up" slot="p1">{{downText}}</p>
				<p v-show="upText" class="scroll-pull" slot="p2">
				{{upText}}</p>
			</list>
		</scroll>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	import Swipers from '../base/swipers'
	import MusicList from '../base/music-list'
	import scroll from '../base/scroll'
	import MHeader from '../base/m-header'
	import List from '../components/list'
	export default {
		data () {
			return {
				recommend: [],
				musicListDat: [],
				errpic: 'this.src="' + require('../assets/imgs/pic.png') + '"',
				pulldown: true,
				pullup: true,
				upText: '',
				downText: ''
			}
		},
		components: {
			Swipers,
			// MusicList
			scroll,
			MHeader,
			List
		},
		// created () {
		// 	// this.getrecommend()
		// },
		mounted () {
			this.getrecommend()
			this.getHotData()
		},
		methods: {
			getrecommend () {
				this.$http.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1538199110314')
				.then(res => {
					if(res) {
						this.recommend = res.data.data.slider
						console.log('aa', this.recommend)
					}
				})
			},
			//热门歌曲
			getHotData (msg) {
				let _this = this
				this.$http.get('/apis/hotdata/').then(res => {
					console.log('uuu', res.data.data.list)
					this.musicListDat = res.data.data.list
				})
				this.downText = msg
				setTimeout(() => {
					this.downText = ''
					_this.musicListDat = this.musicListDat
				}, 3000)
			},
			// pullup
			goPullup (msg) {
				this.upText = msg
				
				setTimeout(() => {
					this.upText = ''
					this.musicListDat = this.musicListDat.concat(this.musicListDat)
				}, 2000)
			},
			goList (id) {
				this.$router.push({
					path: `/recommend/${id.dissid}`,
					// query: {
					// 	'dissid': id.dissid
					// }
				})
			}

		}
	}
</script>
<style lang="scss" scoped="">
	.mt-top{
		padding-top:110px;
	}
	.title{
		color:yellow;
		font-size:1.25rem;
		padding:1rem 1rem 0 1rem;
		text-align: center;
	}
	.scroll-pull,.scroll-pull-up{
		width:100%;
		padding:10px;
		text-align: center;
		color:#fff;
		opacity: .6
	}
	.scroll-pull{
		position: absolute;
		bottom:0;
	}
	.scroll-pull-up{
		position: absolute;
		top:0;
	}
	.scroll-height{
		height:300px;
	}
</style>
