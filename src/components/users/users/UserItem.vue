<template>
  <li>
    <h3>{{ props.userName }}</h3>
    <button @click="emit('choose-project')">View Projects</button>
  </li>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string;
  userName: string;
}>();
const emit = defineEmits<{
  (e: 'choose-project'): void;
}>();
</script>
