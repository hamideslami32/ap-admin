<template>
  <v-card class="pa-4">
    <p class="mb-8 text-h6">{{title}}</p>
    <apexchart :type="type" :options="chartOptions" :series="chartData"></apexchart>
  </v-card>
</template>

<script>
import ApexCharts from "vue-apexcharts"

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    chartData: {
      type: Array,
      required: true
    },
    chartOptions: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    },
  },
  components: {
    apexchart: ApexCharts,
  },

}
</script>

<style lang="scss" scoped>
</style>
