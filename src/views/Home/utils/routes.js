const homeRoutes = [
	{
		path: '',
		component: () => import('../../../components/layout'),
		redirect: { name: 'indexHome' },
		children: [
			{
				path: '/',
				name: 'indexHome',
				component: () => import('../index'),
				meta: { title: '开江官网' }
			}
		]
	},
	{
		path: '/glamour',
		name: 'glamour',
		component: () => import('../glamour'),
		meta: { title: '魅力开江' }
	},
	{
		path: '/cultural',
		name: 'cultural',
		component: () => import('../cultural'),
		meta: { title: '传统文化' }
	},
	{
		path: '/play',
		name: 'play',
		component: () => import('../play'),
		meta: { title: '游玩指南' }
	},
	{
		path: '/senery',
		name: 'senery',
		component: () => import('../senery'),
		meta: { title: '景区政务' }
	},
	{
		path: '/traval',
		name: 'traval',
		component: () => import('../traval'),
		meta: { title: '出行锦囊 ' }
	},
	{
		path: '/more/glamour',
		name: 'moreGlamour',
		component: () => import('../more-glamour'),
		meta: { title: '魅力金山' }
	},
	{
		path: '/more/cultural',
		name: 'moreCultural',
		component: () => import('../more-cultural'),
		meta: { title: '传统文化' }
	}
]
export default homeRoutes
