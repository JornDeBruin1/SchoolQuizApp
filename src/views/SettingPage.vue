<template>
	<ion-page class="dark:bg-gray-800">
		<ion-header class="dark:bg-gray-800">
			<ion-toolbar :class="{ 'dark-background': isDarkModeEnabled }">
				<ion-buttons class="dark:bg-gray-800">
					<ion-menu-button></ion-menu-button>
				</ion-buttons>
				<ion-title class="dark:text-white text-center">Settings</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true" class="dark:bg-gray-800"
			><SettingsContainer
		/></ion-content>
	</ion-page>
</template>

<script setup>
	import {
		IonPage,
		IonHeader,
		IonToolbar,
		IonButtons,
		IonMenuButton,
		IonTitle,
		IonContent,
	} from '@ionic/vue';
	import SettingsContainer from '../components/SettingsContainer.vue';
	import { onMounted, ref } from 'vue';

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
