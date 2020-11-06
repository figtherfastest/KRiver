import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import './plugins/full-import'
import plugin from './plugins'

// import i18n from './lang'
// import { Local } from '@/lang//vantLocale.js'
// Vue.prototype.$Local = Local

// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
Vue.use(plugin)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
