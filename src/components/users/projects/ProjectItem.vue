<template>
  <li>
    <h3>{{ props.title }}</h3>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
