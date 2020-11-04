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
	},
	{
		path: '/senery',
		name: 'senery',
		component: () => import('../senery')
	},
	{
		path: '/traval',
		name: 'traval',
		component: () => import('../traval')
	},
	{
		path: '/more/glamour',
		name: 'moreGlamour',
		component: () => import('../more-glamour')
	},
	{
		path: '/more/cultural',
		name: 'moreCultural',
		component: () => import('../more-cultural')
	}
	//	senery traval
]
export default homeRoutes
