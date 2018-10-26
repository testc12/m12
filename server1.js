const express=require("express");    //引入express模块
const app=express(); 
const fs=require("fs");              //引入fs模块
// const url=require("url");

var bodyParser = require('body-parser')               //实例化express

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(8000)    // 指定端口;
app.get('/',function(req, res){      //匹配主页的get请求
    res.send("首页")
})

//登录
app.post("/login", function(req,res){      //匹配用户列表的get请求
	if(req.body.user == '' || req.body.passwd =='') {
		res.send({
			'code': 1,
			'msg': '用户名或密码不能为空'
		})
	} else if(req.body.user=='admin' && req.body.passwd=='0000') {
		res.send({
			'code':0,
			'msg': '登录成功'
		})
	} else {
		res.send({
			'code': 2,
			'msg': '用户名或密码不正确'
		})
	}

})


app.post('/regist', function(req, res){
	if(!req.body.userName){
		res.send({
			'code': 1,
			'msg': '用户命不能为空'
		})
	} else if (!req.body.passwd1) {
		res.send({
			'code': 2,
			'msg': '密码不能为空'
		})
	} else if(req.body.passwd1 !== req.body.passwd2) {
		res.send({
			'code': 3,
			'msg': '两次密码不一致'
		})
	} else{
		res.send({
			'code': 0,
			'msg': '注册成功'
		})
	}
})


app.get("/hotData",function(req,res){      //匹配用户列表的get请求
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

app.get("/songList", function(req, res) {
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