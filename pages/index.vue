<template>
  <div class="primary--text pa-4 d-flex flex-column justify-center align-center">
    <div v-if="viewCharts" class="chart-wrapper d-flex flex-wrap justify-space-between">
      <chart class="chart" title="Daily Sign-up" :chart-data="series" :chart-options="options" type="area" />
      <chart class="chart" title="Daily Orders" :chart-data="series" :chart-options="options" type="area" />
      <chart class="chart" title="Daily Flight Orders" :chart-data="series" :chart-options="options" type="area" />
      <chart class="chart" title="Daily Domestic Flight Orders" :chart-data="series" :chart-options="options" type="area" />
    </div>
  </div>
</template>
<script>
import chart from '~/components/chart/chart'
export default {
  components: {
    chart
  },
  data() {
    return {
      viewCharts: false,
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        }
      },
      series: [{
        name: 'Orders',
        data: [18, 64, 23, 50, 49, 33, 70, 91, 21, 32, 18, 64, 65, 120, 49, 33, 70, 76, 11, 65, 18, 64, 65, 50, 49, 33, 70, 91, 64, 65]
      }]
    }
  },
  layout: 'admin',
  mounted() {
    this.viewCharts = true
  },
}
</script>

<style lang="scss" scoped>
.chart-wrapper {
  width: 100%;
  & > div {
    width: 49.5%;
    margin-bottom: 16px;
  }
}
</style>
