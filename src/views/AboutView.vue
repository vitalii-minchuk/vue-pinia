<template>
  <div>
    <h1>This is an about page</h1>
    <v-chip> Chip </v-chip>
    <v-btn class="pr-8 w-25" icon="mdi-star" color="secondary"></v-btn>
    <v-btn prepend-icon="mdi-vuetify"> Button </v-btn>
    <v-tooltip location="top" text="Tooltip">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">Tooltip</v-btn>
      </template>
    </v-tooltip>
    <v-icon size="large" color="green-darken-2"> mdi-domain </v-icon>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Activator slot </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const items = ref([
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]);
</script>
