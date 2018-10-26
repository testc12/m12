<template>
	<div>
		<m-header></m-header>
		<div ref="singer" class="singer" >
			<div>
				<div  v-for="(s, index) in singer" @click="goView(s, index)" class="singer-list">
					<h2>{{s.title}}</h2>
					<dl v-for="ss in s.items">
						<dt><img v-lazy="ss.avatar"></dt>
						<dd>{{ss.name}}</dd>
					</dl>
				</div>
			</div> 
		</div>
		<div ref="singerType" class="sortTitle" >
			<div class="">
				<span v-for="(a, index) in singer" :class="{current:currentIndex === index}" @click="selectMenu(index, $event)">{{a.title}}

				</span>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import MHeader from '../base/m-header'
	// import Scroll from '../base/scroll'
	import BScroll from 'better-scroll'
	export default {
		data () {
			return {
				singer: [],
				singerHot: '',
				listHeight: [],
				currentIndex: 0
			}
		},
		components: {
			// Scroll,
			MHeader
		},
		created () {

			this.getSinger()
			
		},
		mounted () {
			this.$nextTick(() => {
				this._initScroll()
				
				this._calculateHeight()
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
			},
			// 初始化
			_initScroll () {
				this.sType = new BScroll(this.$refs.singerType, {
					click: true
				})
				this.singerScroll = new BScroll(this.$refs.singer, {
					probeType: 3,
					click: true
				})
				this.singerScroll.on('scroll', (pos) => {
					this.scrollY = Math.abs(Math.round(pos.y))
					console.log(pos)
				})
			},
			// 计算
			// _calculateHeight() {
		 //        let singerList = this.$refs.singer.getElementsByClassName("singer-list");
		 //        console.log(singerList.length, 'yyyeeee')
		 //        let height = 0;
		 //        this.listHeight.push(height);
		        
		 //        for (let i=0; i < singerList.length; i++) {
		 //        	alert(0)
		 //          let item = singerList[i];
		 //          height += item.clientHeight;
		 //          this.listHeight.push(height);
		 //          console.log(this.listHeight, 'yyy')
		 //        }
		 //        console.log(this.listHeight, 'yyy11')
		 //    },
		    selectMenu(index, event) {
	    		this.currentIndex = index
	            if(!event._constructed) {
	              return ;
	            }
	            let singerList = this.$refs.singer.getElementsByClassName("singer-list");
	            let el = singerList[index];
	            this.singerScroll.scrollToElement(el,300);
	          }
		},
		// 联动
		// computed: {
		// 	currentIndex () {
		// 		console.log(this.listHeight, 'qqq')
		// 		for (let i = 0; i < this.listHeight.length; i++) {
		// 			let height1 = this.listHeight[i]
		// 			let height2 = this.listHeight[i]
		// 			if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
		// 				return i
		// 			}
		// 		}
		// 		return 0
		// 	}
		// }
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
			height: 60px;
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
	.sortTitle span.current{
		color: red;
	}
</style>
