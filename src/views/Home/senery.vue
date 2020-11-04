<template>
	<div class="senery">
		<nav-title title="景区政务" />
		<div class="nav-img">
			<img src="../../assets/image/senery1.png" alt="" />
		</div>
		<div class="tabs">
			<div class="bars">景区公告</div>
			<div class="bars">景区活动</div>
			<div class="bars">新闻动态</div>
		</div>
		<div class="news-wrap">
			<div class="news">
				<img src="../../assets/image/senery2.png" class="avatar" />
				<div class="news-content">
					<div class="titles">新闻标题新闻标题新闻标题</div>
					<div class="time">2020-05-12</div>
					<div class="content">
						公告内容公告内容公告内容公告内容
					</div>
				</div>
			</div>
			<div class="news">
				<img src="../../assets/image/senery2.png" class="avatar" />
				<div class="news-content">
					<div class="titles">新闻标题新闻标题新闻标题</div>
					<div class="time">2020-05-12</div>
					<div class="content">
						公告内容公告内容公告内容公告内容
					</div>
				</div>
			</div>
			<div class="news">
				<img src="../../assets/image/senery2.png" class="avatar" />
				<div class="news-content">
					<div class="titles">新闻标题新闻标题新闻标题</div>
					<div class="time">2020-05-12</div>
					<div class="content">
						公告内容公告内容公告内容公告内容
					</div>
				</div>
			</div>
			<div class="news">
				<img src="../../assets/image/senery2.png" class="avatar" />
				<div class="news-content">
					<div class="titles">新闻标题新闻标题新闻标题</div>
					<div class="time">2020-05-12</div>
					<div class="content">
						公告内容公告内容公告内容公告内容
					</div>
				</div>
			</div>
		</div>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
export default {
	name: 'senery',
	components: {
		navTitle: () => import('../../components/nav-title'),
		footerNav: () => import('../../components/footer-nav')
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
			border: 1px solid red;
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
