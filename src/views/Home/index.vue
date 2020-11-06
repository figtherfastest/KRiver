<template>
	<div class="home">
		<div class="home-img">
			<img src="../../assets/image/index-avatar.png" alt="" />
			<van-notice-bar class="notic" left-icon="volume-o" color="#C0A85A" background="none" :text="noticText" />
		</div>
		<div class="tab-wrap">
			<div class="tab" @click="goGalary">
				<img src="../../assets/image/index-meilijinshan.png" alt="" />
			</div>
			<div class="tab" @click="goCultural">
				<img src="../../assets/image/index-chuantongwenhua.png" alt="" />
			</div>
			<div class="tab" @click="goPlay">
				<img src="../../assets/image/index-youwanzhinan.png" alt="" />
			</div>
			<div class="tab" @click="goSenery">
				<img src="../../assets/image/index-jingquzhengwu.png" alt="" />
			</div>
			<div class="tab" @click="goTraval">
				<img src="../../assets/image/index-chuxingjinnang.png" alt="" />
			</div>
			<div class="tab" @click="go720">
				<img src="../../assets/image/index-quanjingjinshan.png" alt="" />
			</div>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/news.png" alt="" />
		</div>
		<div class="ope-swipe">
			<van-swipe class="my-swipe" :autoplay="3000000" indicator-color="white">
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/taohua.png" alt="" />
					</div>
					<div class="info">
						<div class="content">
							77
						</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/taohua.png" alt="" />
					</div>
					<div class="info">
						<div class="content">
							66
						</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
				<van-swipe-item>
					<div class="img">
						<img src="../../assets/image/taohua.png" alt="" />
					</div>
					<div class="info">
						<div class="content">
							content
						</div>
						<div class="time">2020-12-02</div>
					</div>
				</van-swipe-item>
			</van-swipe>
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-jingqugaikuang.png" alt="" />
		</div>
		<div class="recommend-img">
			<img src="../../assets/image/home1.png" alt="" />
		</div>
		<div class="recommend">
			金山景区是开江县重点推进打造的“AAAA”级景区。景区紧邻开江县城，位于开江县普安镇境内，规划总面积300.56公顷，总体布局为：二区、一带、一中心。即金山寺佛教文化区、旅游农业休闲观光区、金山森林休闲度假带、映月湖休闲娱乐中心。
			目前，金山景区基本建成了集自然景观与人文景观于一体的文化景区，实现了生态湿地保护、幸福美丽新村、乡村文化旅游的有机统
		</div>
		<div class="video-ope">
			<!--			<video src="" controls="controls"></video>-->
		</div>
		<div class="ink-img">
			<img src="../../assets/image/home2.png" alt="" />
		</div>
		<div class="title-nav">
			<img src="../../assets/image/title-chuxingjingnang.png" alt="" />
		</div>
		<sige></sige>
		<div class="ink2-img">
			<img src="../../assets/image/home3.png" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			noticText: ''
		}
	},
	created() {
		this.getNotic()
	},
	components: {
		sige: () => import('../../components/sige')
	},
	methods: {
		getNotic() {
			this.$get('http://47.106.212.101:8080/webend/notice/last/notice').then(res => {
				this.noticText = res.data.noticeContent
			})
		},
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
		}
		//
	}
}
</script>
<style lang="less">
.home {
	width: 100%;
	height: 100%;
	overflow: auto;
	.home-img {
		height: 438px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		position: relative;
		img {
			width: 100%;
			object-fit: cover;
		}
		.notic {
			width: 670px;
			position: absolute;
			top: 20px;
			left: 20px;
		}
	}
	.tab-wrap {
		padding: 76px 40px 20px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		.tab {
			width: 190px;
			height: 72px;
			box-sizing: border-box;
			margin-right: 48px;
			margin-bottom: 40px;
			&:nth-child(3n) {
				margin-right: 0;
			}
		}
	}
	.title-nav {
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30px;
	}
	.ope-swipe {
		width: calc(100% - 40px);
		margin-left: 20px;
		background: #ffffff;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.16);
		border-radius: 8px;
		margin-top: 30px;
		overflow: hidden;
		margin-bottom: 50px;
		.img {
			height: 250px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.info {
			height: 90px;
			padding: 15px;
			.content {
				height: 24px;
				line-height: 24px;
				font-size: 32px;
				font-weight: 400;
				color: #707070;
				padding-top: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.time {
				font-size: 32px;
				font-weight: 400;
				color: #707070;
				padding-top: 13px;
			}
		}
	}
	.recommend-img {
		width: calc(100% - 40px);
		margin-left: 20px;
		height: 212px;
		margin-top: 30px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.recommend {
		width: calc(100% - 40px);
		margin-left: 20px;
		margin-top: 30px;
		font-size: 0.32rem;
		font-family: 微软简楷体;
		font-weight: 400;
		line-height: 0.56rem;
		color: #333333;
		text-indent: 0.33333rem;
	}
	.video-ope {
		width: calc(100% - 40px);
		margin-left: 20px;
		height: 406px;
		margin-top: 30px;
		border-radius: 8px;
		overflow: hidden;
		background: url('../../assets/image/meinv.png') no-repeat;
		background-size: 100% 100%;
		video {
			width: 100%;
			height: 100%;
		}
	}
	.ink-img {
		width: calc(100% - 40px);
		margin-left: 20px;
		height: 168px;
		margin-top: -20px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.ink2-img {
		width: calc(100% - 40px);
		margin-left: 20px;
		height: 220px;
		margin-top: 20px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.basic-info {
		width: calc(100% - 40px);
		margin: 50px 20px 0 20px;
		height: 400px;
		background: red;
	}
}
</style>
