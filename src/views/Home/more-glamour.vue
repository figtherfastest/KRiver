<template>
	<div class="more-glamour">
		<nav-title title="魅力金山" />
		<div class="nav-img">
			<img src="../../assets/image/more1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-ziranjingdian.png" alt="" />
		</div>
		<div class="tabs">
			<div class="tab">
				<img src="../../assets/image/heng-baoshihu.png" alt="" />
			</div>
			<div class="tab">
				<img src="../../assets/image/heng-feitianwenquan.png" alt="" />
			</div>
			<div class="tab">
				<img src="../../assets/image/heng-huangjinhuahai.png" alt="" />
			</div>
			<div class="tab">
				<img src="../../assets/image/heng-emeishan.png" alt="" />
			</div>
			<div class="tab">
				<img src="../../assets/image/heng-mingyuehu.png" alt="" />
			</div>
			<div class="tab">
				<img src="../../assets/image/heng-lianhuashijie.png" alt="" />
			</div>
		</div>
		<footer-nav style="margin-top: -120px"></footer-nav>
		<div class="title-nav">
			<img src="../../assets/image/title-renwenjingguan.png" alt="" />
		</div>
		<div class="circle-wrap">
			<div class="circle">
				<img src="../../assets/image/glamour-si.png" alt="" />
			</div>
			<div class="circle">
				<img src="../../assets/image/glamour-ta.png" alt="" />
			</div>
			<div class="circle">
				<img src="../../assets/image/glamour-taer.png" alt="" />
			</div>
			<div class="circle">
				<img src="../../assets/image/glamour-nvren.png" alt="" />
			</div>

			<div class="circle">
				<img src="../../assets/image/glamour-fangzi.png" alt="" />
			</div>
			<div class="circle">
				<img src="../../assets/image/glamour-fangzi2.png" alt="" />
			</div>
			<div class="circle">
				<img src="../../assets/image/glamour-fangzi3.png" alt="" />
			</div>
			<div class="circle">
				<img src="../../assets/image/glamour-fangzi4.png" alt="" />
			</div>
		</div>
		<footer-nav class="navs"></footer-nav>
	</div>
</template>

<script>
export default {
	name: 'more-glamour',
	components: {
		navTitle: () => import('../../components/nav-title'),
		footerNav: () => import('../../components/footer-nav')
	}
}
</script>

<style scoped lang="less">
.more-glamour {
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
	.tabs {
		.tab {
			width: 420px;
			height: 78px;
			margin: 60px auto 0;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.circle-wrap {
		width: calc(100% - 192px);
		margin-left: 96px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin-top: 30px;
		.circle {
			width: 252px;
			height: 252px;
			border-radius: 50%;
			padding: 3px;
			margin-right: 32px;
			margin-bottom: 32px;
			&:nth-child(2n + 2) {
				margin-right: 0;
			}
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.navs {
		margin-top: -200px;
	}
}
</style>
