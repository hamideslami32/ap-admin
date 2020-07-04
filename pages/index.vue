<template>
  <v-layout justify-center align-center>
    <v-flex v-for="n in 2" id="chart" :key="n" xs12 sm6>
      <apexchart
        class=""
        type="area"
        height="600"
        :options="chartOptions"
        :series="n === 2 ? newSeries : series"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import ApexCharts from "vue-apexcharts"

export default {
  components: {
    apexchart: ApexCharts,
  },
  data() {
    return {
      newSeries: [
        {
          data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
          data: [53, 32, 33, 52, 13, 44, 32],
        },
      ],
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chartOptions: {
        chart: {
          type: "area",
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
      },
    }
  },
  mounted() {
    const user = this.$auth.login('hamid', '123456')
    console.log({user})
  },
}
</script>
