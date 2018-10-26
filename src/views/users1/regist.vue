<template>
	<div>
		<transition name="regest">	
			<div class="regest">
				<h1>用户注册</h1>
				<form class="user">
						<div class="tit">
							<p v-show="successTit?true:false">{{successTit}}</p>
						</div>
						<input type="text" name="phone1" v-model="userName" placeholder="用户名">
						<input type="password" name="phone1" v-model="passwd1" placeholder="密码">
						<input type="password" name="phone1" v-model="passwd2" placeholder="确认密码">
					<div>
						<div class="btn" @click="regist">
							注册
						</div>
					</div>
					<p class="forget">
						<span @click="goLogin()">已有账号，去登录</span>
					</p>
				</form>
			</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
	export default{
		data () {
			return {
				userName: '',
				passwd1: '',
				passwd2: '',
				tit: false,
				
				successTit: ''
			}
		},
		mounted () {
			
		},
		
		methods: {
			goLogin () {
				this.$router.push({
					path: '/login'
				})
			},
			// 注册
			regist () {
				console.log(9)
				let params = {
					'userName': this.userName,
					'passwd1': this.passwd1,
					'passwd2': this.passwd2
				}
				this.$http.post('/apis/regist', params).then(res => {
					console.log('aaaa',res)
					let _this = this
					if(res.data.code == 1) {
						_this.successTit = res.data.msg
					} else if(res.data.code == 2){
						_this.successTit = res.data.msg

					} else if(res.data.code == 3){
						_this.successTit = res.data.msg

					} else {
						_this.successTit = res.data.msg
						setTimeout(function() {
							_this.$router.push({
								path: '/login'
							})
						}, 1000)
						
					}
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/user.scss';
.regest-enter,.regest-leave-to{
	transform: translate3D(-100%, 0, 0)
}
.regest-enter-active,.regest-leave-active{
	transition: all 1s;
}
</style>