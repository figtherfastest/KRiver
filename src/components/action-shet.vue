<template>
	<div class="action-sheet" @click="outerClose($event)" v-if="ActionSheetState">
		<div class="action-content" ref="actionContent">
			<div class="action-header">
				<span class="prev qes" v-show="prevState" @click="handlePrev">{{ prveText }}</span>
				{{ actionTitle }}
				<span class="next qes" v-show="nextState" @click="handleNext">{{ nextText }}</span>
			</div>
			<div class="content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'action-sheet',
	data() {
		return {
			ActionSheetState: true
		}
	},
	props: {
		actionTitle: {
			type: String,
			default: ''
		},
		prveText: {
			type: String,
			default: '上一页'
		},
		prevState: {
			type: Boolean,
			default: true
		},
		nextText: {
			type: String,
			default: '下一页'
		},
		nextState: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		handlePrev() {
			this.$emit('handlePrev')
		},
		handleNext() {
			this.$emit('handleNext')
		},
		outerClose(event) {
			if (event.target.contains(this.$refs['actionContent'])) {
				this.$emit('input', false)
			}
		}
	}
}
</script>

<style scoped lang="less">
.action-sheet {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: 200;
	.action-content {
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		.action-header {
			width: 100%;
			height: 90px;
			font-size: 32px;
			font-family: Segoe UI;
			font-weight: 600;
			color: #323233;
			border-bottom: 1px solid #dadada;
			border-radius: 40px 40px 0 0;
			background: white;
			text-align: center;
			line-height: 90px;
			position: relative;
			.qes {
				font-size: 28px;
				font-family: Segoe UI;
				font-weight: 400;
				color: #1989fa;
				padding-left: 38px;
				line-height: 90px;
			}
			.prev {
				position: absolute;
				left: 20px;
			}
			.next {
				padding-right: 38px;
				line-height: 90px;
				position: absolute;
				right: 20px;
			}
		}
		.content {
			background: white;
			padding: 30px;
			box-sizing: border-box;
		}
	}
}
</style>
