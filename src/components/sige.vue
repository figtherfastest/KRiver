<template>
	<div class="sige">
		<div class="list center">
			<img src="../assets/image/piaowuxinxi.png" />
		</div>
		<div class="list center">
			<img src="../assets/image/rexiandianhua.png" />
		</div>
		<div class="list center">
			<img src="../assets/image/jingqufuwudian.png" />
		</div>
		<div class="list center">
			<img src="../assets/image/wenxingtishi.png" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'sige'
}
</script>

<style scoped lang="less">
.sige {
	width: calc(100% - 140px);
	margin-left: 70px;
	height: 500px;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.list {
		width: 50%;
		height: 250px;
	}
}
</style>
