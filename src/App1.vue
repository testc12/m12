<template>
  <div id="app">
    <m-header>
    </m-header>
    <div class="app">
      <router-view/>
    </div>
    <player></player>
  </div>
</template>

<script>
import MHeader from './base/m-header'
import Player from './views/play'
export default {
  name: 'App',
  components: {
    MHeader,
    Player
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/font/iconfont.css';
@import './assets/scss/base.scss';
#app {
  width: 100%;
  overflow: hidden;
 /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  background: #333;
  height: 100%;
}
.top{
  position: fixed;
  height:102px;
  width:100%;
  z-index:2

}
.app{
  padding:1%;
  position: absolute;
  top:0px;
  width:98%;
  overflow:hidden;
  padding-top:100px;
  height:86%;
}
</style>
