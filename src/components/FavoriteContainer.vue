<template>
	<ion-content :class="{ 'dark-content': isDarkModeEnabled }">
		<div>
			<h2 class="dark:text-white m-0 py-5 flex justify-center text-2xl">
				Favorite Quizzes
			</h2>
		</div>
		<div
			class="w-full md:flex md:justify-center dark:bg-gray-900"
			v-if="favoriteQuizzes.length > 0"
		>
			<ion-card
				v-for="quiz in favoriteQuizzes"
				:key="quiz.id"
				@click="navigateToQuiz(quiz.id)"
				class="dark:bg-gray-800 m-0 py-6"
			>
				<img class="p-4" :src="quiz.img" alt="" />
				<ion-card-header class="dark:bg-gray-800">
					<div class="dark:bg-gray-800">
						<ion-card-title class="dark:text-white">{{ quiz.name }}</ion-card-title>
					</div>
					<ion-card-subtitle class="dark:text-white">{{ quiz.name }}</ion-card-subtitle>
				</ion-card-header>
				<ion-card-content class="flex dark:bg-gray-800">
					<div class="w-1/2 dark:text-white">{{ quiz.questions.length }} questions</div>

					<div class="w-1/2 dark:bg-gray-800">
						<div @click.stop="removeFromFavorites(quiz)">
							<ion-icon
								class="text-[20px]"
								aria-hidden="true"
								:icon="heart"
								:style="{ color: quiz.isFavorite ? 'red' : 'black' }"
							></ion-icon>
						</div>
					</div>
				</ion-card-content>
			</ion-card>
		</div>
		<p class="dark:text-white flex justify-center text-2xl pt-5" v-else>
			No quizzes favorited
		</p>
	</ion-content>
</template>
<script setup>
	import {
		IonContent,
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
		IonCardContent,
		IonIcon,
	} from '@ionic/vue';
	import { onMounted, ref } from 'vue';
	import { heart } from 'ionicons/icons';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';

	// krijg de data van quizzes uit de localstorage
	let favoriteQuizzes = JSON.parse(localStorage.getItem('favoriteQuizzes')) || [];
	console.log(favoriteQuizzes.value);

	const store = useStore();
	// Function to remove a quiz from favorites
	const removeFromFavorites = (quiz) => {
		store.dispatch('removeFavorite', quiz.id);
		localStorage.removeItem(`quiz-${quiz.id}-isFavorite`);
		location.reload();
	};
	const router = useRouter();

	const navigateToQuiz = (quizId) => {
		router.push(`/tabs/quiz/${quizId}`);
	};
	const isDarkModeEnabled = ref(false);
	onMounted(() => {
		//haal de dark mode uit de localstorage
		const savedDarkModeSetting = JSON.parse(localStorage.getItem('darkMode'));
		if (savedDarkModeSetting !== null) {
			isDarkModeEnabled.value = savedDarkModeSetting;
		}
	});
</script>

<style scoped>
	.dark-content {
		--background: #111827;
	}
</style>
