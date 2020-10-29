import instance from '../utils/instance'

export default {
	install(Vue) {
		Vue.prototype.$get = (url, params) => {
			return new Promise((resolve, reject) => {
				instance
					.get(url, { params: params })
					.then(response => {
						return resolve(response.data)
					})
					.catch(err => {
						return reject(err)
					})
			})
		}
		Vue.prototype.$post = (url, params = {}) => {
			return new Promise((resolve, reject) => {
				instance
					.post(url, params)
					.then(
						response => {
							return resolve(response.data)
						},
						err => {
							return reject(err)
						}
					)
					.catch(errs => {
						return reject(errs)
					})
			})
		}
		Vue.prototype.$del = (url, params = {}) => {
			return new Promise((resolve, reject) => {
				instance.delete(url, { data: params }).then(
					response => {
						return resolve(response.data)
					},
					err => {
						return reject(err)
					}
				)
			})
		}
		Vue.prototype.$put = (url, params = {}) => {
			return new Promise((resolve, reject) => {
				instance.put(url, params).then(
					response => {
						resolve(response.data)
					},
					err => {
						reject(err)
					}
				)
			})
		}
	}
}
