<template>
	<div class="cultural">
		<nav-title title="传统文化" />
		<div class="nav-img">
			<img src="../../assets/image/cultural1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/jingqugaikuang.png" alt="" />
		</div>
		<div class="cultural-info">
			金山景区位于有“巴山平原、毓秀水乡”之美誉的开江境内，历史悠久，文化传承深厚。
			金山寺始建于唐代天宝年间，古时名为伽兰寺，其殿宇轩敞、文物荟萃，无愧川东第一古刹之名；建于明代的七级楼阁式砖塔宝泉塔，具有极高的建筑文化价值，是登高观景点，"宝泉月夜"是开江八景之一；金山寺与白宝塔之间的巴山小平原风光，村落相连，如诗如画，如今万亩“莲花世界”更是闻名遐迩;宝塔山红军反围剿作战遗址更为这片土地增添了厚重的历史积淀。
		</div>
		<div class="cultural-img1">
			<img src="../../assets/image/cultural2.png" alt="" />
		</div>
		<div class="cultural-img2">
			<img src="../../assets/image/cultural3.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/jingqugaikuang.png" alt="" />
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
		<div class="title-nav" style="margin-top: 50px">
			<img src="../../assets/image/jingqugaikuang.png" alt="" />
		</div>
		<div class="circle" style="margin-top: 70px">
			<img src="../../assets/image/cultural4.png" alt="" />
		</div>
		<div class="circle-info">
			开江拗棒指产生并流传于开江县新宁镇和普安镇的独具特色的一种民间表演。开江拗棒的雏形是人们在劳动歇憩时，用抬石头的两根杠棒“十”字相架，让一人坐于棒上，被伙伴们拗上拗下的一种喜乐逗趣的游戏。清末演变为嘲讽贪官污��取悦民众...
		</div>
		<div class="circle">
			<img src="../../assets/image/cultural5.png" alt="" />
		</div>
		<div class="circle-info">
			开江薅秧歌指产生并流传于开江全境的一种劳动山歌，又称山野之歌，是开江劳动人民在从事特定的劳动——薅秧时，面对大自然，即兴自由地抒发内心感情的一种民歌体裁形式，又叫大田薅秧歌。
			2007年3月，薅秧歌已被...
		</div>
		<div class="circle">
			<img src="../../assets/image/cultural6.png" alt="" />
		</div>
		<div class="circle-info">
			开江豆笋传统制作技艺产生并流传于四川省达州市开江县的新宁镇、普安镇和甘棠镇，是一种独特的传统手工制作技艺，源于清朝初年的“湖广填四川”时期。
			开江豆笋是开江农耕文化文明进程的证物，2008年被...
		</div>
		<div class="footer-nav">
			<img src="../../assets/image/cultural7.png" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'cultural',
	components: {
		navTitle: () => import('../../components/nav-title')
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
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
