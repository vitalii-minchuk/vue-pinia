<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer
        v-model="isNavOpen"
        color="grey-darken-2"
      ></v-navigation-drawer>
      <v-app-bar dark color="grey-lighten-2" class="w-100">
        <TheNavbar @showsidebar="toggleNav" />
      </v-app-bar>
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavbar from '@/components/TheNavbar.vue'
import { ref } from 'vue'

const isNavOpen = ref(false)

function toggleNav() {
  isNavOpen.value = !isNavOpen.value
}
</script>
