<template>
	<transition name="view">
	<div class="view">
			
			<views :songListList=songListList :title="songTitle" :songSrc="songSrc">
				<!-- <div slot="title">
					<img v-lazy="songList.logo">
					<h1>{{songList.dissname}}</h1>
				</div> -->
			</views>	
			
			<!-- <scroll :datas="songListList">
				<div class="hot-song">
					<dl v-for="(item,index) in songListList" @click="goList(item)">
						<dd>
							<h2>{{item.songorig}}</h2>
							<p>{{item.songname}}</p>
						</dd>
					</dl>
				</div>
			</scroll> -->
		
	</div>
	</transition>
</template>
<script type="text/javascript">
	import Views from '../components/views'
	
	export default {
		name: 'recommend-view',
		data () {
			return {
				songList: [],
				songListList: [],
				songSrc: '',
				songTitle: ''
			}
		},
		components: {
			Views,
			// Scroll
		},
		created () {
			this.$nextTick(() => {this.getDatas()})
		},
		methods: {
			getDatas () {
				let id =this.$route.query.dissid
				console.log(id)
				this.$http.get('/apis/songList?dissid='+id).then(res => {
					this.songList = res.data.cdlist[0]
					this.songListList = res.data.cdlist[0].songlist
					this.songTitle = this.songListList.dissname
					this.songSrc = this.songListList.logo

					console.log('yyyyyd',this.songList)
				})
			},
			goBack () {
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="scss" scoped="">
@import '../assets/scss/list.scss';
	.view{
		position: absolute;
		top:0;
		width:100%;
		height:100%;
		background: #000;
		overflow: hidden;
		z-index: 100;
	}
	.view-enter,.view-leave-to{
		transform: translate3D(100%, 0, 0);
	}
	.view-enter-active, .view-leave-active{
		transition: all .5s;
	}
	.return{
		position: absolute;
		top:2rem;
		left:2rem;
		color:#fff;
		z-index: 2;
	}
	.view-img{
		position: relative;
		height:20.875rem;
		overflow: hidden;
		.mask{
			position: absolute;
			width:100%;
			height:100%;
			background: #000;
			opacity: .4
		}
		img{
			width:100%;
		}
		h1{
			position: absolute;
			top:2rem;
			left:50%;
			width:64%;
			transform: translate(-50%);
			font-size:1.425rem;
			font-weight:bold;
			color:#fff;
			padding:0 1rem;
			white-space:nowrap;
			overflow: hidden;
			text-overflow: ellipsis;

		}
		.s-play{
			color: yellow;
			border:solid 1px yellow;
			padding:.5rem 0;
			width:50%;
			border-radius: 30px;
			text-align: center;
			position: absolute;
			bottom:2rem;
			left:50%;
			transform: translate(-50%);
			font-size:1.25rem;

		}
	}
	[v-clock]{
		display: none;
	}
</style>