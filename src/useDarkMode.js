import { ref, watchEffect } from 'vue';

export default function useDarkMode() {
	const isDarkModeEnabled = ref(localStorage.getItem('darkMode') === 'true');

	watchEffect(() => {
		if (isDarkModeEnabled.value) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		localStorage.setItem('darkMode', isDarkModeEnabled.value);
	});

	const toggleDarkMode = () => {
		isDarkModeEnabled.value = !isDarkModeEnabled.value;
	};

	return { isDarkModeEnabled, toggleDarkMode };
}
