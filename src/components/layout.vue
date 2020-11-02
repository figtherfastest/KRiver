<template>
	<div class="layout">
		<div class="header">
			<van-nav-bar title="标题" :left-arrow="false" />
		</div>
		<div class="content">
			<router-view />
		</div>
		<div class="footer">
			<van-tabbar v-model="active" inactive-color="#1E1E1E" active-color="#C0A85A" route>
				<van-tabbar-item icon="bars" to="/list">列表</van-tabbar-item>
				<van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
				<van-tabbar-item icon="comment" to="/comments">意见反馈</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
export default {
	name: 'layout',
	data() {
		return {
			active: 1
		}
	}
}
</script>

<style lang="less">
.layout {
	width: 100%;
	height: 100%;
	.header {
		height: 120px;
		.van-nav-bar {
			height: 120px;
			.van-nav-bar__arrow {
				font-size: 40px;
			}
			.van-nav-bar__title {
				font-size: 40px;
				color: #707070;
			}
		}
	}
	.content {
		width: 100%;
		height: calc(100% - 150px);
	}
	.footer {
		position: absolute;
		bottom: 0;
		left: 0;
		background: red;
	}
	.van-tabbar {
		height: 80px;
	}
	.van-tabbar-item__icon {
		font-size: 50px;
	}
	.van-tabbar-item__text {
		font-size: 25px;
	}
}
</style>
