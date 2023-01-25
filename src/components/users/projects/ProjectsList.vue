<template>
  <div v-if="!!props.user">
    <h2>{{ user?.fullName }}: Projects</h2>
    <!-- <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search> -->
    <ul v-if="hasProjects">
      <ProjectItem
        v-for="prj in user?.projects"
        :key="prj.id"
        :title="prj.title"
      />
    </ul>
    <h3 v-else>No projects found.</h3>
  </div>
  <div v-else>
    <h3>No user selected.</h3>
  </div>
</template>

<script setup lang="ts">
import type { User } from '@/types';
import { computed } from 'vue';
import ProjectItem from '@/components/users/projects/ProjectItem.vue';

const props = defineProps<{
  user: User | null;
}>();
const hasProjects = computed<boolean>(() => !!props.user?.projects?.length);
//   data() {
//     return {
//       enteredSearchTerm: '',
//       activeSearchTerm: '',
//     };
//   },
//   computed: {
//     hasProjects() {
//       return this.user.projects && this.availableProjects.length > 0;
//     },
//     availableProjects() {
//       if (this.activeSearchTerm) {
//         return this.user.projects.filter((prj) =>
//           prj.title.includes(this.activeSearchTerm)
//         );
//       }
//       return this.user.projects;
//     },
//   },
//   methods: {
//     updateSearch(val) {
//       this.enteredSearchTerm = val;
//     },
//   },
//   watch: {
//     enteredSearchTerm(val) {
//       setTimeout(() => {
//         if (val === this.enteredSearchTerm) {
//           this.activeSearchTerm = val;
//         }
//       }, 300);
//     },
//     user() {
//       this.enteredSearchTerm = '';
//     },
//   },
// };
</script>
