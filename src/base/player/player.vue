<template>
	<div class="player" v-show="playList.length>0">
		<div class="normal-player" v-show="fullScreen">
			
		</div>
		<div class="mimi-player" v-show="!fullScreen">
			
		</div>
	</div>
</template>
<script type="text/javascript">
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters([
				'fullScreen',
				'playList'
				])
		}
	}
</script>
<style lang='scss'></style>