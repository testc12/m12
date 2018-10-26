<template>
	<div>
		<div class="hot-song">
			<slot name="p1"></slot>

			<dl v-for="(item,index) in datas" @click="goList(item)">
				<dt>
					<img :src="item.imgurl" >
				</dt>
				<dd>
					<h2>{{item.creator.name}}</h2>
					<p>{{item.dissname}}</p>
				</dd>
			</dl>
			<slot name="p2"></slot>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'list',
		props: {
			datas: {
				type: Array,
				default: () => []
			}
		},
		methods: {
			goList (item) {
				this.$emit('goList', item)
				console.log('item', item)
			}
		}
	}
</script>
<style lang="scss" scoped="">
@import '../assets/scss/list.scss';
</style>