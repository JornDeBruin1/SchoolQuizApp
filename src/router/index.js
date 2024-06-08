import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue';
import HomePage from '../views/HomePage.vue';
import QuizPage from '../views/QuizPage.vue';

const routes = [
	{
		path: '/',
		redirect: '/tabs/home',
	},
	{
		name: 'QuizView',
		path: '/tabs/quiz/:id',
		component: QuizPage,
	},
	{
		path: '/tabs/',
		component: TabsPage,
		children: [
			{
				path: '',
				redirect: '/tabs/home',
			},
			{
				path: 'home',
				component: () => import('@/views/HomePage.vue'),
			},
			{
				path: 'favorite',
				component: () => import('@/views/FavoritePage.vue'),
			},
			{
				path: 'setting',
				component: () => import('@/views/SettingPage.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
