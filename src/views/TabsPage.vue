<template>
	<ion-page>
		<ion-tabs>
			<ion-router-outlet></ion-router-outlet>
			<ion-tab-bar :class="{ 'dark-mode': isDarkModeEnabled }">
				<ion-tab-button tab="Home" href="/tabs/home">
					<ion-icon class="text-[31px]" aria-hidden="true" :icon="home" />
					<ion-label class="pb-[9px] text-[19px]">Home</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="favorite" href="/tabs/favorite">
					<ion-icon class="text-[31px]" aria-hidden="true" :icon="heart"></ion-icon>
					<ion-label class="pb-[9px] text-[19px]">Favorite</ion-label>
				</ion-tab-button>

				<ion-tab-button tab="setting" href="/tabs/setting">
					<ion-icon class="text-[31px]" aria-hidden="true" :icon="cog"></ion-icon>
					<ion-label class="pb-[9px] text-[19px]">Settings</ion-label>
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-page>
</template>

<script setup>
	import {
		IonTabBar,
		IonTabButton,
		IonTabs,
		IonLabel,
		IonIcon,
		IonPage,
		IonRouterOutlet,
	} from '@ionic/vue';
	import { home, heart, cog } from 'ionicons/icons';
	import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
	import { onBeforeRouteLeave, useRoute } from 'vue-router';
	const isDarkModeEnabled = ref(localStorage.getItem('darkMode') === 'true');
	const route = useRoute();
	//hier kijk ik of er naar de favorite page wordt gelinkt zo ja moet er een page refresh komen
	watch(route, () => {
		if (route.path === '/tabs/favorite') {
			location.reload();
		}
	});
</script>

<style scoped>
	.dark-mode {
		--background: #1a2029;
		--color: white;
	}
</style>
