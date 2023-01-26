<template>
  <v-col>
    <h2>Active Users</h2>
    <BaseSearch :searchTerm="enteredSearchTerm" @search="updateSearch" />
    <!-- <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div> -->
    <ul>
      <UserItem
        v-for="user in availableUsers"
        :key="user.id"
        :userName="user.fullName"
        :id="user.id"
        @choose-project="emit('list-projects', user.id)"
      />
    </ul>
  </v-col>
</template>

<script setup lang="ts">
import type { User } from '@/types';
import UserItem from '@/components/users/users/UserItem.vue';
import { computed, ref } from 'vue';

const props = defineProps<{
  users: User[];
}>();
const emit = defineEmits<{
  (e: 'list-projects', uid: string): void;
}>();
const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');
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
function updateSearch(val: string) {
  enteredSearchTerm.value = val;
}
//   data() {
//     return {
//       enteredSearchTerm: '',
//       activeSearchTerm: '',
//       sorting: null,
//     };
//   },
//   computed: {
//     availableUsers() {
//       let users = [];
//       if (this.activeSearchTerm) {
//         users = this.users.filter((usr) =>
//           usr.fullName.includes(this.activeSearchTerm)
//         );
//       } else if (this.users) {
//         users = this.users;
//       }
//       return users;
//     },
//     displayedUsers() {
//       if (!this.sorting) {
//         return this.availableUsers;
//       }
//       return this.availableUsers.slice().sort((u1, u2) => {
//         if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
//           return 1;
//         } else if (this.sorting === 'asc') {
//           return -1;
//         } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
//           return -1;
//         } else {
//           return 1;
//         }
//       });
//     },
//   },
//   methods: {
//     updateSearch(val) {
//       this.enteredSearchTerm = val;
//     },
//     sort(mode) {
//       this.sorting = mode;
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
//   },
// };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
