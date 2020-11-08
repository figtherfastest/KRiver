<template>
	<div class="cultural">
		<!--		<nav-title title="传统文化" />-->
		<div class="nav-img">
			<img src="../../assets/image/cultural1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-lishiyuanyuan.png" alt="" />
		</div>
		<div class="cultural-info" v-html="$t('lang.traditionTitle')"></div>
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
						<div class="content">
							开江是一块红色故土，自1926年泸顺起义军到开江以来，党的活动延绵不断，是川东红军游击队活动的主要区域，川东地下党指挥中心。1933年10月红四方面军率部在开江县的普安、回龙、宝塔、长田、天师、骑龙、永兴、灵岩、新太等地与敌激战7昼夜（红四方面军反六路围攻序幕战，又名红军宝塔坝战役），占领开江1/3的土地，将开江正式划归川陕革命根据地区域，开江因此成为川陕革命根据地的重要组成部分之一。
						</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/taohua.png" alt="" />
					</div>
					<div class="info">
						<div class="content">
							开江县红色陈列馆是开江县博物馆重要组成部分，是开江县青少年爱国主义教育基地，由王平夷故居改建而成。红色陈列馆共设11个展厅，分别为：第一部分:红色沃土4个展厅，第二部分：宝塔坝战役1个展厅，
							第三部分：宝塔人家1个展厅， 第四部分：英雄儿女5个展厅，充分发挥红色陈列馆社会教育功能。
						</div>
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
		<div class="circle-info" v-html="$t('lang.traditionInfo1')"></div>
		<div class="circle">
			<img src="../../assets/image/cultural5.png" alt="" />
		</div>
		<div class="circle-info" v-html="$t('lang.traditionInfo2')"></div>
		<div class="circle">
			<img src="../../assets/image/cultural6.png" alt="" />
		</div>
		<div class="circle-info" v-html="$t('lang.traditionInfo3')"></div>

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
			padding: 15px;
			//width: calc(100% - 20px);
			//margin-left: 10px;
			.content {
				font-size: 32px;
				line-height: 24px;
				font-weight: 400;
				color: #707070;
				padding-top: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.time {
				font-size: 28px;
				font-weight: 400;
				color: #707070;
				margin-top: 15px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.tel {
				font-size: 28px;
				font-weight: 400;
				color: #707070;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
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
			background: url('../../assets/image/title-lookmore-white.png') no-repeat;
			background-size: 100% 100%;
			margin: 0 auto;
		}
	}
}
</style>
