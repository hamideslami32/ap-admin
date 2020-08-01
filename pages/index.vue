<template>
  <div class="primary--text mt-4 pa-4 d-flex flex-column justify-center align-center">
    <div class="chart-wrapper d-flex flex-wrap justify-space-between">
      <chart class="chart" title="Daily Sign-up" :chartData="series" :chartOptions="options" type="area"></chart>
      <chart class="chart" title="Daily Orders" :chartData="series" :chartOptions="options" type="area"></chart>
      <chart class="chart" title="Daily Flight Orders" :chartData="series" :chartOptions="options" type="area"></chart>
      <chart class="chart" title="Daily Domestic Flight Orders" :chartData="series" :chartOptions="options" type="area"></chart>

    </div>
  </div>
</template>
<script>
import chart from '~/components/chart/chart'
export default {
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [18, 64, 65, 50, 49, 33, 70, 91]
      }]
    }
  },
  layout: 'admin',
  components: {
    chart
  }
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
