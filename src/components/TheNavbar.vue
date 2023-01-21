<template>
  <v-toolbar class="w-100 h-100" title="Application">
    <v-btn @click="emit('showsidebar')" icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <nav>
      <RouterLink
        to="/search"
        class="text-uppercase text-decoration-none text-caption"
      >
        search
      </RouterLink>
      <RouterLink
        to="/about"
        class="text-uppercase text-decoration-none text-caption"
      >
        about
      </RouterLink>
    </nav>
  </v-toolbar>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { defineEmits } from 'vue';

const emit = defineEmits(['showsidebar']);
</script>
