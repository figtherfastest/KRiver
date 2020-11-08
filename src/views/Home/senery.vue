<template>
	<div class="senery">
		<div class="nav-img">
			<img src="../../assets/image/senery1.png" alt="" />
		</div>
		<div class="tabs">
			<div class="bars" v-for="(item, index) in tabState" :key="index" @click="changeTab(index)">
				<img :src="item.image[item.active]" />
			</div>
		</div>
		<div class="news-wrap">
			<div class="news" v-for="(item, index) in newsContent" :key="index">
				<img src="../../assets/image/senery2.png" class="avatar" />
				<div class="news-content">
					<div class="titles">{{ item.title }}</div>
					<div class="time">{{ item.time }}</div>
					<div class="content">
						{{ item.content }}
					</div>
				</div>
			</div>
		</div>
		<footer-nav style="margin-top: -100px"></footer-nav>
	</div>
</template>

<script>
export default {
	name: 'senery',
	data() {
		return {
			newsContent: [],
			tabState: [
				{
					active: 0,
					content: [
						{
							title: '开江县金山景区招聘劳务派遣人员笔试成绩单',
							content:
								'根据《开江县金山景区公开招聘公告》规定和工作安排，现将公开考试招聘劳务派遣人员总成绩及排名情况和体检工作有关事项通告如下：',
							time: '2020年6月17日'
						},
						{
							title:
								'开江县旅游景区管理服务中心关于公开考试招聘劳务派遣人员总成绩及排名情况和体检工作有关事项的通告',
							content:
								'根据《开江县金山景区公开招聘公告》规定和工作安排，现将公开考试招聘劳务派遣人员总成绩及排名情况和体检工作有关事项通告如下：',
							time: '2020年6月29日'
						}
					],
					image: [
						require('../../assets/image/heng-jingqugonggao-white.png'),
						require('../../assets/image/heng-jingqugonggao.png')
					]
				},
				{
					active: 0,
					image: [
						require('../../assets/image/heng-jingquhuodong-white.png'),
						require('../../assets/image/heng-jingquhuod.png')
					],
					content: [
						{
							title: '特色餐饮！开江品牌！荷花节吃这个“味道”！',
							content:
								'为切实保障开江县第七届荷花节及小龙虾节顺利召开，打造开江本地特色餐饮品牌文化，提升烹调专业从业人员的综合素质及职业技能',
							time: '2020年6月29日'
						}
					]
				},
				{
					active: 0,
					image: [
						require('../../assets/image/heng-xinwendongtai-white.png'),
						require('../../assets/image/heng-xinwendongtai.png')
					],
					content: [
						{
							title: '全省亮点！未来开江“稻田+”产业将成全国各地游客休闲好去处',
							content:
								'6月的巴渠大地，绿意盎然，步步美景。位于开江县任市镇竹溪村的“稻田＋”现代农业园区，占地面积3000余亩',
							time: '2020年6月23日'
						}
					]
				}
			],
			currentIndex: 0
		}
	},
	components: {
		footerNav: () => import('../../components/footer-nav')
	},
	created() {
		this.tabState[0].active = 1
		this.currentIndex = 0
		this.newsContent = this.tabState[0].content
	},
	methods: {
		changeTab(index) {
			this.tabState[this.currentIndex].active = 0
			this.tabState[index].active = 1
			this.newsContent = this.tabState[index].content
			this.currentIndex = index
		}
	}
}
</script>

<style scoped lang="less">
.senery {
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
		width: calc(100% - 84px);
		margin-left: 42px;
		display: flex;
		justify-content: space-between;
		margin-top: 30px;
		.bars {
			width: 206px;
			height: 54px;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.news-wrap {
		margin-top: 60px;
		width: calc(100% - 82px);
		margin-left: 42px;
		.news {
			height: 164px;
			border: 1px solid #c0a85a;
			box-sizing: border-box;
			padding: 15px;
			display: flex;
			justify-content: flex-start;
			margin-bottom: 36px;
			.avatar {
				height: 130px;
				object-fit: cover;
			}
			.news-content {
				width: 425px;
				margin-left: 10px;
				.titles {
					font-size: 28px;
					font-weight: 400;
					line-height: 30px;
					color: #1e1e1e;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.time {
					font-size: 24px;
					font-weight: 400;
					line-height: 32px;
					margin-top: 13px;
					color: #1e1e1e;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.content {
					font-size: 24px;
					font-weight: 400;
					line-height: 24px;
					color: #1e1e1e;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					margin-top: 20px;
				}
			}
		}
	}
}
</style>
