<template>
	<ion-page class="dark:bg-gray-800">
		<ion-header class="dark:bg-gray-800">
			<ion-toolbar :class="{ 'dark-background': isDarkModeEnabled }">
				<ion-buttons class="dark:bg-gray-800">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title class="dark:text-white">Quizzes</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true" class="dark:bg-gray-800">
			<HomeContainer
				v-for="quiz in quizzes"
				:key="quiz.id"
				:quiz="quiz"
				:favoriteQuizzes="favoriteQuizzes"
				@update-favorite="updateFavorite"
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
	import { ref, onMounted, computed } from 'vue';
	import quizzesData from '@/data/quiz.json';
	import HomeContainer from '@/components/HomeContainer.vue';

	const quizzes = ref(
		quizzesData.map((quiz) => {
			const favoriteQuizzes = JSON.parse(localStorage.getItem('favoriteQuizzes')) || [];
			quiz.isFavorite = favoriteQuizzes.includes(quiz.id);
			return quiz;
		})
	);
	const favoriteQuizzes = ref([]);

	// const favoriteQuizzesData = computed(() => {
	// 	return quizzes.value.filter((quiz) => favoriteQuizzes.value.has(quiz.id));
	// });
	const updateFavorite = (quizId) => {
		const quiz = quizzes.value.find((quiz) => quiz.id === quizId);
		if (quiz) {
			quiz.isFavorite = !quiz.isFavorite;
			if (quiz.isFavorite) {
				favoriteQuizzes.value.push(quiz.id);
			} else {
				const index = favoriteQuizzes.value.indexOf(quiz.id);
				if (index !== -1) {
					favoriteQuizzes.value.splice(index, 1);
				}
			}
			localStorage.setItem('quizzes', JSON.stringify(quizzes.value));
			localStorage.setItem('favoriteQuizzes', JSON.stringify(favoriteQuizzes.value));
		}
	};
	const isDarkModeEnabled = ref(false);

	onMounted(() => {
		//haal de quizzes uit de localstorage
		const storedFavoriteQuizzes = localStorage.getItem('favoriteQuizzes');
		if (storedFavoriteQuizzes) {
			favoriteQuizzes.value = JSON.parse(storedFavoriteQuizzes);
		}
		quizzes.value.forEach((quiz) => {
			quiz.isFavorite = favoriteQuizzes.value.includes(quiz.id);
		});

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
