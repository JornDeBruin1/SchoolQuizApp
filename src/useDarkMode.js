import { ref, watchEffect } from 'vue';

export default function useDarkMode() {
	//krijg de huidige staat uit de localstorage van darkmode
	const isDarkModeEnabled = ref(localStorage.getItem('darkMode') === 'true');

	//kijk of de darkmode aan of uit staat en voeg de class toe of verwijder de class
	watchEffect(() => {
		if (isDarkModeEnabled.value) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		localStorage.setItem('darkMode', isDarkModeEnabled.value);
	});

	//toggle de darkmode button op de status van de value in de localstorage
	const toggleDarkMode = () => {
		isDarkModeEnabled.value = !isDarkModeEnabled.value;
	};

	return { isDarkModeEnabled, toggleDarkMode };
}
