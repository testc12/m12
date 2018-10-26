<template>
	<div ref="scroll" class="scroll">
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
	data () {
		return {
			upText: '',
			downText: ''
		}
	},
	props: {
		probeType: {
			type: Number,
			default: 1
		},
		click: {
			type: Boolean,
			default: true
		},
		datas: {
			type: Array,
			default: () => []
		}
	},
	mounted() {
      setTimeout(() => {
        this._inintScroll()
      }, 20)
    },
	methods: {
		_inintScroll () {
			if (!this.$refs.scroll) {
				return
			}
			// scroll初始化
			this.scroll = new BScroll(this.$refs.scroll, {
				probeType: this.probeType,
				click: this.click,
				datas: this.datas
			})
			// 是否派发滚动底部的事件，用于上拉加载
		},
		//disable
		disable () {
			this.scroll && this.scroll.disable()
		},
		enable () {
			this.scroll && this.scroll.enable()
		},
		refresh () {
			this.scroll && this.scroll.refresh()
		}
	},
	watch: {
      // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
      datas() {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    }
    //
}

</script>
<style type="text/css">
	.scroll{
		overflow: hidden;
	}
</style>