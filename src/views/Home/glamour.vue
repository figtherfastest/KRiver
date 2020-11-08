<template>
	<div class="glamour">
		<div class="nav-img">
			<img src="../../assets/image/glamary1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-jingqugaikuang.png" alt="" />
		</div>
		<div class="glamour-info" v-html="$t('lang.glamour')"></div>
		<div class="glamour-foot">
			<img src="../../assets/image/glamary2.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-jingshanfengguang.png" alt="" />
		</div>
		<div class="glamour-list">
			<div class="list-gam">
				<img src="../../assets/image/sier.png" alt="" />
			</div>
			<div class="list-gam">
				<img src="../../assets/image/taer.png" alt="" />
			</div>
			<div class="list-gam">
				<img src="../../assets/image/huaer.png" alt="" />
			</div>
			<div class="list-gam" @click="goMoreGlamour">
				<img src="../../assets/image/maoer.png" alt="" />
			</div>
		</div>
		<div class="glamour-foot">
			<img src="../../assets/image/glamary2.png" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'galmary',
	methods: {
		goMoreGlamour() {
			this.$router.push({ name: 'moreGlamour' })
		}
	}
}
</script>

<style scoped lang="less">
.glamour {
	width: 100%;
	height: 100%;
	overflow: auto;
	.nav-img {
		width: 100%;
		height: 430px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.title-nav {
		height: 100px;
		margin-top: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.glamour-info {
		margin-top: 30px;
		padding: 0 30px;
		font-size: 24px;
		font-family: 微软简楷体;
		font-weight: 400;
		line-height: 42px;
		color: #333333;
		text-indent: 25px;
	}
	.glamour-foot {
		height: 260px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.glamour-list {
		width: calc(100% - 194px);
		margin-left: 92px;
		margin-top: 60px;
		.list-gam {
			height: 150px;
			margin-top: 20px;
		}
		img {
			width: 100%;
			height: 100%;
			//object-fit: cover;
		}
	}
}
</style>
