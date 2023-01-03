<template>
  <form class="search-form" @submit.prevent="handleSearch">
    <input
      type="text"
      class="search-input"
      placeholder="Search movie..."
      v-model="searchMovie"
    />
    <button class="search-btn" type="submit">go</button>
  </form>
  <BaseLoader v-if="searchStore.loader" />
  <div v-else>
    <MovieItem
      v-for="movie of movies"
      :key="movie.id"
      :movie="movie"
      :isSearch="true"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useSearchStore } from '@/stores/search';
import MovieItem from '@/components/movie/MovieItem.vue';
import type { Movie } from '@/types';

const searchStore = useSearchStore();
const searchMovie = ref('');
const movies = computed<Array<Movie>>(() => searchStore.movies);

function handleSearch() {
  if (!searchMovie.value.trim()) return;
  searchStore.getMovies(searchMovie.value);
}

function resetSearch() {
  searchMovie.value = '';
  searchStore.cleanSearch();
}

onMounted(resetSearch);
</script>

<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.search-form {
  position: relative;
}
.search-btn {
  position: absolute;
  bottom: 50%;
  transform: translateY(-30%);
  right: 12px;
  border: none;
  background-color: transparent;
}
</style>
