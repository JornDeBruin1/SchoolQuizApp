<template>
	<ion-content :class="{ 'dark-page': isDarkModeEnabled }">
		<div class="w-full pl-5 flex flex-col justify-center dark:bg-gray-900 pb-20">
			<h2 class="dark:text-white">Quiz Completed!</h2>
			<p class="dark:text-white">
				You got {{ numberOfCorrectAnswers }} out of {{ quizQuestionlength }} questions
				correct.
			</p>
			<ion-list>
				<ion-item
					v-for="(answer, index) in userAnswers"
					:key="index"
					:class="{ 'dark-label': isDarkModeEnabled }"
				>
					<ion-label>
						<h3 class="dark:text-white">
							Question {{ index + 1 }}: {{ answer.question.title }}
						</h3>
						<p class="dark:text-white">
							Your answer:
							<strong
								:class="{
									'text-green-500': answer.isCorrect,
									'text-red-500': !answer.isCorrect,
								}"
								>{{ answer.selectedOption.text }}</strong
							>
						</p>
						<p class="dark:text-white" v-if="!answer.isCorrect">
							Correct answer:
							<strong>{{ answer.correctOption.text }}</strong>
						</p>
					</ion-label>
				</ion-item>
			</ion-list>
		</div>
	</ion-content>
</template>

<script setup>
	import { IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
	import { ref, defineProps, onMounted } from 'vue';

	const props = defineProps({
		quizQuestionlength: Number,
		numberOfCorrectAnswers: Number,
		userAnswers: Array,
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
<style scoped>
	.dark-label {
		--background: #111827;
	}
</style>
