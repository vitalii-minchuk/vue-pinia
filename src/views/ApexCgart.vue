<template>
  <v-card elevation="4" class="ma-4 pa-4">
    <apexchart
      width="100%"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </v-card>
</template>

<script setup lang="ts">
const options = {
  chart: {
    id: 'vuechart-example',
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];
</script>
