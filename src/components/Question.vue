<template>
	<ion-card class="dark:bg-gray-800">
		<ion-card-header>
			<ion-card-title class="dark:text-white">{{ question.title }}</ion-card-title>
		</ion-card-header>
		<ion-card-content class="dark:bg-gray-800">
			<ion-radio-group>
				<ion-item
					v-for="option in question.options"
					:key="option.id"
					@click="emitSelectedOption(option)"
					:class="{ 'dark-radio': isDarkModeEnabled }"
				>
					<ion-label class="dark:text-white">{{ option.label }}</ion-label>
					<ion-label class="dark:text-white" :value="option.text">
						{{ option.text }}</ion-label
					>
				</ion-item>
			</ion-radio-group>
		</ion-card-content>
	</ion-card>
</template>

<script setup>
	//imports
	import {
		IonCard,
		IonItem,
		IonCardContent,
		IonRadio,
		IonLabel,
		IonCardHeader,
		IonCardTitle,
		IonCardSubtitle,
		IonRadioGroup,
	} from '@ionic/vue';
	import { defineProps, defineEmits, ref, onMounted } from 'vue';
	//vraag en antwoorden op halen uit de json
	const { question } = defineProps(['question']);
	const emit = defineEmits(['selectOption']);
	const selectedOption = ref(null);
	//kijk voor geselecteerde optie om te kijken of het antwoord goed is

	const emitSelectedOption = (option) => {
		emit('selectOption', option.isCorrect, option);
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
	.dark-radio {
		--background: #1f2937;
	}
</style>
