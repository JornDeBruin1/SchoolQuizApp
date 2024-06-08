import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createStore } from 'vuex';
import storeConfig from './store/store.js';
import { IonicVue } from '@ionic/vue';
import useDarkMode from './useDarkMode';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
// import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/tailwind.css';

import './registerServiceWorker';

const store = createStore(storeConfig); // Create Vuex store
const app = createApp(App).use(IonicVue).use(router).use(store);

const { isDarkModeEnabled, toggleDarkMode } = useDarkMode();

app.provide('isDarkModeEnabled', isDarkModeEnabled);
app.provide('toggleDarkMode', toggleDarkMode);

router.beforeEach((to, from, next) => {
	// Load favorite quizzes from local storage into Vuex store
	const storedFavoriteQuizzes = localStorage.getItem('favoriteQuizzes');
	if (storedFavoriteQuizzes) {
		store.dispatch('loadFavorites', JSON.parse(storedFavoriteQuizzes));
	}
	next();
});

router.isReady().then(() => {
	app.mount('#app');
});
