import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from '../views/Home/utils/routes'
import listRoutes from '../views/list/utils/routes'
import commentRoutes from '../views/comments/utils/routes'

Vue.use(VueRouter)

const routes = [...homeRoutes, ...listRoutes, ...commentRoutes]

const router = new VueRouter({
	routes
})
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title
	}
	next()
})

export default router
