<template>
	<ion-page class="dark:bg-gray-800">
		<ion-header class="dark:bg-gray-800">
			<ion-toolbar :class="{ 'dark-background': isDarkModeEnabled }">
				<ion-buttons class="dark:bg-gray-800">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title class="dark:text-white">Favorites</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true" class="dark:bg-gray-800">
			<FavoriteContainer
				v-for="quizzes in quiz"
				:key="quizzes.id"
				:quizzes="favoriteQuizzes"
				:quiz="quizzes"
			/>
		</ion-content>
	</ion-page>
</template>

<script setup>
	import {
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonButtons,
		IonMenuButton,
	} from '@ionic/vue';
	import { ref, computed, onMounted } from 'vue';
	import quiz from '@/data/quiz.json';
	import { useStore } from 'vuex';
	import FavoriteContainer from '../components/FavoriteContainer.vue';

	const store = useStore();

	const favoriteQuizzes = computed(() => {
		return store.state.favoriteQuizzes.map((id) => quiz.find((q) => q.id === id));
	});

	const isDarkModeEnabled = ref(false);
	onMounted(() => {
		//haal de dark mode uit de localstorage
		const savedDarkModeSetting = JSON.parse(localStorage.getItem('darkMode'));
		if (savedDarkModeSetting !== null) {
			isDarkModeEnabled.value = savedDarkModeSetting;
		}
	});
</script>
<style>
	.dark-background {
		--background: none;
	}
</style>
