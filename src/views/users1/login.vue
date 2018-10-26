<template>
	<div class="user">
		<h2>用户登录</h2>
		<form>
			<div class="tit"><span  v-show="tit">{{tit}}</span></div>
			<input type="text" name="" placeholder="用户名" v-model="user">{{user}}
			<input type="password" name="" placeholder="密码" v-model="passwd" autocomplete="false">
			<div class="btn" @click="login()">登录</div>
			<div><router-link to="regist">现在还没账户，马上去注册</router-link></div>
		</form>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				tit: false,
				user: '',
				passwd: ''
			}
		},
		methods: {
			login () {
				this.$http.post('/apis/login', {
					'userName': this.user,
					'passWord': this.passwd
				}).then( res => {
					if(res.data.code === 0) {
						this.tit = res.data.msg
					}
				}).catch(err => {
					console.log('', err)
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/users.scss'
</style>