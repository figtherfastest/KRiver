<template>
	<div class="glamour">
		<nav-title title="魅力金山" />
		<div class="nav-img">
			<img src="../../assets/image/glamary1.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/jingqugaikuang.png" alt="" />
		</div>
		<div class="glamour-info">
			金山景区紧邻开江县城，位于开江县普安镇境内，幅员面积13.85平方公里，属浅丘地貌，山美水美，气候温和，物产丰富，宜居宜游，距达州市火车站50公里，距达州机场70公里，距万州港口175公里，距重庆280公里。达万高速穿境而过，交通便利。
			景区内旅游道路纵观全境，游客中心、商业中心、旅游标识标牌、智慧旅游系统、农家乐（乡村酒店）、生态停车场、旅游厕所等旅游基础设施布局科学合理，现有金山寺（四川省重点文物保护单位、国家AAA级旅游景区）、莲花世界、宝泉塔（四川省重点文物保护单位）、红色文化陈列室、露天观音、望荷亭等10多个景点。
			目前，金山景区基本建成了集自然景观与人文景观于一体的文化景区，实现了生态湿地保护、幸福美丽新村、乡村文化旅游的有机统一。先后举办全国新农村文化艺术展系列活动、四川省第七届、第八届乡村文化旅游节和连续五届“四川•开江荷花文化节”，两届自行车骑行赛和三届摄影大赛。每年来自重庆、成都、西安等地前来金山景区旅游观光游客络绎不绝，据统计近三年金山景区每年接待游客约61.33万人次。
		</div>
		<div class="glamour-foot">
			<img src="../../assets/image/glamary2.png" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'galmary',
	components: {
		navTitle: () => import('../../components/nav-title')
	}
}
</script>

<style scoped lang="less">
.glamour {
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
	.glamour-info {
		margin-top: 30px;
		padding: 0 30px;
		font-size: 24px;
		font-family: 微软简楷体;
		font-weight: 400;
		line-height: 42px;
		color: #333333;
		text-indent: 25px;
	}
	.glamour-foot {
		height: 260px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
