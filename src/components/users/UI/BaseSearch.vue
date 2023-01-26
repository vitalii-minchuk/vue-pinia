<template>
  <v-text-field
    type="search"
    @input="search"
    :value="searchTerm"
    label="Label"
    variant="outlined"
    placeholder="Filter items"
  ></v-text-field>
</template>

<script setup lang="ts">
const props = defineProps<{
  searchTerm: string;
}>();
const emit = defineEmits<{
  (e: 'search', search: string): void;
}>();
function search(e: Event) {
  emit('search', (e.target as HTMLInputElement).value);
}
</script>
