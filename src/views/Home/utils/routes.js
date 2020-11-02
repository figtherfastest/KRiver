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
	}
]
export default homeRoutes
