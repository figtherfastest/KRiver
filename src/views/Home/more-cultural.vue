<template>
	<div class="more-cultural">
		<div class="nav-img">
			<img src="../../assets/image/cultural1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-minghjianbiaoyanh.png" alt="" />
		</div>
		<div class="tabs">
			<div class="tab" v-for="(item, index) in tabState" :key="index" @click="changeTab(index, item)">
				<img :src="item.image[item.active]" />
			</div>
		</div>
		<footerNav class="nav"></footerNav>
		<div class="title-nav">
			<img src="../../assets/image/shougongjiyi.png" alt="" />
		</div>
		<div class="left-band band"></div>
		<div class="right-band band"></div>
		<footerNav class="nav"></footerNav>
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
	name: 'more-cultural',
	components: {
		footerNav: () => import('../../components/footer-nav'),
		actionSheet: () => import('../../components/action-shet')
	},
	created() {
		this.tabState[0].active = 1
		this.currentIndex = 0
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
					name: '开江拗棒',
					image: [
						require('../../assets/image/heng-kaijiangaobang-white.png'),
						require('../../assets/image/heng-kaijiangaobang.png')
					],
					content: {
						image: require('../../assets/image/cultural-kaijiangwubang.png'),
						content: this.$t('lang.kaijiangaobang')
					}
				},
				{
					active: 0,
					name: '薅秧歌',
					image: [
						require('../../assets/image/heng-haoyangge-white.png'),
						require('../../assets/image/heng-haoyangge.png')
					],
					content: {
						image: require('../../assets/image/cultural-haoyangge.png'),
						content: this.$t('lang.haoyangge')
					}
				},
				{
					active: 0,
					name: '舞龙灯',
					image: [
						require('../../assets/image/heng-wulongdeng-white.png'),
						require('../../assets/image/heng-wulongdeng.png')
					],
					content: {
						image: require('../../assets/image/cultrral-wulongdeng.png'),
						content: this.$t('lang.wulongdeng')
					}
				},
				{
					active: 0,
					name: '水族闹春',
					image: [
						require('../../assets/image/heng-shuizunaochong-white.png'),
						require('../../assets/image/heng-shuizunaochong.png')
					],
					content: {
						image: require('../../assets/image/cultural-shuzunaochong.png'),
						content: this.$t('lang.shuizunaochun')
					}
				},
				{
					active: 0,
					name: '开江金钱板',
					image: [
						require('../../assets/image/heng-kaijiangjinqianban-white.png'),
						require('../../assets/image/heng-kaijiangjinqianban.png')
					],
					content: {
						image: require('../../assets/image/cultural-kaijiangjinqianban.png'),
						content: this.$t('lang.kaijiangjinqianban')
					}
				},
				{
					active: 0,
					name: '开江盘歌',
					image: [
						require('../../assets/image/heng-kaijiangpange-white.png'),
						require('../../assets/image/heng-kaijiangpange.png')
					],
					content: {
						image: require('../../assets/image/cultural-pange.png'),
						content: this.$t('lang.kaijiangpange')
					}
				},
				{
					active: 0,
					name: '石工号子',
					image: [
						require('../../assets/image/heng-shigonghaozi-white.png'),
						require('../../assets/image/heng-shigonghaozi.png')
					],
					content: {
						image: require('../../assets/image/cultural-shigong.png'),
						content: this.$t('lang.shigonghaozi')
					}
				},
				{
					active: 0,
					name: '开江情歌',
					image: [
						require('../../assets/image/heng-kaijiangqingge-white.png'),
						require('../../assets/image/heng-kaijiangqingge.png')
					],
					content: {
						image: require('../../assets/image/cultural-kaijiangqingge.png'),
						content: this.$t('lang.kaipanqingge')
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
				this.currentIndex = 7
			}
			this.tabState[this.currentIndex].active = 1
			this.actionTitle = this.tabState[this.currentIndex].name
			this.actionContent = this.tabState[this.currentIndex].content
		},
		handleNext() {
			this.tabState[this.currentIndex].active = 0
			this.currentIndex += 1
			if (this.currentIndex >= 8) {
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
	.nav {
		margin-top: -150px;
		z-index: -10;
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
