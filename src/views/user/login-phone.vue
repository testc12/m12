<template>
	<div class="user">
		<div class="login">
				<h1>用户登录</h1>
				<form class="user">
					<!--提示信息-->
					<div class="tit"><p>{{tit}}</p></div>
					<!--用户名密码-->
					<input type="text" name="user" v-model="phone" placeholder="请输入手机号">
					<input type="password" name="vCode" v-model="vCode"  autocomplete="false" placeholder="请输入验证码">
					<button @click="getVcode()">获取验证码</button>
					<div class="btn" @click="login()">
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
				tit: ''
			}
		},
		methods: {
			getVcode () {
				let regPhone = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
				if (regPhone.test(this.phone)) {
					alert(2)
				} else{
					alert(1)
				}
			},
			login () {
				this.$http.post('/apis/login', {
					phone: this.phone,
					password: this.vCode 
				}).then(res => {
					if (res.data.code == 1) {
						console.log('res', res)
						this.tit = res.data.msg
					} else if (res.data.code == 2) {
						this.tit = res.data.msg
					} else{
						this.tit = res.data.msg
					}
				}).catch(err => {
					console.log(err)
				})
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
}
.user p{
	color:red;
}
.tit{
	height:22px;

}
</style>