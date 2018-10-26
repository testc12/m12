<template>
	<div class="viewq">
		<div class="pre">
			<div class="mask">
				asfsfsdfsdfasdfsdfsdf
			</div>
			<h1>
				aaaa
			</h1>
			<img src="http://www.fateadm.com/images/feifei.png">
			
			<div class="player">player</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style type="text/css">
	.pre{
		position: relative;
	}
	.mask,h1,.player{
		position: absolute;
	}
	.viewq{
		position: absolute;
		top:0;
		left:0;
		background:#ff0000;
		width:100%;
		height:100%;
	}
	.mask{
		width:100%;
		height:300px;
		background:#000;
		opacity: .5;
		top:100px;

	}

</style>