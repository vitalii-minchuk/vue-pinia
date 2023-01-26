<template>
  <v-list-item :title="props.userName">
    <v-btn @click="emit('choose-project')">View Projects</v-btn>
  </v-list-item>
</template>

<script setup lang="ts">
const props = defineProps<{
  userName: string;
}>();
const emit = defineEmits<{
  (e: 'choose-project'): void;
}>();
</script>
