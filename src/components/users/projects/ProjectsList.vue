<template>
  <div v-if="!!props.user">
    <h2>{{ user?.fullName }}: Projects</h2>
    <v-list v-if="hasProjects">
      <ProjectItem
        v-for="prj in user?.projects"
        :key="prj.id"
        :title="prj.title"
      />
    </v-list>
    <h3 v-else>No projects found.</h3>
  </div>
  <div v-else>
    <h3>No user selected.</h3>
  </div>
</template>

<script setup lang="ts">
import ProjectItem from '@/components/users/projects/ProjectItem.vue';
import type { User } from '@/types';
import { computed } from 'vue';

const props = defineProps<{
  user: User | null;
}>();
const hasProjects = computed<boolean>(() => !!props.user?.projects?.length);
</script>
