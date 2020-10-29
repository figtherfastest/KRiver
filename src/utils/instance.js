import axios from 'axios'
import { Toast } from 'vant'
let instance = axios.create({
	timeout: 5000,
	baseUrl: process.env.VUE_APP_BASR_URL
})
instance.interceptors.request.use(
	config => {
		return config
	},
	err => {
		return Promise.reject(err)
	}
)

instance.interceptors.response.use(
	response => {
		if (response.data.code === '401') {
			Toast.fail('登录信息已过期')
			return response
		}
		if (response.data.code === '400') {
			Toast({ message: response.data.msg, icon: 'cross' })
			return response
		}
		return response
	},
	error => {
		if (error && error.response) {
			console.log(error)
			switch (error.response.status) {
				case 400:
					error.msg = '错误请求'
					break
				case 401:
					error.msg = '未授权，请重新登录'
					break
				case 403:
					error.msg = '拒绝访问'
					break
				case 404:
					error.msg = '请求错误,未找到该资源'
					break
				case 405:
					error.msg = '请求方法未允许'
					break
				case 408:
					error.msg = '请求超时'
					break
				case 500:
					error.msg = '服务器端出错'
					break
				case 501:
					error.msg = '网络未实现'
					break
				case 502:
					error.msg = '网络错误'
					break
				case 503:
					error.msg = '服务不可用'
					break
				case 504:
					error.msg = '网络超时'
					break
				case 505:
					error.msg = 'http版本不支持该请求'
					break
				default:
					error.msg = `连接错误${error.response.status}`
			}
		} else {
			error.msg = '连接到服务器失败'
		}
		Toast({
			message: error.msg,
			icon: 'cross'
		})
		return Promise.reject(error)
	}
)
export default instance
