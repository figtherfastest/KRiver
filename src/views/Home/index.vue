<template>
	<div class="home">
		<div class="home-img">
			<img src="../../assets/image/index-avatar.png" alt="" />
		</div>
		<div class="tab-wrap">
			<div class="tab">
				<img src="" alt="" />
			</div>
			<div class="tab">
				<img src="" alt="" />
			</div>
			<div class="tab">
				<img src="" alt="" />
			</div>
			<div class="tab">
				<img src="" alt="" />
			</div>
			<div class="tab">
				<img src="" alt="" />
			</div>
			<div class="tab">
				<img src="" alt="" />
			</div>
		</div>
		<div class="title-one">
			<img src="../../assets/image/news.png" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
}
</script>
<style lang="less">
.home {
	width: 100%;
	height: 100%;
	overflow: hidden;
	.home-img {
		height: 438px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		img {
			width: 100%;
			object-fit: cover;
		}
	}
	.tab-wrap {
		padding: 76px 40px 20px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		.tab {
			width: 190px;
			height: 72px;
			border: 1px solid red;
			box-sizing: border-box;
			margin-right: 48px;
			margin-bottom: 40px;
			&:nth-child(3n) {
				margin-right: 0;
			}
		}
	}
	.title-one {
		display: flex;
		justify-content: center;
		align-items: center;
		img {
		}
	}
}
</style>
