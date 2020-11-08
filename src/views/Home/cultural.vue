<template>
	<div class="cultural">
		<!--		<nav-title title="传统文化" />-->
		<div class="nav-img">
			<img src="../../assets/image/cultural1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-lishiyuanyuan.png" alt="" />
		</div>
		<div class="cultural-info">
			{{ $t('lang.traditionTitle') }}
		</div>
		<div class="cultural-img1">
			<img src="../../assets/image/cultural2.png" alt="" />
		</div>
		<div class="cultural-img2">
			<img src="../../assets/image/cultural3.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-hongsechuancheng.png" alt="" />
		</div>
		<div class="ope-swipe">
			<van-swipe class="my-swipe" :autoplay="3000000" indicator-color="white">
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/taohua.png" alt="" />
					</div>
					<div class="info">
						<div class="content">content</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/taohua.png" alt="" />
					</div>
					<div class="info">
						<div class="content">content</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/taohua.png" alt="" />
					</div>
					<div class="info">
						<div class="content">content</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="title-nav" style="margin-top: 50px">
			<img src="../../assets/image/jingqugaikuang.png" alt="" />
		</div>
		<div class="circle" style="margin-top: 70px">
			<img src="../../assets/image/cultural4.png" alt="" />
		</div>
		<div class="circle-info">
			{{ $t('lang.traditionInfo1') }}
		</div>
		<div class="circle">
			<img src="../../assets/image/cultural5.png" alt="" />
		</div>
		<div class="circle-info">
			{{ $t('lang.traditionInfo2') }}
		</div>
		<div class="circle">
			<img src="../../assets/image/cultural6.png" alt="" />
		</div>
		<div class="circle-info">
			{{ $t('lang.traditionInfo3') }}
		</div>

		<div class="footer-nav">
			<div class="look-more" @click="lookMore"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cultural',
	methods: {
		lookMore() {
			this.$router.push({ name: 'moreCultural' })
		}
	}
}
</script>

<style scoped lang="less">
.cultural {
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
	.cultural-info {
		width: calc(100% - 152px);
		margin-left: 76px;
		margin-top: 30px;
		font-size: 24px;
		font-family: 微软简楷体;
		font-weight: 400;
		line-height: 42px;
		color: #333333;
		text-indent: 25px;
	}
	.cultural-img1 {
		height: 230px;
		width: calc(100% - 60px);
		margin-left: 30px;
		margin-top: 30px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.cultural-img2 {
		height: 250px;
		margin-top: 30px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.ope-swipe {
		width: calc(100% - 40px);
		margin-left: 20px;
		background: #ffffff;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
		border-radius: 8px;
		margin-top: 30px;
		overflow: hidden;
		.img {
			height: 250px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.info {
			height: 90px;
			padding: 15px;
			.content {
				height: 24px;
				line-height: 24px;
				font-size: 32px;
				font-weight: 400;
				color: #707070;
				padding-top: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.time {
				font-size: 32px;
				font-weight: 400;
				color: #707070;
				padding-top: 13px;
			}
		}
	}
	.circle {
		width: 510px;
		height: 510px;
		border-radius: 50%;
		overflow: hidden;
		margin: 120px auto 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.circle-info {
		width: calc(100% - 2.02667rem);
		margin-left: 1.01333rem;
		margin-top: 0.4rem;
		font-size: 0.32rem;
		font-family: 微软简楷体;
		font-weight: 400;
		line-height: 0.56rem;
		color: #333333;
		text-indent: 0.33333rem;
	}
	.footer-nav {
		height: 382px;
		padding-top: 180px;
		background: url('../../assets/image/cultural7.png') no-repeat;
		background-size: 100% 100%;
		.look-more {
			width: 424px;
			height: 78px;
			background: url('../../assets/image/title-lookmore.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
	}
}
</style>
