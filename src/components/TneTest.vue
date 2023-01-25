<template>
  <v-card>
    <h3>vue-use</h3>
    <input type="text" ref="nameInput" />
    <v-btn @click="setName">+</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const name = ref('');
const nameInput = ref<HTMLInputElement | null>(null);
function setName() {
  name.value = nameInput.value?.value || '';
}
watch(name, function (newVal, oldVal) {
  console.log('first1', newVal, oldVal);
});
</script>

<style scoped></style>
