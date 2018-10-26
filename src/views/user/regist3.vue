<template>
    <div>
        <transition name="regest">  
            <div class="regest">
                <h1>用户注册</h1>
                <form class="user">
                  <!--注释-->
                    <div class="tit">
                        <p v-show="reg">{{reg}}</p>
                        <!-- <p v-show="reg">{{reg}}</p> -->
                    </div>
                  <!--用户名密码-->
                    <input type="text" name="phone1" v-model="userName" placeholder="用户名" @blur="phone()">
                    <input type="password" name="phone1" v-model="passwd1" placeholder="密码" @blur="passwdReg()">
                    <input type="password" name="phone1" v-model="passwd2" placeholder="确认密码">
                    <!--性别-->
                    <!-- <div class="loveType">
                      <span>性别</span>
                      <label><input type="radio" value="0" name="seg" v-model="seg" checked="checked"> 男</label>
                      <label><input type="radio" name="seg" value="1" v-model="seg"> 女</label>
                    </div> -->
                  <!--爱好-->
                   <!--  <div class="loveType">
                      <div class="m10"><span>爱好</span> <label>全选 <input type="checkbox" name="" :checked="loveType.length==2" @click="selectAll($event)"></label>
                      </div>
                      <div>
                        <label><input type="checkbox" name="loveType" value="1" v-model="loveType"> 旅游</label>
                        <label><input type="checkbox" name="loveType" value="2" v-model="loveType" checked="checked"> 睡觉</label>
                      </div>
                      <br/>
                      
                    </div> -->
                  <!--兴趣-->
                   <!--  <div class="loveType">
                      <div class="m10"><span>兴趣</span> <label>全选 <input type="checkbox" name="" :checked="xType.length==xingqu.length" @click="selectAll2($event, xingqu)" ></label>
                      </div>
                      <div ref="box">
                        <label v-for="x in xingqu"><input type="checkbox" name="xType" :value="x.val" v-model="xType"> {{x.text}}</label>
                      </div>
                      <br/>
                    </div> -->
                  <!--所在城市-->
                    <!-- <div class="loveType">
                      <div class="m10"><span>所在城市</span> 
                      </div>
                      <div>
                        <select v-model="city">
                          <option value="1">河南</option>
                          <option value="2">河北</option>
                          <option value="3">山东</option>
                          <option value="4">山西</option>
                        </select>
                      </div>
                      <br/>
                    </div> -->
                  <!--阅读条款-->
                    <label class="read"><input type="checkbox" name=""  v-model="read"> 条款已阅读
                    </label>
                    
                    <div>
                        <button type="button" class="btn" @click="regist" :class="{disabled: !read?disabled:''}" :disabled="!read">
                            注册
                        </button>
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
                reg: '',
                read: false,
                disabled: true,
                seg: 0,
                loveType: [],
                xType: [],
                xingqu: [
                  {
                    'val': 1,
                    'text': '写作'
                  },
                  {
                    'val': 2,
                    'text': '游泳'
                  },
                  {
                    'val': 3,
                    'text': '唱歌'
                  }
                ],
                city: 2,
                reg: ''
            }
        },
        mounted () {
           
        },
        
        methods: {
            phone () {
              var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
              if(!phoneReg.test(this.userName)){
                this.reg = '手机号码不正确'
              } else {
                this.reg = ''
              }
            },
            passwdReg(){
              var reg1 = /[!@#$%^&*()_?<>{}]{1}/;
              var reg2 = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,18}/;
              var reg3 = /[a-zA-Z]+/;
              var reg4 = /[0-9]+/;
              if(reg1.test(this.passwd1) && reg2.test(this.passwd1) && reg3.test(this.passwd1) && reg4.test(this.passwd1)){
                  return true;
              }else if(!reg1.test(this.passwd1)){
                  alert("需包含一个特殊字符");
                  return false;
              }else if(!reg2.test(this.passwd1)){
                  alert("长度在8-18位");
                  return false;
              }else if(!reg3.test(this.passwd1)){
                  alert("需含有字母");
                  return false;
              }else if(!reg4.test(this.passwd1)){
                  alert("需含有数字");
                  return false;
              }
          },
          goLogin () {
              this.$router.push({
                  path: '/login'
              })
          },
          // 注册
          regist () {
              let params = {
                  'userName': this.userName,
                  'passwd1': this.passwd1,
                  'passwd2': this.passwd2,
                  // 'seg': this.seg,
                  // 'loveType': this.loveType,
                  // 'xType': this.xType,
                  // 'city': this.city

              }
              this.$http.post('/apis/regist', params).then(res => {
                  console.log('aaaa',res)
                  let _this = this
                   this.reg = res.data.msg
                  if(res.data.code === 0) {
                      setTimeout(function() {
                          _this.$router.push({
                              path: '/login'
                          })
                      }, 1000)
                  }
              })
          },
          selectAll (e) {
            console.log('ww',e.target.checked)
            if(e.target.checked){
            
            // this.$refs.box.children.forEach(function(item){
            //   console.log('item', item)
            // })
            this.loveType=[1,2]
            }
            else {
              this.loveType = []
            }
          },
          selectAll2(e, item){
            if(e.target.checked){
              
              item.forEach((items) => {
                // items.checked = true
                console.log('ll', items)
                this.xType.push(items.val)
              })
            } else {
            
              this.xType = []
            }
          }
        }
    }
</script>
<style lang="scss" scoped>
@import '../../assets/scss/user.scss';
.read {
  padding-bottom:1rem;
}
.user button.disabled{
  background: #999;
  transition: all 1s;
}
.loveType{
  margin:1.8rem 0;
}
.loveType label{
  margin:0 2rem;
}
.m10{
  margin:1rem 0;
}
</style>