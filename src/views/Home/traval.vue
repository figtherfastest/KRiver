<template>
	<div class="traval">
		<nav-title title="出行锦囊" />
		<div class="nav-img">
			<img src="../../assets/image/traval2.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/jingqugaikuang.png" alt="" />
		</div>
		<div class="info-do">
			<div class="do-list">由省道202梁平到开江两日游</div>
			<div class="do-list">由省道202梁平到开江两日游</div>
			<div class="do-list">由省道202梁平到开江两日游</div>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/jingqugaikuang.png" alt="" />
		</div>
		<div class="history">
			<img src="../../assets/image/traval1.png" alt="" />
		</div>
		<div class="traval-state">
			<div class="state-title">
				<img src="../../assets/image/heng-zijiachuxing.png" alt="" />
			</div>
			<div class="state">
				路线一：成都→遂宁→南充→广安→邻水→达州→开江 （成都→成南高速→南广高速→广邻高速→邻垫高速
				→达渝高速→开江）<br />
				路线二：重庆→渝邻高速→达渝高速→达州→开江 （途经亭子、大风、麻柳、檀木、普安到开江县城）
			</div>
		</div>
		<div class="traval-state">
			<div class="state-title">
				<img src="../../assets/image/heng-gonggongjiaotongchuxing.png" alt="" />
			</div>
			<div class="state">
				路线一：成都乘动车至达州，达州西客站乘大巴至开江 <br />
				路线二：成都乘动车至达州，达州火车站乘火车至开江任市镇<br />
				路线三：重庆长途汽车站乘大巴直达开江 <br />
				路线四：重庆乘动车至达州，达州西客站乘大巴至开江
			</div>
		</div>
		<div class="traval-state">
			<div class="state-title">
				<img src="../../assets/image/heng-chuxingtishi.png" alt="" />
			</div>
			<div class="state">
				1.成都至达州动车，一天约25车次，最早出发时间8点09分，用 时约2.5小时。 <br />
				2.达州西客站至开江大巴，约1小时，票价31元。 <br />
				3.重庆至开江大巴，约3个半小时，票价97元。
			</div>
		</div>
		<div class="ope-food">
			<footer-nav></footer-nav>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/jingqugaikuang.png" alt="" />
		</div>
		<sige />
		<div class="foot-img"></div>
		<!--		<footer-nav></footer-nav>-->
	</div>
</template>

<script>
export default {
	name: 'tirval',
	components: {
		navTitle: () => import('../../components/nav-title'),
		footerNav: () => import('../../components/footer-nav'),
		sige: () => import('../../components/sige')
	}
}
</script>

<style scoped lang="less">
.traval {
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
	.info-do {
		width: calc(100% - 72px);
		margin-left: 36px;
		margin-top: 30px;
		.do-list {
			height: 82px;
			line-height: 82px;
			padding-left: 30px;
			margin-bottom: 25px;
			font-size: 28px;
			font-family: 微软简楷体;
			font-weight: 400;
			color: #1e1e1e;
			background: url('../../assets/image/tra.png') no-repeat;
			background-size: 100% 100%;
		}
	}
	.history {
		width: calc(100% - 136px);
		height: 784px;
		margin-left: 68px;
		margin-top: 20px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.traval-state {
		width: calc(100% - 84px);
		margin-left: 42px;
		margin-top: 50px;
		.state-title {
			width: 424px;
			height: 78px;
			object-fit: cover;
			margin: 0 auto;
		}
		.state {
			font-size: 24px;
			line-height: 32px;
			font-family: 微软简楷体;
			font-weight: 400;
			color: #1e1e1e;
			text-align: center;
			margin-top: 30px;
		}
	}
	.ope-food {
		margin-top: -250px;
	}
	.foot-img {
		height: 220px;
		background: url('../../assets/image/traval3.png') no-repeat;
		background-size: 100% 100%;
		margin-top: -100px;
	}
}
</style>
