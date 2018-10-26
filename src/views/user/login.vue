<template>
	<div class="user">
		<div class="login">
				<h1>用户登录</h1>
				<form class="user">
					<!--提示信息-->
					<div class="tit"><p>{{tit}}</p></div>
					<!--用户名密码-->
					<input type="text" name="user" v-model="phone" placeholder="请输入手机号">
					<input type="password" name="vCode" v-model="vCode"  autocomplete="false" placeholder="请输入验证码" style="width:60%; float:left;">
					<div @click="getVcode()" class="vcode" type="button" v-show="codeShow">获取验证码</div>
					<div class="vcode" type="button" v-show="!codeShow">{{second}}s后重新发送</div>
					<div class="btn clear" @click="login()">
						登录
					</div>
					<p class="forget">
						<span @click="goRegist()">还没有账号，现在去注册</span>
					</p>
				</form>
			</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				phone: '',
				vCode: '',
				tit: '',
				codeShow: true,
				second: 6,
				myCode: ''
			}
		},
		mounted () {
			this.getUser()
		},
		methods: {
			getUser () {
				let userName = window.localStorage.getItem('user')
				if (userName) {
					this.$router.push('/home')
				}
			},
			getVcode () {
				let regPhone = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
				if (this.phone === '' ) {
					this.tit = '手机号码不能为空'
				} else if (regPhone.test(this.phone)) {
					this.codeShow = false
					let timer = setInterval(() => {
						this.second --
						if (this.second == 0) {
							clearInterval(timer)
							this.codeShow = true
							this.second = 6
						}
					},1000)
					this.$http.post('/apis/sendCode', {
						phone: this.phone
					}).then((res) => {
						console.log(res.data.msg)
						this.myCode = res.data.msg
					})
				} else {
					this.tit = '手机号码不正确'
				}
			},
			login () {
				// console.log(typeof this.vCode , typeof this.myCode)
				if (parseInt(this.vCode) == parseInt(this.myCode)) {
					this.$http.post('/apis/login', {
						phone: this.phone,
						password: this.vCode
					}).then(res => {
						this.tit = res.data.msg
						if (res.data.code === 0) {
							window.localStorage.setItem('user', this.phone)
							setTimeout(() => {
								this.$router.push({
									path: '/home/recommend'
								})
							},2000)
						}
					}).catch(err => {
						this.tit = err
					})
				} else {
					this.tit = '验证码不正确'
				}
			},
			goRegist () {
				this.$router.push({
					'path': '/regist'
				})
			}
		}
	}
</script>
<style lang="scss">
	.user{
	width:90%;
	margin: 30px auto 60px auto;

	 input[type="text"], input[type="password"]{
	 	display: block;
		width:93%;
		height:40px;
		line-height:40px;
		border:solid 1px #eee;
		background: #F3F3F3;
		margin-bottom:2px;
		padding: 0 10px;
		margin:12px 0 30px 0;
	}
	.btn{
		display: block;
		width:100%;
		height:50px;
		line-height: 50px;
		background: #2A97FE;
		color:#fff;
		border:none;
		font-size:20px;
		text-align: center;
		margin-top:1rem;
		transition:all 1s;
	}
}
.forget{
	text-align: center;
	font-size:18px;
	padding-top:30px;
	span{
		color: #4795DF;
		}
	}

h1{
	text-align: center;
	font-size:20px;
	padding-top:40px;
}
.login,.regest{
	position: absolute;
	top:0;
	left:0;
	width:100%;
	background: #fff;
	height:100%;
}
.user p{
	color:red;
}
.tit{
	height:22px;

}
.clear{
  clear: both;
  overflow: hidden;
}
.vcode{
	margin-left:10px;
	margin-top:10px;
	width:100px;
	height:42px;
	line-height: 40px;
	display: inline-block;
	background: #999;
	text-align: center;
}
</style>