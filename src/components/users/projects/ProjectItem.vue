<template>
  <v-list-item :title="props.title"></v-list-item>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
