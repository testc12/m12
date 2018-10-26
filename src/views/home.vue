<template>
	<div>
		<m-header></m-header>
		<router-view/>
	</div>
</template>
<script type="text/javascript">
	import mHeader from '../base/m-header'
	export default {
		components: {
			mHeader
		}
	}
</script>