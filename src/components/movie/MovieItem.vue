<template>
  <div class="movie">
    <img
      :src="MOVIE_POSTER_BASE_URL + movie.poster_path"
      :alt="title"
      class="movie-img"
    />
    <div>
      <div class="movie-name">{{ title }} ({{ movie.release_date }})</div>
      <span class="movie-overview">{{ movie.overview }}</span>
      <div v-if="!isSearch" class="movie-buttons">
        <button @click="handleWatched" class="btn movie-buttons-watched">
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </button>
        <button @click="handleDelete" class="btn movie-buttons-delete">
          Delete
        </button>
      </div>
      <button v-else @click="handleAddMovie" class="btn movie-buttons-watched">
        Add
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MOVIE_POSTER_BASE_URL } from '@/constants';
import { useMoviesStore } from '@/stores/movie';
import type { Movie } from '@/types';
import { computed } from 'vue';

const movieStore = useMoviesStore();
const props = defineProps({
  movie: { type: Object as () => Movie, required: true, default: () => {} },
  isSearch: { type: Boolean, required: false, default: false },
});
const title = computed(() => props.movie.original_title);

function handleWatched() {
  movieStore.setWatched(props.movie.id);
}

function handleDelete() {
  movieStore.deleteMovie(props.movie.id);
}

function handleAddMovie() {
  const newMovie = { ...props.movie, isWatched: false };
  movieStore.addMovieToFavorite(newMovie);
  movieStore.setActiveTab(1);
}
</script>
<style lang="css" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
}

.movie-overview {
  display: block;
  margin-bottom: 20px;
}

.movie-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movie-buttons-watched {
  color: #fff;
  background: #1eb4c3;
}

.movie-buttons-watched__icon {
  width: 15px;
  margin-left: 10px;
}

.movie-buttons-delete {
  color: #fff;
  background: #ff2a2a;
}
</style>
