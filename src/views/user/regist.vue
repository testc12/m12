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
                    <input type="text" name="phone1" v-model="userName" placeholder="用户名">
                    <input type="password" name="phone1" v-model="passwd1" placeholder="密码">
                    <input type="password" name="phone1" v-model="passwd2" placeholder="确认密码">
                    <!--性别-->
                   <!--  <div class="loveType">
                      <span>性别</span>
                      <label><input type="radio" value="0" name="seg" v-model="seg" checked="checked"> 男</label>
                      <label><input type="radio" name="seg" value="1" v-model="seg"> 女</label>
                    </div> -->
                  <!--爱好-->
                    <!-- <div class="loveType">
                      <div class="m10"><span>爱好</span> <label>全选 <input type="checkbox" name="" :checked="loveType.length==2" @click="all(love, loveType,$event)"></label>
                      </div>
                      <div>
                        <label v-for="item in love"><input type="checkbox" name="loveType" :value="item.val" v-model="loveType"> {{item.txt}}</label>

                        
                        
                      </div>
                      <br/>
                      
                    </div> -->
                  <!--兴趣-->
                    <!-- <div class="loveType">
                      <div class="m10"><span>兴趣</span> <label>全选 <input type="checkbox"  name="" @click="all(xingqu, xType, $event)"></label>
                      </div>
                      <div ref="box">
                        <label v-for="item in xingqu">
                          <input type="checkbox" name="" :value='item.val' v-model="xType"> {{item.txt}}
                        </label>
                      </div>
                      <br/>
                    </div> -->
                  <!--所在城市-->
                    <!-- <div class="loveType">
                      <div class="m10"><span>所在城市</span> 
                      </div>
                      <div>
                        <select v-model="city">
                          <option value="1">内蒙古</option>
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
                       <button class="btn" :class="{'disabled': !read}" :disabled="!read"  @click="regist" type="button">注册</button>
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
                love: [
                  {
                    'val': 'a',
                    'txt': '玩'
                  },
                  {
                    'val': 'b',
                    'txt': '吃'
                  },
                ],
                xingqu: [
                  {
                    'val': 1,
                    'txt': '写作1'
                  },
                  {
                    'val': 2,
                    'txt': '游泳1'
                  },
                  {
                    'val': 3,
                    'txt': '唱歌'
                  }
                ],
                city: 2,
                reg: ''
            }
        },
        mounted () {
           
        },
        
        methods: {
          // all(e, obj, obj2) {
          //   if (e.target.checked) {
          //     obj.forEach((item, index) => {
          //       obj2.push(item.val)
          //     })
          //     console.log('qqq', obj2)
          //   } else {
          //     if(obj2 == this.xType) {
          //       this.xType = []
          //     } else {
          //       this.loveType = []
          //     }
          //     // console.log('aaa1', this.xType = [])
          //     // console.log('bbb', this.loveType = [])
          //   }
          // },
          all(obj, obj2, e) {
            if (!e.target.checked) {
              // obj.forEach((item, index) => {
              //   obj2.push(item.val)
              // })
              console.log('aaa1', obj)
              console.log('bbb', obj2)
              console.log('qqq999', e)
              obj2 = []
              console.log('ss', obj2)
            } else {
              obj.forEach((item, index) => {
                obj2.push(item.val)
              })
            }
          },
          // allX(e) {
          //   if (e.target.checked) {
          //     this.xingqu.forEach((item, index) => {
          //       this.xType.push(item.val)
          //     })
              
          //   }
          //   else {
          //     this.xType = []
          //   }
          // },
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
                  'read': this.read,
                  'seg': this.seg,
                  'loveType': this.loveType,
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