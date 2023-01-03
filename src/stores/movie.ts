import type { Movie } from '@/types';
import { defineStore } from 'pinia';

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as Array<Movie>,
    activeTab: 1,
  }),
  getters: {
    watchedMovies(state) {
      return state.movies.filter((el) => el.isWatched);
    },
    totalCountMovies(state) {
      return state.movies.length;
    },
  },
  actions: {
    setWatched(id: number) {
      const idx = this.movies.findIndex((el) => el.id === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
    },
    setActiveTab(tab: number) {
      this.activeTab = tab;
    },
    deleteMovie(id: number) {
      this.movies = this.movies.filter((el) => el.id !== id);
    },
    addMovieToFavorite(obj: Movie) {
      this.movies.push(obj);
    },
  },
});
