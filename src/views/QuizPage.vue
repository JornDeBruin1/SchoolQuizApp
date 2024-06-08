<template>
	<ion-menu content-id="main-content">
		<ion-header class="dark:bg-gray-800">
			<ion-toolbar :class="{ 'dark-background': isDarkModeEnabled }">
				<ion-title class="dark:text-white">Quiz menu</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :class="{ 'dark-page': isDarkModeEnabled }">
			<div class="m-6 text-2xl flex flex-wrap flex-col">
				<a class="text-black dark:text-white" href="/tabs/home">
					<ion-icon class="pr-4" aria-hidden="true" :icon="home"></ion-icon>
					<ion-label class="text-2xl">Home</ion-label>
				</a>
				<a class="text-black dark:text-white" href="/tabs/favorite">
					<ion-icon class="pr-4" aria-hidden="true" :icon="heart"></ion-icon>
					<ion-label class="text-2xl">Favorite</ion-label>
				</a>
				<a class="text-black dark:text-white" href="/tabs/setting">
					<ion-icon class="pr-4" aria-hidden="true" :icon="cog"></ion-icon>
					<ion-label class="text-2xl">Settings</ion-label>
				</a>
			</div>
		</ion-content>
	</ion-menu>
	<ion-page id="main-content">
		<ion-header class="dark:bg-gray-800">
			<ion-toolbar :class="{ 'dark-background': isDarkModeEnabled }">
				<ion-buttons>
					<ion-menu-button class="dark:text-white"></ion-menu-button>
				</ion-buttons>
				<ion-title class="dark:text-white">Question</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true" :class="{ 'dark-page': isDarkModeEnabled }">
			<QuizHeader
				:CurrentQuestion="currentQuestionNumber"
				:questionLength="totalQuestions"
				:showResult="showResult"
			/>
			<Question
				v-if="!showResult"
				:question="quiz.questions[currentQuestionIndex]"
				@selectOption="onOptionSelected"
			/>
			<Result
				v-else
				:quizQuestionlength="quiz.questions.length"
				:numberOfCorrectAnswers="numberOfCorrectAnswers"
				:userAnswers="userAnswers"
			/>
		</ion-content>
	</ion-page>
</template>

<script setup>
	// All imports
	import Question from '../components/Question.vue';
	import QuizHeader from '../components/QuizHeader.vue';
	import Result from '../components/Result.vue';
	import q from '@/data/quiz.json';
	import { useRoute } from 'vue-router';
	import { home, heart, cog } from 'ionicons/icons';
	import { ref, computed, onMounted } from 'vue';
	import {
		IonButtons,
		IonMenu,
		IonMenuButton,
		IonPage,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonCard,
		IonCardContent,
		IonCardHeader,
		IonCardSubtitle,
		IonCardTitle,
		IonIcon,
		IonLabel,
	} from '@ionic/vue';

	// Get ID from route
	const route = useRoute();
	const quizId = parseInt(route.params.id);
	const quizes = ref(q);

	// Get quiz based on ID
	const quiz = computed(() => quizes.value.find((quiz) => quiz.id === quizId));
	const currentQuestionIndex = ref(0);
	const numberOfCorrectAnswers = ref(0);
	const showResult = ref(false);

	// ArrayList voor antwoorden
	const userAnswers = ref([]);

	// Total number of questions
	const totalQuestions = computed(() => quiz.value.questions.length);

	// Current question number (1-based index)
	const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1);

	// handeling als er een optie wordt geselecteerd
	const onOptionSelected = (isCorrect, selectedOption) => {
		const currentQuestion = quiz.value.questions[currentQuestionIndex.value];
		const correctOption = currentQuestion.options.find((option) => option.isCorrect);

		//antwoorden in een array list
		userAnswers.value.push({
			question: currentQuestion,
			selectedOption: selectedOption,
			correctOption: correctOption,
			isCorrect: isCorrect,
		});

		//kijken of antwoord goed is
		if (isCorrect) {
			numberOfCorrectAnswers.value++;
		}

		// kijken of alle vragen geweest zijn zo ja show de result page zo niet ga naar de volgende vraag
		if (quiz.value.questions.length - 1 === currentQuestionIndex.value) {
			showResult.value = true;
		} else {
			currentQuestionIndex.value++;
		}
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
<style>
	.dark-background {
		--background: none;
	}
	.dark-page {
		--background: #111827;
	}
</style>
