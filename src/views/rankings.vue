<template>
	<div>
		<div class="rank-main">
		    <dl class="rankings" v-for="r in rank">
				<dt><img :src="r.picUrl"></dt>
				<dd>
					<p v-for="(s,index) in r.songList">{{index}}{{s.songname}}</p>
					
				</dd>
			</dl>
			
		</div>
	</div>
</template>	
<script type="text/javascript">
	export default {
		data () {
			return {
				rank: []
			}
		},
		mounted () {
			this.getData()	
		},
		methods: {
			getData () {
				this.$http.get('/apis/rankings').then(res => {
					this.rank = res.data.data.topList
					console.log(this.rank)
				})
			}
		}
	}
</script>
<style type="text/css">
	.rank-main{
		position: absolute;
		top:130px;
		width:100%;
		height:100%;
	}
	.rankings{
		background: #333;
		/*display: flex;*/
		/*display: table;*/
		margin-bottom:10px;
		clear:both;
		overflow: hidden;
		color:#999;
	}
	.rankings dt{
		float:left;
		width:150px;
		height:150px;

		background:#eee;
		/*vertical-align: middle;*/
		/*display: table-cell;*/
		
		text-align: center;
	}
	.rankings dd {
		/*float:left;*/
		margin-left:170px;
		line-height: 33px;
	}
	.rankings img{
		width:100%;
		height:100%;
	}
</style>