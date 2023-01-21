<template>
  <div class="mx-auto my-8 bg-indigo">
    <v-container>
      <v-row justify="space-between" align="center">
        <v-col cols="8" xl="12">
          <div>
            <p class="text-right text-h5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p class="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </v-col>
        <v-col cols="2" xl="12">
          <div @click="toggleTheme" class="ma-2 pa-2">hello</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <v-container>
    <div class="d-flex align-center">
      <v-btn class="ma-2 pa-2" @click="toggleTheme" color="pink"
        >click me</v-btn
      >
      <v-btn dark color="indigo" stacked size="32">
        <v-icon size="18" icon="mdi-plus"></v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>
<style></style>
