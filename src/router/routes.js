import home from '../views/home'
import recommend from '../views/recommend'
import rankings from '../views/rankings'
import singer from '../views/singer/singer'
import search from '../views/search'
import view from '../views/view'
import singerView from '../views/singer/singer-view'
import login from '../views/user/login'
import regist from '../views/user/regist'
// import home from '../view/home.vue'
const routes = [
	{
		path: '/',
		redirect: '/login'
		// redirect: '/recommend'
	},
	{
		path: '/home',
		component: home,
		children: [
			{
				path: '',
				redirect: 'recommend'
			},
			{
				path: 'recommend',
				component: recommend,
				children: [
					{
						path: ':id',
						component: view
					}
				]
			},
			// 歌手
			{
				path: 'singer',
				name: 'singer',
				component: singer,
				children: [
					{
						path: 'view',
						name: 'view',
						component: view
					}
				]
			},
			{
				path: 'rankings',
				name: 'rankings',
				component: rankings
			},
			
			// 搜索
			{
				path: 'search',
				name: 'search',
				component: search
			}
		]
	},
	{
		path: '/login',
		name: 'login',
		component: login
	},
	{
		path: '/regist',
		name: 'regist',
		component: regist
	},
	// {
	// 	path: '/home',
	// 	name: 'home',
	// 	component: home
	// },
	// 推荐 
	// {
	// 	path: '/recommend',
	// 	name: 'recommend',
	// 	component: recommend,
	// 	children: [
	// 		{
	// 			path: ':id',
	// 			component: view
	// 		}
	// 	]
	// },
	// 排行
	
]

export default routes