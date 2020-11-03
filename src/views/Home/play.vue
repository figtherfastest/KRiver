<template>
	<div class="play">
		<nav-title title="游玩指南" />
		<div class="play-info"></div>
	</div>
</template>

<script>
export default {
	name: 'play',
	components: {
		navTitle: () => import('../../components/nav-title')
	}
}
</script>

<style scoped lang="less">
.play {
	width: 100%;
	height: 100%;
	overflow: auto;
	.play-info {
		width: 100%;
		padding: 56px 0 40px;
		background: #2e4b12;
		display: flex;
		justify-content: space-between;
	}
}
</style>
