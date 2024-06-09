import quizzesData from '../data/quiz.json';
export default {
	state: {
		favoriteQuizzes: JSON.parse(localStorage.getItem('favoriteQuizzes')) || [],
		quizzes: quizzesData,
	},
	mutations: {
		ADD_FAVORITE(state, quiz) {
			quiz.isFavorite = true;
			state.favoriteQuizzes.push(quiz);
			localStorage.setItem('favoriteQuizzes', JSON.stringify(state.favoriteQuizzes));
		},
		REMOVE_FAVORITE(state, quiz) {
			const index = state.favoriteQuizzes.findIndex((q) => q.id === quiz.id);
			if (index !== -1) {
				state.favoriteQuizzes[index].isFavorite = false;

				state.favoriteQuizzes.splice(index, 1);
				localStorage.setItem('favoriteQuizzes', JSON.stringify(state.favoriteQuizzes));
			}
		},
		SET_FAVORITES(state, quizzes) {
			state.favoriteQuizzes = quizzes;
		},
	},
	actions: {
		// favorite toevoegen aan de local storage
		addFavorite({ commit, state }, quizId) {
			const quiz = state.quizzes.find((q) => q.id === quizId);
			if (quiz) {
				commit('ADD_FAVORITE', quiz);
				localStorage.setItem('favoriteQuizzes', JSON.stringify(state.favoriteQuizzes));
			}
		},
		// favorite verwijderen uit de local storage
		removeFavorite({ commit, state }, quizId) {
			const quiz = state.quizzes.find((q) => q.id === quizId);
			if (quiz) {
				commit('REMOVE_FAVORITE', quiz);
				localStorage.setItem('favoriteQuizzes', JSON.stringify(state.favoriteQuizzes));
			}
		},
		// favorieten inladen vanuit de local storage
		loadFavorites({ commit }, quizzes) {
			commit('SET_FAVORITES', quizzes);
		},
	},
};
