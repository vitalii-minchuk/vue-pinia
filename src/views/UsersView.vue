<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card elevation="8">
          <UserList :users="USER_DATA" @list-projects="selectUser" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card elevation="8">
          <ProjectsList :user="selectedUser" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import ProjectsList from '@/components/users/projects/ProjectsList.vue';
import UserList from '@/components/users/users/UserList.vue';
import USER_DATA from '@/dummy-data';
import type { User } from '@/types';
import { provide, ref, type InjectionKey } from 'vue';

const selectedUser = ref<User | null>(null);
const activeUsers = ref(USER_DATA);
function selectUser(uid: string) {
  selectedUser.value = activeUsers.value.find((usr) => usr.id === uid) || null;
}
const key = Symbol() as InjectionKey<string>;
provide(key, 'selectUser');
</script>
