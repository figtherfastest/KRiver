const homeRoutes = [
	{
		path: '',
		component: () => import('../../../components/layout'),
		redirect: { name: 'indexHome' },
		children: [
			{
				path: '/',
				name: 'indexHome',
				component: () => import('../index')
			}
		]
	},
	{
		path: '/glamour',
		name: 'glamour',
		component: () => import('../glamour')
	},
	{
		path: '/cultural',
		name: 'cultural',
		component: () => import('../cultural')
	},
	{
		path: '/play',
		name: 'play',
		component: () => import('../play')
	}
]
export default homeRoutes
