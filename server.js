const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.listen(8000)

app.get('/',function(req, res){      //匹配主页的get请求
    res.send("首页")
})
app.get('/rankings', function(req, res) {
	fs.readFile('./src/common/ranking.json', 'utf-8', function(err, data) {
		if(err) {
			res.send('无法读取')
		} else {
			res.send(JSON.parse(data))
		}
	})
})
app.get('/singer', function(req, res) {
	fs.readFile('./src/common/singer.json', 'utf-8', function(err, data) {
		if(err) {
			res.send('无法读取数据')
		} else {
			if (JSON.parse(data).length == 0) {
				res.send('暂无数据')
			} else {
				res.send(JSON.parse(data))
			}
		}
	})
})
//登录
app.post("/login", function(req, res){      //匹配用户列表的get请求
	if(req.body.phone === '' || req.body.password === ''){
		res.send({
			'code': 1,
			'msg': '用户名或密码不能为空'
		})
	} else if (req.body.phone !== '18610929561' || req.body.password !== '123456') {
		res.send({
			'code': 2,
			'msg': '用户名或密码错误'
		})
	} else {
		res.send({
			'code': 0,
			'msg': '登录成功'
		})
	}
})
// 注册
app.post('/regist', function(req, res) {
	if(req.body.userName === '') {
		res.send({
			code: 1,
			msg: '用户命不能为空'
		})
	} else if (req.body.password1 === '') {
		res.send ({
			code: 2,
			msg: '密码不能为空'
		})
	} else if (req.body.password1 !== req.body.password2) {
		res.send ({
			code: 3,
			msg: '不一致'
		})
	} else {
		res.send ({
			code: 0,
			msg: '成功'
		})
	}
})

// 发送验证码
app.post("/sendCode", function(req, res) {
	let reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
	if(reg.test(req.body.phone)) {
		res.send({
			code: 0,
			msg: '123456'
		})
	}
})

// 热门歌单
app.get("/hotData",function(req, res){      //匹配用户列表的get请求
	fs.readFile('./src/common/hotDatas.json','utf-8',function(err,data){    //读取json文件
		if(err) {
			res.send('文件读取失败')
		} else {
			if(JSON.parse(data).length = 0) {
				res.send('暂无数据')
			} else {
				res.send(JSON.parse(data))
			}
		}
	})//结束请求
})
// 推荐详情页面歌曲列表
app.get("/songList", function(req, res) {
	console.log(req.query.dissid)
	if(req.query.dissid){
		fs.readFile('./src/common/recommondSong.json', 'utf-8', function (err, data) {
			if (err) {
				res.send('文件读取失败')
			} else {
				if (JSON.parse(data).length = 0) {
					res.send('暂无数据')
				} else {
					res.send(JSON.parse(data))
				}
			}
		})
	}
})
//歌手
app.get('/singer', function(req, res) {
	fs.readFile('./src/common/singer.json', 'utf-8', function (err, data) {
		if (err) {
			res.send('文件读取失败')
		} else {
			if (JSON.parse(data).length = 0) {
				res.send('暂无数据')
			} else {
				res.send(JSON.parse(data))
			}
		}
	})
})
//歌手详情
//歌手

app.get('/singerView', function(req, res) {
	fs.readFile('./src/common/singerView.json', 'utf-8', function(err, data) {
		if(err) {
			res.send('文件读取失败')
		} else {
			if (JSON.parse(data).length = 0) {
				res.send('暂无数据')
			} else {
				res.send(JSON.parse(data))
			}
		}
	})
})