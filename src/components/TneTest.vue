<template>
  <v-card>
    <h3>vue-use</h3>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const expanded = ref(true);
const expandedIcon = computed(() =>
  expanded.value ? 'mdi-chevron-left' : 'mdi-chevron-right'
);
const items = computed(() => [
  {
    text: 'Boards',
    icon: 'mdi-plus',
    selected: true,
    data: {
      path: '/',
    },
  },
]);
</script>

<style scoped></style>
