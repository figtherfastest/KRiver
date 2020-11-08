<template>
	<div class="traval">
		<div class="nav-img">
			<img src="../../assets/image/traval2.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/xianlutuijian.png" alt="" />
		</div>
		<div class="info-do">
			<div class="do-list">{{ $t('lang.travalState1') }}</div>
			<div class="do-list">{{ $t('lang.travalState2') }}</div>
			<div class="do-list">{{ $t('lang.travalState3') }}</div>
			<div class="do-list">{{ $t('lang.travalState4') }}</div>
			<div class="do-list">{{ $t('lang.travalState5') }}</div>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-jiaotonggonglve.png" alt="" />
		</div>
		<footer-nav style="margin-top: -180px"></footer-nav>
		<div class="history">
			<img src="../../assets/image/traval1.png" alt="" />
		</div>
		<div class="traval-state">
			<div class="state-title">
				<img src="../../assets/image/heng-zijiachuxing.png" alt="" />
			</div>
			<div class="state" v-html="$t('lang.travalZijia')"></div>
		</div>
		<div class="traval-state">
			<div class="state-title">
				<img src="../../assets/image/heng-gonggongjiaotongchuxing.png" alt="" />
			</div>
			<div class="state" v-html="$t('lang.travalGonggjiaot')"></div>
		</div>
		<div class="traval-state">
			<div class="state-title">
				<img src="../../assets/image/heng-chuxingtishi.png" alt="" />
			</div>
			<div class="state" v-html="$t('lang.travalChuxinmgtishi')"></div>
		</div>
		<div class="ope-food">
			<footer-nav></footer-nav>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-chuxingfuwu.png" alt="" />
		</div>
		<sige :jiaotong="jiaotong" :luyou="luyou" @hanndleSige="hanndleSige" />
		<div class="foot-img"></div>
		<action-sheet
			:prevState="false"
			nextText="关闭"
			:actionTitle="actionTitle"
			v-if="actionState"
			@handleNext="handleNext"
		>
			<div class="index-sheet-content" v-html="actionContent"></div>
		</action-sheet>
	</div>
</template>

<script>
export default {
	name: 'tirval',
	data() {
		return {
			actionState: false,
			actionTitle: '',
			actionContent: '',
			jiaotong: require('../../assets/image/luyougongluo.png'),
			luyou: require('../../assets/image/wenxingtishi.png')
		}
	},
	components: {
		actionSheet: () => import('../../components/action-shet'),
		footerNav: () => import('../../components/footer-nav'),
		sige: () => import('../../components/sige')
	},
	methods: {
		handleNext() {
			this.actionState = false
		},
		hanndleSige(val) {
			if (val === 'piaowu') {
				this.actionTitle = '票务信息'
				this.actionContent = this.$t('lang.piaowuxinxi')
			} else if (val === 'rexian') {
				this.actionTitle = '热线电话'
				this.actionContent = this.$t('lang.rexiandianhua')
			} else if (val === 'jiaotong') {
				this.actionTitle = '景区服务点'
				this.actionContent = ''
				return false
			} else if (val === 'luyou') {
				this.actionTitle = '温馨提示'
				this.actionContent = ''
				return false
			}
			this.actionState = true
		}
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
		height: 170px;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.info-do {
		width: calc(100% - 72px);
		margin-left: 36px;
		margin-top: 30px;
		.do-list {
			padding: 10px 30px;
			line-height: 50px;
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
		padding: 12px;
		border: 4px solid #c0a85a;
		box-sizing: border-box;
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
			line-height: 40px;
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
	.index-sheet-content {
		font-size: 28px;
		font-family: 微软简楷体;
		font-weight: 400;
		line-height: 50px;
		color: #333333;
		max-height: 800px;
		overflow: auto;
	}
}
</style>
