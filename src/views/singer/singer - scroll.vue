<template>
	<div>
		<m-header></m-header>
		<scroll :datas="singer" class="singer" >
			<div>
				<div  v-for="(s, index) in singer" @click="goView(s, index)">
					<h2>{{s.title}}</h2>
					<dl v-for="ss in s.items">
						<dt><img v-lazy="ss.avatar"></dt>
						<dd>{{ss.name}}</dd>
					</dl>
				</div>
			</div> 
		</scroll>
		<scroll :datas="singer" class="sortTitle" >
			<div class="">
				<span v-for="a in singer">{{a.title}}</span>
			</div>
		</scroll>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import MHeader from '../base/m-header'
	import Scroll from '../base/scroll'
	export default {
		data () {
			return {
				singer: [],
				singerHot: ''
			}
		},
		components: {
			Scroll,
			MHeader
		},
		created () {
			
		},
		mounted () {
			this.$nextTick(() => {
				this.getSinger()
			})
		},
		methods: {
			getSinger () {
				this.$http.get('/apis/singer').then(res => {
					// console.log('res111', res.data.data.list)
					this.singer = this._normalLizeSinger(res.data.data.list)
					console.log('222', this.singer)
					
				})
			},
			_normalLizeSinger (list) {
				let map = {
					hot: {
						title: '热门',
						items: []
					}
				}
				console.log('hot1', map)
				list.forEach((item, index) => {
					if (index <= 10) {
						// console.log(index)
						map.hot.items.push({
							'name': item.Fsinger_name,
							'id': item.Fsinger_id,
							'avatar':  `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
						})
						// console.log(map)
					}


					const key = item.Findex
					console.log('key', key)
					if (!map[key]) {
						map[key] = {
							'title': key,
							items: []
						}
					}
					map[key].items.push({
						'name': item.Fsinger_name,
						'id': item.Fsinger_id,
						'avatar': `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
					})
				})
				
				let ret = []
		        let hot = []
		        for (let key in map) {
		          let val = map[key]
		          console.log('val999', val)
		          if (val.title.match(/[a-zA-Z]/)) {
		          	console.log('ret', ret)
		            ret.push(val)

		        
		          } else if (val.title === '热门') {
		            hot.push(val)
		          }
		        }
		        ret.sort((a, b) => {
		          return a.title.charCodeAt() - b.title.charCodeAt()
		        })

		        return hot.concat(ret)
			},
			goView (item, index) {
				this.$router.push({
					path: `/singer/${item.Fsinger_id}`
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.sortTitle{
		position: absolute;
		right:0;
		top:8rem;
		background: #000;
		height:510px;
		// overflow: hidden;
		width:30px;
		overflow: hidden;
		border-radius:20px;
		padding:20px 0px 10px 2px;
		span{
			display: block;
			line-height: 22px;
			color:#fff;
			text-align: center;
		    width: 20px;
		    overflow: hidden;
		    letter-spacing: 5px;
		    white-space: nowrap;
		    padding-left: 5px;
		    font-size:14px;
		}
	}
	.singer{
		position: absolute;
		top:150px;
		width:100%;
		height:532px!important;
		overflow: hidden;
		color:#fff;
		h2{
			background: #363636;
			height:30px;
			line-height: 30px;
			padding-left:1rem;
		}
	}
	.singer dl{
		display: flex;
		margin:10px 0;
		padding-left:1rem;
	}
	.singer dt{
		flex:2; 
		img{
			width:60px;
			border-radius:50%;
		}
	}
	.singer dd{
		flex:4;
		padding-top:1rem;
		
	}
	.singerType{
		height:200px;
		overflow: hidden;
	}
</style>
