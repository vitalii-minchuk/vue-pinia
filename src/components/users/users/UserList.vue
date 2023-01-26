<template>
  <v-col>
    <h2>Active Users</h2>
    <BaseSearch :searchTerm="activeSearchTerm" @search="updateSearch" />

    <div class="d-flex w-100 justify-space-around my-4">
      <v-btn @click="sort('asc')"> Sort Ascending </v-btn>
      <v-btn @click="sort('desc')"> Sort Descending </v-btn>
    </div>
    <ul>
      <UserItem
        v-for="user in displayedUsers"
        :key="user.id"
        :userName="user.fullName"
        @choose-project="emit('list-projects', user.id)"
      />
    </ul>
  </v-col>
</template>

<script setup lang="ts">
import type { User } from '@/types';
import UserItem from '@/components/users/users/UserItem.vue';
import { computed, ref, watch } from 'vue';

const props = defineProps<{
  users: User[];
}>();
const emit = defineEmits<{
  (e: 'list-projects', uid: string): void;
}>();
const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');
const sorting = ref<'asc' | 'desc' | null>(null);
const availableUsers = computed<User[]>(() => {
  let usrs = [];
  if (enteredSearchTerm.value) {
    usrs = props.users.filter((usr) =>
      usr.fullName.includes(enteredSearchTerm.value)
    );
  } else {
    usrs = props.users;
  }
  return usrs;
});
const displayedUsers = computed<User[]>(() => {
  if (!sorting.value) {
    return availableUsers.value;
  }
  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});
function updateSearch(val: string) {
  enteredSearchTerm.value = val;
}
function sort(mode: 'asc' | 'desc') {
  sorting.value = mode;
}
watch(enteredSearchTerm, (val) => {
  setTimeout(() => {
    if (val === enteredSearchTerm.value) {
      activeSearchTerm.value = val;
    }
  }, 300);
});
</script>
