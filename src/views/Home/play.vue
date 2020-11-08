<template>
	<div class="play">
		<div class="play-info">
			<img class="play-left" src="../../assets/image/play11.png" alt="" />
			<div class="play-right">
				<img src="../../assets/image/play10.png" alt="" />
				<div class="right-info-title" v-html="$t('lang.playInfo')"></div>
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
						<div class="content">开江宜美家中天假日酒店</div>
						<div class="time">开江新宁镇新宁路343号</div>
						<div class="tel">联系电话：0818-8137777</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/play9.png" alt="" />
					</div>
					<div class="info">
						<div class="content">开江好客连锁酒店</div>
						<div class="time">开江新宁镇宝石大道130号</div>
						<div class="tel">联系电话：0818-5283666</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/play9.png" alt="" />
					</div>
					<div class="info">
						<div class="content">鸿景大酒店</div>
						<div class="time">开江新宁镇新宁路304号</div>
						<div class="tel">联系电话：0818-8222133</div>
					</div>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/news.png" alt="" />
		</div>
		<div class="basic-info">
			<img src="../../assets/image/play-yazi.png" class="left-info" align="left" />
			{{ $t('lang.playConsel1') }}
		</div>
		<div class="basic-info">
			<img src="../../assets/image/play-ganlan.png" class="right-info" align="right" />
			{{ $t('lang.playConsel1') }}
		</div>
		<div class="look-more">
			<div class="more" @click="lookMore"></div>
		</div>
		<action-sheet
			actionTitle="特色土产"
			v-model="actionState"
			v-if="actionState"
			@handlePrev="handlePrev"
			@handleNext="handleNext"
		>
			<template>
				<img :src="sheetContent.image" class="sheet-img" />
				<div class="shet-action-content">{{ sheetContent.info }}</div>
			</template>
		</action-sheet>
	</div>
</template>

