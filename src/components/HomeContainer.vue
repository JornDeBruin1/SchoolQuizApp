<template>
	<div class="w-full dark:bg-gray-800">
		<ion-card class="dark:bg-gray-800 m-0 py-6" @click="navigateToQuiz()">
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
					<div @click.stop="toggleFavorite()">
						<ion-icon
							class="text-[20px]"
							aria-hidden="true"
							:icon="heart"
							:class="
								isQuizFavorite(quiz) ? 'text-red-500' : 'text-black : dark:text-white'
							"
							@click.stop="toggleFavorite"
						></ion-icon>
					</div>
				</div>
			</ion-card-content>
		</ion-card>
	</div>
</template>

<script setup>
	import { heart } from 'ionicons/icons';
	import { computed, defineProps, ref, watchEffect } from 'vue';
	import {
		IonCard,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
		IonCardContent,
		IonIcon,
	} from '@ionic/vue';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';
	const props = defineProps({
		quiz: Object,
		favoriteQuizzes: Array,
	});
	const favoriteQuizzes = computed(() => store.state.favoriteQuizzes);

	// Check if a quiz is favorite
	const isQuizFavorite = (quiz) => {
		return favoriteQuizzes.value.some((favoriteQuiz) => favoriteQuiz.id === quiz.id);
	};
	let isFavorite = ref(
		props.favoriteQuizzes.includes(props.quiz.id) ||
			localStorage.getItem(`quiz-${props.quiz.id}-isFavorite`) === 'true'
	);
	watchEffect(() => {
		isFavorite.value =
			props.favoriteQuizzes.includes(props.quiz.id) ||
			localStorage.getItem(`quiz-${props.quiz.id}-isFavorite`) === 'true';
	});

	// roep de router van Vue aan
	const router = useRouter();
	const navigateToQuiz = () => {
		router.push(`/tabs/quiz/${props.quiz.id}`);
	};

	//initialiseer de Vuex Store
	const store = useStore();

	//knop van heart icon voor hem op te slaan in de local storage
	const toggleFavorite = () => {
		if (!isFavorite.value) {
			store.dispatch('addFavorite', props.quiz.id);
			localStorage.setItem(`quiz-${props.quiz.id}-isFavorite`, 'true');
			isFavorite.value = true;
		} else {
			store.dispatch('removeFavorite', props.quiz.id);
			localStorage.removeItem(`quiz-${props.quiz.id}-isFavorite`);
			isFavorite.value = false;
		}
	};
</script>
