import { MOVIE_API_BASE_URL } from '@/constants';
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search: string) {
      this.loader = true;
      const res = await fetch(`${MOVIE_API_BASE_URL}&query=${search}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
    cleanSearch() {
      this.movies = [];
    },
  },
});
