import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './plugins/full-import'
import plugin from './plugins'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: 'en',
	messages: {
		zh: require('./lang/zh'),
		en: require('./lang/en')
	}
})
Vue.use(plugin)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')
