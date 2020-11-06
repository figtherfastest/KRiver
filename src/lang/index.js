import Vue from 'vue'

import VueI18n from 'vue-i18n'

import en from './en'

import zh from './zh'

// import zhCHT from './zhCHT'

Vue.use(VueI18n)

const messages = {
	en: {
		...en
	},
	zhCN: {
		...zh
	}
	// zhCHT: {

	// 	...zhCHT
	// }
}

const i18n = new VueI18n({
	locale: localStorage.getItem('language') || 'zhCN', // set locale
	messages // set locale messages
})

export default i18n
