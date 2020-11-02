const commentRoutes = [
	{
		path: '',
		component: () => import('../../../components/layout'),
		redirect: { name: 'comments' },
		children: [
			{
				path: 'comments',
				name: 'comments',
				component: () => import('../index')
			}
		]
	}
]
export default commentRoutes
