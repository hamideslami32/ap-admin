<template>
  <div class="pa-4 d-flex flex-column">
    <div class="d-flex">
      <div v-if="viewCharts" class="chart-wrapper d-flex flex-column">
        <div class="chart mb-1">
          <chart title="Daily Sign-up" :chart-data="series" :chart-options="options" type="area" />
        </div>
        <v-card class="d-flex pa-2 align-center justify-space-between">
          <v-btn :color="item.color" width="24%" class="btn" v-for="(item, i) in chartBtns" :key="i" >
            {{item.text}}
          </v-btn>
        </v-card>
      </div>
      <div class="stats-wrapper d-flex pt-7 justify-space-around">
        <base-material-stats-card
          color="secondary"
          icon="mdi-currency-usd"
          title="Credit"
          value="12,000,000"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
        <base-material-stats-card
          color="blue"
          icon="mdi-chart-box-plus-outline"
          title="Today Sales"
          value="1780"
          sub-icon="mdi-tag"
          sub-text="Sales By Fantastic Apro Team."
        />
      </div>
    </div>
    <div class="mt-6">
      <span>
        In Progress Sales
      </span>
      <div class="progress-table d-flex mt-2">
        <div v-for="(item, i) in progressData" :key="i" class="d-flex flex-column pr-4">
          <div class="header d-flex justify-center align-center">
            {{ item.header }}
          </div>
          <div class="d-flex justify-center align-center">
            {{ item.body }}
          </div>
        </div>
      </div>
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
      progressData: [
        {
          header: 'Date/Time',
          body: 'Example Data'
        },
        {
          header: 'Service',
          body: 'Example Data'
        },
        {
          header: 'Amount',
          body: 'Example Data'
        },
        {
          header: 'Ref No',
          body: 'Example Data'
        },
        {
          header: 'Status',
          body: 'Example Data'
        },
      ],
      chartBtns: [
        {
          color: 'primary',
          text: 'Flight Sales'
        },
        {
          color: 'secondary',
          text: 'Hotel Sales'
        },
        {
          color: 'blue',
          text: 'Tours Sales'
        },
        {
          color: 'greyColor',
          text: 'Bus Sales'
        },
      ],
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
.stats-wrapper {
  & > div {
    width: 45%;
  }
}
.chart-wrapper {
  width: 50%;
}
.progress-table {
  border: 1px solid $greyColor;
  width: fit-content;
  height: 150px;
  .header {
    height: 50px;
    border: 1px solid $greyColor
  }
  & > div:last-of-type {
    height: 100px;
  }
}
</style>
