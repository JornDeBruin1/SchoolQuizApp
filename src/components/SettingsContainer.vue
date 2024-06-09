<template>
	<ion-page>
		<ion-content :fullscreen="true" :class="{ 'dark-content': isDarkModeEnabled }">
			<ion-list class="dark:bg-gray-800 w-full md:px-[35%] pt-12">
				<ion-item class="mt-12" :class="{ 'dark-item': isDarkModeEnabled }">
					<ion-label class="dark:text-white">Enable darkmode</ion-label>
					<ion-toggle
						:checked="isDarkModeEnabled"
						color="primary"
						@ionChange="toggleDarkMode"
					></ion-toggle>
				</ion-item>
				<ion-item :class="{ 'dark-item': isDarkModeEnabled }">
					<ion-label class="dark:text-white">Language</ion-label>
					<ion-select
						v-model="selectedLanguage.value"
						class="dark:text-white"
						placeholder="Select One"
					>
						<ion-select-option class="dark:text-white" value="nl"
							>Nederlands</ion-select-option
						>
						<ion-select-option class="dark:text-white" value="en"
							>Engels</ion-select-option
						>
					</ion-select>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script setup>
	import {
		IonPage,
		IonContent,
		IonList,
		IonItem,
		IonLabel,
		IonToggle,
		IonSelect,
		IonSelectOption,
	} from '@ionic/vue';
	import { inject, nextTick, onMounted, ref, watchEffect } from 'vue';
	const selectedLanguage = ref('');

	const toggleDarkMode = () => {
		isDarkModeEnabled.value = !isDarkModeEnabled.value;
		localStorage.setItem('darkMode', JSON.stringify(isDarkModeEnabled.value));
		//reload de pagina om het overal toe te passen waar de dark: class voor staat
		nextTick(() => {
			location.reload();
		});
	};
	const isDarkModeEnabled = ref(false);

	// krijg de status van de darkmode knop
	onMounted(() => {
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
	.dark-item {
		--background: #1f2937;
	}
</style>
