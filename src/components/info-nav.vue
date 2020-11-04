<template>
	<div class="info-nav">
		<img :src="imgPath" alt="" />
		<!--		<img src="@/assets/image/xianlutuijian.png" alt="" />-->
		<!--		`../../assets/image/${imgPath}.png`-->
	</div>
</template>

<script>
export default {
	name: 'info-nav',
	props: {
		imgPath: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped lang="less">
.info-nav {
	height: 180px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
