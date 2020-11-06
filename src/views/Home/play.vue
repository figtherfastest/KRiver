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
			<img src="../../assets/image/title-meishituijian.png" alt="" />
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
				<img src="../../assets/image/play7.png" alt="" />
			</li>
			<li class="food">
				<img src="../../assets/image/play8.png" alt="" />
			</li>
		</ul>
		<footer-nav class="navs" style="margin-top: -160px"></footer-nav>
		<div class="title-nav" style="margin-top: 0">
			<img src="../../assets/image/title-jiudianmingsu.png" alt="" />
		</div>
		<div class="ope-swipe">
			<van-swipe class="my-swipe" :autoplay="3000000" indicator-color="white">
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/play9.png" alt="" />
					</div>
					<div class="info">
						<div class="content">content</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/play9.png" alt="" />
					</div>
					<div class="info">
						<div class="content">content</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/play9.png" alt="" />
					</div>
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
		<div class="basic-info">
			<img src="../../assets/image/play-yazi.png" class="left-info" align="left" />
			开江自古以来就有养殖麻鸭、白鹅的习惯。
			开江麻鸭，全国农产品地理标志。开江麻鸭产蛋性能好、屠宰率高。宰杀后，肌肉丰满紧密、有坚实感、光泽润滑，用手触摸湿润不粘手、肌纤维韧性强、弹性好。因鸭肉的
			脂肪含量少、氨基酸种类多，营养丰富，咀嚼道鲜美。肉汤清淡，风味独特、鲜美无比、营养丰富、可口怡人。开江白鹅是全国有名的优良地方水禽品种，具有个大（3—4公斤）、毛质好（通体纯白）、产毛量高（每只鹅产羽毛100—200克）、肉质嫩、产蛋率高、生长快（2—3个月可出栏，年可养殖3—4批）的鲜明特点，是食品和服装加工的优质原料。开江县白鹅常年饲养量在450万只以上。
		</div>
		<div class="basic-info">
			<img src="../../assets/image/play-ganlan.png" class="right-info" align="right" />
			1974年，达州市在开江县、达县（现达川区）引种栽培油橄榄，开江县油橄榄种植已遍布全县20个乡镇。达州市属亚热带湿润季风气候类型，适宜的地理气候条件，有益于油橄榄的干物质积累，为达州橄榄油的生产提供了
			充足的优质原料。达州橄榄油鲜果冷榨而成，色泽黄绿、清澈透明，品质优于国家及欧盟标准。对人体心血管疾病预防、抗衰老、降血压、减肥、帮助消化、护肤等方面有着十分明显的作用。达州橄榄油曾先后荣获国家“绿色食品”、“四川名牌”、“四川著名商标”、“西博会金质奖”、“重庆市最受消费者欢迎奖”等荣誉称号。2010年09月03日，原国家质检总局批准对“达州橄榄油”实施地理标志产品保护。
		</div>
		<div class="look-more">
			<div class="more"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'play',
	components: {
		navTitle: () => import('../../components/nav-title'),
		footerNav: () => import('../../components/footer-nav')
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
			border-left: 5px solid #ad9d96;
			border-right: 5px solid #ad9d96;
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
	.basic-info {
		margin-top: 50px;
		font-size: 24px;
		font-family: 微软简楷体;
		font-weight: 400;
		line-height: 32px;
		color: #333333;
		width: calc(100% - 60px);
		margin-left: 30px;
		text-indent: 20px;
		.left-info {
			width: 282px;
			height: 296px;
		}
		.right-info {
			width: 344px;
			height: 362px;
		}
	}
	.look-more {
		height: 380px;
		background: url('../../assets/image/play16.png') no-repeat;
		background-size: 100% 100%;
		padding-top: 70px;
		.more {
			width: 424px;
			height: 78px;
			margin: 0 auto;
			background: url('../../assets/image/title-lookmore.png');
		}
	}
}
</style>
