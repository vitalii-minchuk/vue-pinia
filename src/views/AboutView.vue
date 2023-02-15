<script setup lang="ts">
import { ref } from 'vue';
import { useDropZone } from '@vueuse/core';
const filesData = ref<
  { name: string; size: number; type: string; lastModified: number }[]
>([]);
function onDrop(files: File[] | null) {
  filesData.value = [];
  if (files) {
    filesData.value = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }));
  }
}
const dropZoneRef = ref<HTMLElement>();
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<template>
  <div>
    <div ref="dropZoneRef">
      <div class="box" :class="{ active: isOverDropZone }">isOverDropZone:</div>
      <div>
        <div v-for="(file, index) in filesData" :key="index">
          <p>Name: {{ file.name }}</p>
          <p>Size: {{ file.size }}</p>
          <p>Type: {{ file.type }}</p>
          <p>Last modified: {{ file.lastModified }}</p>
        </div>
      </div>
    </div>
    {{ isOverDropZone }}
  </div>
</template>

<style>
.box {
  border: 1px solid green;
}
.active {
  min-height: 100px;
  border: 1px solid red;
}
</style>
