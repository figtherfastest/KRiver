const listRoutes = [
	{
		path: '',
		component: () => import('../../../components/layout'),
		redirect: { name: 'indexHome' },
		children: [
			{
				path: '/list',
				name: 'list',
				component: () => import('../index')
			}
		]
	}
]
export default listRoutes
