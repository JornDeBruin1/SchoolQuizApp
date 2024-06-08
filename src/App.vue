<template>
	<ion-app class="dark:text-white dark:bg-gray-800">
		<ion-router-outlet />
	</ion-app>
</template>

<script>
	import { IonApp, IonRouterOutlet } from '@ionic/vue';
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'App',
		components: {
			IonApp,
			IonRouterOutlet,
		},
	});
</script>