<script>
export default {
	name: 'play',
	components: {
		footerNav: () => import('../../components/footer-nav'),
		actionSheet: () => import('../../components/action-shet')
	},
	data() {
		return {
			actionState: false,
			currentIndex: 0,
			sheetContent: {},
			sheetAction: [
				{
					image: require('../../assets/image/play17.png'),
					info:
						'开江盛产葛根，葛根具有生津止渴、解肌退热的功效。葛根是药食同源的植物，含有多种营养成分和人体所必需的矿物质，有“干年人参”的美誉。开江人利用葛根制作出葛根粉、葛根面、葛根酒等系列产品。葛根粉，也称粉葛。既有药用价值，又有营养保健之功效，是老少皆宜的名贵滋补品。葛根酒是通过采用现代工艺，传统酿造方法将葛根直接生蒸而成。酒内含大量异黄酮及营养物质，无任何添加剂，为原汁原味的天然营养葛根酒饮品。葛根酒对心脏病，尤其是冠心病、骨质疏松症和老年性痴呆等都有预防作用。葛根面，是在面粉里合理的添加葛根粉，加工成的挂面。葛根面是萃取高山天然葛根精华，选用特质面条专用小麦粉以及优质野葛根粉为主要原料，面条口感细腻爽滑，具有极高的营养保健价值，实属面中精品。'
				},
				{
					image: require('../../assets/image/gegeng.png'),
					info:
						'开江的特色豆笋又名豆筋，以黄豆为原料经过十几道工序提炼而成，营养十分丰富，食用方式也是多种多样，口感嫩滑、味道醇香。2009年5月，开江豆笋被四川省人民政府列为第三批非物质文化遗产保护项目。豆笋含有高量的蛋白质，营养极其丰富，长期食用有利于小孩的生长发育，可延缓人体的衰老，深受人们的喜爱。开江豆笋因其传统、独特的制作技艺而深受开江人的喜爱。开江豆笋可称得上是真正意义上的绿色食品，其技艺独特，全程手工操作，选料精细，制作流程别具一格，具有极强的综合制作技艺价值。'
				},
				{
					image: require('../../assets/image/banya.png'),
					info:
						'开江县腌腊制品历史悠久，品种繁多，在省内外享有盛誉。开江板鸭选用该县出产的开江麻鸭为原料，腊香浓郁，色泽金黄，肥而不腻，清香味爽，独具特色。<br/>' +
						'<br/>' +
						'在开江境内，任市镇的板鸭也同样出名。任市板鸭已有100年的历史，其制作技艺融入了开江人民的智慧。制品含有丰富的氨基酸和多种维生素，而且胆固醇含量低，营养价值极高，具有滋阴功效。 2008年9月，开江任市唐板鸭传统制作技艺被达州市人民政府公布为第二批市级非物质遗产保护名录。2014年，开江县家禽产业协会申报的“任市板鸭”通过农业部农产品质量安全中心审查和组织专家评审，实施国家农产品地理标志登记保护。'
				},
				{
					image: require('../../assets/image/ganlanyou.png'),
					info:
						'达州橄榄油是由采摘的油橄榄树鲜果直接冷榨而成的，不经过加热和化学处理，保留了橄榄天然的营养成分。橄榄油被认为是迄今为止所发现的油脂中最适合人体营养的油脂，在西方被誉为“液体黄金”、“植物油皇后”。开江县重视油橄榄种植，通过多年的努力，油橄榄的品种资源得到了有效的保护。目前，开江县是中国现存品种最多、品质最好的油橄榄品种资源库。2011年，通过国家权威粮油标准化委员会专家考察认定，“中国油橄榄之乡”落户开江。'
				},
				{
					image: require('../../assets/image/baier.png'),
					info:
						'开江自古以来就有养殖白鹅的习惯。开江白鹅是全国有名的优良地方水禽品种，具有个儿大、毛质好、产毛量高、肉质嫩、产蛋率高、生长快的鲜明特点，是食品和服装加工的优质原料。开江县白鹅常年饲养量在450万只以上，目前，开江多个乡镇均建有优质白鹅养殖基地，可年出栏白鹅500万只、鸭800万只。如今，开江白鹅已成为农产品地理标志产品。'
				},
				{
					image: require('../../assets/image/zhugengjiang.png'),
					info:
						'开江长岭土包寨村广泛种植着竹根姜，在这里种植竹根姜有着悠久的历史。土包寨的土质半泥半沙，既能渗水，又能保水，十分适合种植竹根姜。长岭竹根姜鲜嫩、无茎，脆生且长如竹节。因此有人云：“长岭山清水秀，土地肥沃，造化了又白又嫩又苗条的美女和竹根姜”。'
				},
				{
					image: require('../../assets/image/sancangzi.png'),
					info:
						'山苍子，是中国特有的香料植物资源之一，具有温肾健胃，行气散结的功效，可以用于治疗胃痛呕吐及无名肿毒等症。中国山苍子油年产量达2000余吨，为世界上最大的生产国和出口国，产品远销美、日、英、法、德、瑞士、荷兰等国，享誉国内外。山苍子在四川境内其他地方鲜为少见，是开江长岭镇独有的特色产品。其果实清香、纯正、风味独特。山苍子富含硒、锌等多种微量元素，既满足了现代人追求多品味的要求，又对人体健康大有裨益。山苍子可鲜吃，也可加工成山苍子油。山苍子油浅黄微透明，芳香无比，保质期长，具有天然的防腐作用，有“天下第一植物油”之称。'
				}
			]
		}
	},
	methods: {
		handlePrev() {
			this.currentIndex -= 1
			if (this.currentIndex < 0) {
				this.currentIndex = 0
			}
			this.sheetContent = this.sheetAction[this.currentIndex]
		},
		handleNext() {
			this.currentIndex += 1
			if (this.currentIndex >= 7) {
				this.currentIndex = 0
			}
			this.sheetContent = this.sheetAction[this.currentIndex]
		},
		lookMore() {
			this.actionState = true
			this.currentIndex = 0
			this.sheetContent = this.sheetAction[this.currentIndex]
		}
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
			.right-info-title {
				padding-top: 15px;
				font-size: 24px;
				font-family: 微软简楷体;
				font-weight: 400;
				line-height: 40px;
				text-indent: 20px;
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
			//width: calc(100% - 20px);
			//margin-left: 10px;
			padding: 0 15px;
			height: 250px;
			border-radius: 8px 8px 0 0;
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
			}
			.tel {
				font-size: 28px;
				font-weight: 400;
				color: #707070;
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
			background: url('../../assets/image/title-lookmore-white.png');
		}
	}
	.sheet-img {
		width: 100%;
		object-fit: cover;
	}
	.shet-action-content {
		font-size: 28px;
		font-family: Microsoft YaHei;
		font-weight: 400;
		line-height: 48px;
		color: #333333;
		text-indent: 20px;
	}
}
</style>
