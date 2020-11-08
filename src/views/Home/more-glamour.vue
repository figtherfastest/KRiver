<template>
	<div class="more-glamour">
		<div class="nav-img">
			<img src="../../assets/image/more1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-ziranjingdian.png" alt="" />
		</div>
		<div class="tabs">
			<div class="tab" v-for="(item, index) in tabState" :key="index" @click="changeTab(index, item)">
				<img :src="item.image[item.active]" />
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
		<action-sheet
			:actionTitle="actionTitle"
			v-if="actionState"
			v-model="actionState"
			@handleNext="handleNext"
			@handlePrev="handlePrev"
		>
			<div class="index-sheet-content">
				<img :src="actionContent.image" alt="" />
				<div class="sheet-content" v-html="actionContent.content"></div>
			</div>
		</action-sheet>
	</div>
</template>

<script>
export default {
	name: 'more-glamour',
	components: {
		footerNav: () => import('../../components/footer-nav'),
		actionSheet: () => import('../../components/action-shet')
	},
	data() {
		return {
			actionState: false,
			actionTitle: '',
			currentIndex: 0,
			actionContent: {},
			tabState: [
				{
					active: 1,
					name: '宝石湖',
					image: [
						require('../../assets/image/heng-baoshihu-white.png'),
						require('../../assets/image/heng-baoshihu.png')
					],
					content: {
						image: require('../../assets/image/glamour-lianhuashijie.png'),
						content:
							'从县城沿峨城大道，驱车数分钟，便可来到这个如世外桃源般的“莲花世界”。有诗云：“菡萏开天别样红，游香十里领清风，羽翎只在宁波渡，不落烟花世俗中。” “莲花世界”是市级乡村旅游提升发展示范项目之一和全省首批“省级示范农业主题公园”之一。\n' +
							'\n' +
							'“莲花世界”总面积约10平方公里，分为“月色荷塘”、“佛韵莲香”两大区域。其中，“月色荷塘”区以明朝古迹宝泉塔和宝塔坝战史陈列馆为依托，规模种植了6000亩莲藕（食用藕4000亩，观赏藕2000亩），配套建成望荷亭、13个休闲观景亭及宝塔坝新村文化广场；“佛韵莲香”区以千年古刹金山寺为依托，规模种植6000亩莲藕，精品打造了“佛韵莲香”旅游广场、莲花观景台、荷塘乐园体验区、木栈道和黄金包休闲长廊等旅游设施。'
					}
				},
				{
					active: 0,
					name: '飞云温泉',
					image: [
						require('../../assets/image/heng-feiyunwenquan-white.png'),
						require('../../assets/image/heng-feitianwenquan.png')
					],
					content: {
						image: require('../../assets/image/glamour-wenquan.png'),
						content:
							'飞云温泉 ，位于开江县城附近的飞云山，距县城9公里，公路从这里蜿蜒而过。温泉系国家石油钻探队于1980年钻出的一口自喷热水井，日流量1032立方米，水温47℃，为开江县得天独厚的地热资源。号称“川东第一烫”，“天下第二汤”。\n' +
							'\n' +
							'经科研部门检验温泉中含有适量的硫磺和其他矿物质，用其浴身，对湿疹等皮肤病以及半身不遂症有一定疗效。这里建起了温泉浴室，淋浴、盆浴、浴池任游客选用，自开放以来，专程前往沐浴者络绎不绝。\n' +
							'\n' +
							'温泉四周山峦起伏、绿树环绕、风光优美。紧靠川东第一大人工湖宝石湖和东山植物文化园，与佛教圣地金山寺等景点遥相呼应。温泉集医疗、冬游、会议和度假于一体，分设餐饮部、客房部、沐浴部、美发保健部、娱乐部、会议部、康疗中心，还建有鱼池、停车场、果园等，另配套有蒙古包、烤全羊等项目。'
					}
				},
				{
					active: 0,
					name: '黄金花海',
					image: [
						require('../../assets/image/heng-huangjinhuahai-white.png'),
						require('../../assets/image/heng-huangjinhuahai.png')
					],
					content: {
						image: require('../../assets/image/glamour-huahai.png'),
						content:
							'黄金花海坐落于开江普安镇新河村。占地面积约3000亩，是远近闻名的油菜花花海。尤其是到了春天，在这片平原上，油菜花盛开的时候，一眼望不到头的景象号称：万亩黄金花海！吸引了众多的油菜花爱好者来这里赏花，游览。和风吹拂，金波荡漾，花深似海，一种大气之美油然而生，站在重重叠叠、密密匝匝的花海中，会燃起您对自然的向往、对生活的热爱！'
					}
				},
				{
					active: 0,
					name: '峨眉山',
					image: [
						require('../../assets/image/heng-emeishan-white.png'),
						require('../../assets/image/heng-emeishan.png')
					],
					content: {
						image: require('../../assets/image/glamour-emeishan.png'),
						content:
							'峨眉山位于四川省达州市开江县与宣汉县交界处，距开江县城17公里、宣汉县城35公里、达州市主城区45公里。平均海拔960米，主峰大峨城山海拔1196米，侧峰小峨城山海拔1117米。周边场镇有开江县回龙镇、天师镇，宣汉县天生镇、七里乡。因有5000余亩的天然森林和竹林，故又被称为峨城竹海，是国家AAAA级旅游景区、省级森林公园。经由开江县与宣汉县双向打造，现双侧都建有盘山公路及健步登山道。原山顶遗址等古建筑物大部分位于开江县回龙镇一侧。\n' +
							'\n' +
							'峨城山峰高千纫，山势陡峻，巍峨挺拨，绵亘殊远，蜿蜒至大巴山脉，古为通往宣汉的驿道，史称“治西第一总隘。”西汉“舞阳侯樊哙兵驻峨城，就险筑城，遗址尚存”。有“一夫当关，万夫莫开”之势。古有“西峨眉、东峨城”之说。峨城山可“观云山雾海，奇景顿生；听月下松涛，空谷回荡；雨打竹林，脆声如琴；溪流作响，层峦叠嶂”。既是避暑胜地，更是天然氧吧，真乃一块难得的“风水宝地”'
					}
				},
				{
					active: 0,
					name: '明月湖',
					image: [
						require('../../assets/image/heng-mingyuehu-white.png'),
						require('../../assets/image/heng-mingyuehu.png')
					],
					content: {
						image: require('../../assets/image/glamour-mingyuehu.png'),
						content:
							'明月湖位于县城西南明月坝村，是一座灌溉、拦洪、供水的综合水利工程。始建于20世纪50年代，集雨面积14.5平方公里，其中水面占507亩，总库容701万立方米，水质检测为二级水质水面。水域宽阔、水质洁净、水流平缓、碧波荡漾，四面环山，海拔标高400米，林业面积300余亩，湖内周边森林覆盖率达88%，树木葱郁、曲径通幽。明月湖汇入六溪九润之水，蜿蜒约5km，两岸青山拥抱，群峰倒影，鸟鸣花放，小舟荡漾，风光旖施，四季宜人，湖周花香鸟语，亭榭翼然，湖面曲折幽深，各项旅游设施初步成形，是城区群众休闲观光、游泳、荡舟及垂钓的最近佳境，是开江四季皆宜的旅游胜地。'
					}
				},
				{
					active: 0,
					name: '莲花世界',
					image: [
						require('../../assets/image/heng-lianhuashijie-white.png'),
						require('../../assets/image/heng-lianhuashijie.png')
					],
					content: {
						image: require('../../assets/image/glamour-lianhuashijie.png'),
						content:
							'从县城沿峨城大道，驱车数分钟，便可来到这个如世外桃源般的“莲花世界”。有诗云：“菡萏开天别样红，游香十里领清风，羽翎只在宁波渡，不落烟花世俗中。” “莲花世界”是市级乡村旅游提升发展示范项目之一和全省首批“省级示范农业主题公园”之一。\n' +
							'\n' +
							'“莲花世界”总面积约10平方公里，分为“月色荷塘”、“佛韵莲香”两大区域。其中，“月色荷塘”区以明朝古迹宝泉塔和宝塔坝战史陈列馆为依托，规模种植了6000亩莲藕（食用藕4000亩，观赏藕2000亩），配套建成望荷亭、13个休闲观景亭及宝塔坝新村文化广场；“佛韵莲香”区以千年古刹金山寺为依托，规模种植6000亩莲藕，精品打造了“佛韵莲香”旅游广场、莲花观景台、荷塘乐园体验区、木栈道和黄金包休闲长廊等旅游设施。'
					}
				}
			]
		}
	},
	methods: {
		changeTab(index, val) {
			this.tabState[this.currentIndex].active = 0
			this.tabState[index].active = 1
			this.currentIndex = index
			this.actionState = true
			this.actionTitle = val.name
			this.actionContent = this.tabState[index].content
		},
		handlePrev() {
			this.tabState[this.currentIndex].active = 0
			this.currentIndex -= 1
			if (this.currentIndex < 0) {
				this.currentIndex = 5
			}
			this.tabState[this.currentIndex].active = 1
			this.actionTitle = this.tabState[this.currentIndex].name
			this.actionContent = this.tabState[this.currentIndex].content
		},
		handleNext() {
			this.tabState[this.currentIndex].active = 0
			this.currentIndex += 1
			if (this.currentIndex >= 6) {
				this.currentIndex = 0
			}
			this.tabState[this.currentIndex].active = 1
			this.actionTitle = this.tabState[this.currentIndex].name
			this.actionContent = this.tabState[this.currentIndex].content
		}
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
		position: relative;
		z-index: 100;
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
	.index-sheet-content {
		max-height: 800px;
		overflow: auto;
		img {
			max-width: 100%;
			object-fit: cover;
		}
		.sheet-content {
			text-indent: 15px;
			font-size: 28px;
			font-family: 微软简楷体;
			font-weight: 400;
			line-height: 50px;
			color: #333333;
		}
	}
}
</style>
