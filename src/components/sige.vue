<template>
	<div class="sige">
		<div class="list center" @click="sigeClick('piaowu')">
			<img src="../assets/image/piaowuxinxi.png" />
		</div>
		<div class="list center" @click="sigeClick('rexian')">
			<img src="../assets/image/rexiandianhua.png" />
		</div>
		<div class="list center" @click="sigeClick('jiaotong')">
			<img :src="jiaotong" />
		</div>
		<div class="list center" @click="sigeClick('luyou')">
			<img :src="luyou" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'sige',
	data() {
		return {
			name: require('../assets/image/rexiandianhua.png')
		}
	},
	props: {
		jiaotong: {
			type: String,
			default: require('../assets/image/jiaotonggonglue.png')
		},
		luyou: {
			type: String,
			default: require('../assets/image/luyougongluo.png')
		}
	},
	methods: {
		sigeClick(val) {
			this.$emit('hanndleSige', val)
		}
	}
}
</script>

<style scoped lang="less">
.sige {
	width: calc(100% - 140px);
	margin-left: 70px;
	height: 500px;
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.list {
		width: 50%;
		height: 250px;
	}
}
</style>
