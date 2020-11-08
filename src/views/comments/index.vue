<template>
	<div class="home">
		<van-form @submit="onSubmit" label-width="60px">
			<van-field
				readonly
				clickable
				name="picker"
				:value="type"
				label="类型"
				placeholder="点击选择类型"
				:rules="[{ required: true, message: '请选择类型' }]"
				@click="showPicker = true"
			/>
			<van-field
				v-model="name"
				label="用户名："
				placeholder="用户名"
				:rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
				v-model="photo"
				label="密码："
				placeholder="电话"
				:rules="[{ required: true, message: '请填写电话号码' }]"
			/>
			<van-field
				v-model="email"
				label="邮箱："
				placeholder="邮箱"
				:rules="[{ required: true, message: '请填写邮箱' }]"
			/>
			<van-field
				v-model="art"
				type="textarea"
				rows="3"
				autosize
				label="内容："
				placeholder="内容"
				:rules="[{ required: true, message: '请填写内容' }]"
			/>
			<div class="file">
				<div class="file-lable">附件</div>
				<div>
					<van-uploader v-model="fileList" />
				</div>
			</div>
			<div style="width: 200px;height:80px;  line-height: 80px; margin: 36px auto;">
				<van-button round block type="info" native-type="submit">
					提交
				</van-button>
			</div>
		</van-form>
		<van-popup v-model="showPicker" position="bottom">
			<van-picker show-toolbar :columns="pickColumn" @confirm="onPickConfirm" @cancel="showPicker = false" />
		</van-popup>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			type: '',
			name: '',
			photo: '',
			email: '',
			art: '',
			fileList: [],
			showPicker: false,
			pickColumn: ['景观类', '卫生类', '停车场类', '服务', '消费', '其他']
		}
	},
	methods: {
		onSubmit() {
			let file = []
			console.log(this.fileList)
			this.fileList.forEach(res => {
				file.push(res.content)
			})
			let params = {
				file: file,
				type: this.type,
				name: this.name,
				photo: this.photo,
				email: this.email,
				art: this.art
			}
			this.$post('http://120.25.226.43:8080/webend/notice/offerAdd', params).then(res => {
				if (res.code === 200) {
					this.$toast('反馈成功')
				}
			})
		},
		onPickConfirm(val) {
			this.type = val
			this.showPicker = false
		}
	}
}
</script>
<style lang="less">
.van-cell {
	.van-cell__value {
		height: 100px;
		display: flex;
		align-items: center;
	}
	.van-cell__title {
		span {
			line-height: 100px;
		}
	}
}
.file {
	height: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	.file-lable {
		width: 90px;
		text-align: center;
		height: 100px;
		line-height: 100px;
		color: #646566;
	}
}
</style>
