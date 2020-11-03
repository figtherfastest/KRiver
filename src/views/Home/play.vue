<template>
	<div class="play">
		<nav-title title="游玩指南" />
		<div class="play-info">
			<img class="play-left" src="../../assets/image/play11.png" alt="" />
			<div class="play-right">
				<img src="../../assets/image/play10.png" alt="" />
				<div class="right-info">
					景区当地传统美食风味独特，有着浓重的乡土味，令人魂牵梦萦。酸辣鸡，无论家宴还是酒店，无论是逢年过节还是招待贵客，都是必备的一道主菜；羊肉格格麻辣鲜香，细嫩爽滑，十分别致；开江面，以老咸菜切成碎颗，炒鸡蛋作臊子，做成的面食，极具故乡风味；沙坝场乡刘老头白酒，入口绵软，醇厚芬芳；宝石湖人放天养的生态鱼，肉质鲜嫩细滑；任市唐板鸭和杨板鸭，精选本地放养土麻鸭，在传统制作工艺基础上，辅以多种滋补食材，经十余道工序精心烤制而成，板鸭皮亮肉润、香气浓郁，色香味具佳；竹溪豆干采用秘制红糖炒制金酱和秘制卤香大料卤出，味道独特；开江特产豆笋，以黄豆为原料经十几道工序提炼而成。
				</div>
			</div>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/news.png" alt="" />
		</div>
		<ul class="food-list">
			<li class="food">
				<img src="../../assets/image/play1.png" alt="" />
			</li>
			<li class="food">
				<img src="../../assets/image/play2.png" alt="" />
			</li>
			<li class="food">
				<img src="../../assets/image/play3.png" alt="" />
			</li>
			<li class="food">
				<img src="../../assets/image/play4.png" alt="" />
			</li>
			<li class="food">
				<img src="../../assets/image/play5.png" alt="" />
			</li>
			<li class="food">
				<img src="../../assets/image/play6.png" alt="" />
			</li>
			<li class="food">
				<img src="../../assets/image/play6.png" alt="" />
			</li>
			<li class="food">
				<img src="../../assets/image/play6.png" alt="" />
			</li>
		</ul>
		<div class="title-nav">
			<img src="../../assets/image/news.png" alt="" />
		</div>
		<div class="ope-swipe">
			<van-swipe class="my-swipe" :autoplay="3000000" indicator-color="white">
				<van-swipe-item>
					<div class="img"></div>
					<div class="info">
						<div class="content">content</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img"></div>
					<div class="info">
						<div class="content">content</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img"></div>
					<div class="info">
						<div class="content">content</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/news.png" alt="" />
		</div>
		<div></div>
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
		align-items: center;
		.play-left {
			width: 420px;
			height: 346px;
			object-fit: cover;
			border-radius: 50%;
			margin-left: -210px;
		}
		.play-right {
			width: calc(100% - 210px);
			.right-info {
				padding-top: 15px;
				font-size: 24px;
				font-family: 微软简楷体;
				font-weight: 400;
				line-height: 40px;
				text-indent: 15px;
				color: #ffffff;
			}
		}
	}
	.title-nav {
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 60px;
	}
	.food-list {
		margin-top: 30px;
		.food {
			width: 620px;
			height: 130px;
			margin: 0 auto 50px;
			border: 6px solid #ad9d96;
			box-sizing: border-box;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
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
			background: red;
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
}
</style>
