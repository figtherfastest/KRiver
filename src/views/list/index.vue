<template>
	<div class="home">
		<div class="title">列表</div>
		<div class="lang">
			<span :class="{ active: active === 0 }" @click="changeen">中</span>/
			<span :class="{ active: active === 1 }" @click="changezh">EN</span>
		</div>
		<div class="list" @click="goGalary">魅力金山</div>
		<div class="list" @click="goCultural">传统文化</div>
		<div class="list" @click="goPlay">游玩指南</div>
		<div class="list" @click="goSenery">景区政务</div>
		<div class="list" @click="goTraval">出行锦囊</div>
		<div class="list" @click="go720">全景金山</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			active: 0
		}
	},
	methods: {
		goGalary() {
			this.$router.push({ path: '/glamour' })
		},
		goCultural() {
			this.$router.push({ path: '/cultural' })
		},
		goPlay() {
			this.$router.push({ path: '/play' })
		},
		goSenery() {
			this.$router.push({ path: '/senery' })
		},
		goTraval() {
			this.$router.push({ path: '/traval' })
		},
		go720() {
			window.location.href = 'https://360.at720.com/200710/?sid=m200710_0830&from=singlemessage'
		},
		changezh() {
			this.lang = '中文'
			this.$i18n.locale = 'zh'
			this.active = 1
		},
		changeen() {
			this.lang = 'english'
			this.$i18n.locale = 'en'
			this.active = 0
		}
	}
}
</script>
<style lang="less" scoped>
.home {
	width: calc(100% - 40px);
	margin-left: 20px;
	.title {
		font-size: 42px;
		line-height: 130px;
		text-align: center;
	}
	.lang {
		line-height: 80px;
		font-size: 35px;
		text-align: center;
		border-bottom: 1px solid #ebebeb;
	}
	.list {
		line-height: 120px;
		font-size: 38px;
		text-align: center;
		border-bottom: 1px solid #ebebeb;
	}
	.active {
		color: #bea470;
		font-size: 41px;
	}
}
</style>
