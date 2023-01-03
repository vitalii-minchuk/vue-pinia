<template>
  <main>
    <header class="header">
      <h2>My Favorite Movies</h2>
    </header>
    <div class="tabs">
      <button
        @click="setActiveTab(1)"
        :class="['btn', { btn_green: activeTab === 1 }]"
      >
        Favorite
      </button>
      <button
        @click="setActiveTab(2)"
        :class="['btn', { btn_green: activeTab === 2 }]"
      >
        Search
      </button>
    </div>
    <div class="movies" v-if="activeTab === 1">
      <div v-if="watchedMovies.length">
        <h3>Watched Movies (count: {{ watchedMovies.length }})</h3>
        <MovieItem
          v-for="movie of watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <div>
        <h3>All Movies (count: {{ totalCountMovies }})</h3>
        <MovieItem v-for="movie of movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
    <div class="search" v-else>Search</div>
  </main>
</template>
<script setup lang="ts">
import { useMoviesStore } from '@/stores/movie';
import MovieItem from '@/components/movie/MovieItem.vue';
import { computed } from 'vue';

const moviesStore = useMoviesStore();
const movies = computed(() => moviesStore.movies);
const activeTab = computed(() => moviesStore.activeTab);
const setActiveTab = computed(() => moviesStore.setActiveTab);
const totalCountMovies = computed(() => moviesStore.totalCountMovies);
const watchedMovies = computed(() => moviesStore.watchedMovies);
</script>
