<template>
	<div class="more-cultural">
		<nav-title title="传统文化" />
		<div class="nav-img">
			<img src="../../assets/image/cultural1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-minghjianbiaoyanh.png" alt="" />
		</div>
		<div class="tabs">
			<div class="tab"></div>
			<div class="tab"></div>
			<div class="tab"></div>
			<div class="tab"></div>
			<div class="tab"></div>
			<div class="tab"></div>
		</div>
		<footerNav class="nav"></footerNav>
		<div class="title-nav">
			<img src="../../assets/image/shougongjiyi.png" alt="" />
		</div>
		<div class="left-band band"></div>
		<div class="right-band band"></div>
		<footerNav class="nav"></footerNav>
	</div>
</template>

<script>
export default {
	name: 'more-cultural',
	components: {
		navTitle: () => import('../../components/nav-title'),
		footerNav: () => import('../../components/footer-nav')
	}
}
</script>

<style scoped lang="less">
.more-cultural {
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
	.tabs {
		.tab {
			width: 420px;
			height: 78px;
			margin: 60px auto 0;
			border: 1px solid red;
		}
	}
	.nav {
		margin-top: -150px;
	}
	.band {
		width: 680px;
		height: 164px;
		margin: 0 auto;
		border-radius: 8px;
		overflow: hidden;
	}
	.left-band {
		background: url('../../assets/image/band1.png') no-repeat;
		background-size: 100% 100%;
		margin-top: 50px;
	}
	.right-band {
		background: url('../../assets/image/band2.jpg') no-repeat;
		background-size: 100% 100%;
		margin-top: 30px;
	}
}
</style>
