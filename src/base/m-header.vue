<template>
	<header class="header">
		<div class="logo">
			<img src="../assets/imgs/logo.gif">
			<div class="users">
				<span>您好：{{user}}</span> 
				<span @click="quit()">退出登录</span>
				<!-- <span class="icon iconfont icon-yonghu f26"></span> -->
			</div>
		</div>
		<ul class="tab">
			<li>
				<router-link to="/home/recommend">推荐</router-link>
			</li>
			<li>
				<router-link to="/home/singer">歌手</router-link>
			</li>
			<li>
				<router-link to="/home/rankings">排行</router-link>
			</li>
			<li>
				<router-link to="/home/search">搜索</router-link>
			</li>
		</ul>
	</header>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				user: 'qqqq'
			}
		},
		mounted () {
			this.user = window.localStorage.getItem('user')
			console.log(this.user)
		},
		methods: {
			quit () {
				// localStorage.clear()
				localStorage.removeItem('user')
				setTimeout(() => {
					this.$router.push('/login')	
				})
			}
		}
	}
</script>
<style lang="scss" scoped="">
@import '../assets/font/iconfont.css';
	.iconfont{
		font-size:22px;
		color:yellow;
		line-height: 40px;
	}
	.header{
		padding: 1%;
		position: fixed;
		width:98%;
		height:106px;
		background: #333;
		z-index: 10
	}
	.logo{
		clear:both;
		overflow: hidden;
		height: 40px;
	}
	.tab{
		display: flex;
	}
	.logo{
		padding:10px;
	}

	.logo img{
		width:136px;
		float:left;
	}
	.users{
		float:right;
		line-height: 40px;
		color:#fff;
		width:48%;
		font-size:12px;
	}
	// .user span.phone{
	// 	padding-right:1rem;
	// }
	.tab{
		margin-top:10px;
		margin-bottom:10px;
		display: flex;
		li{
			flex: 1;
			text-align: center;
			a{
				color:#ccc;
			}
			.router-link-active{
				color: yellow;
			}
		}
	}
</style>