<template>
	<div class="nav-title">
		{{ title }}
		<!--		<i class="iconfont iconzuojiantou" v-show="showNav" @click="goBack"></i>-->
	</div>
</template>

<script>
export default {
	name: 'nav-title',
	props: {
		title: {
			type: String,
			default: '魅力金山'
		},
		showNav: {
			type: Boolean,
			default: true
		}
	},

	methods: {
		goBack() {
			this.$router.back()
		}
	}
}
</script>

<style scoped lang="less">
.nav-title {
	width: 100%;
	height: 120px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	font-family: PingFang SC;
	font-weight: 400;
	color: #707070;
	position: relative;
	.iconfont {
		position: absolute;
		left: 20px;
		font-size: 43px;
	}
}
</style>
