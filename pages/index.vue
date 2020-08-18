<template>
  <div class="pa-4 d-flex flex-column">
    <div class="stats-wrapper d-flex pt-7 justify-space-between">
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
      <base-material-stats-card
        color="primary"
        icon="mdi-help"
        title="Partial"
        value="80,500,000"
        sub-icon="mdi-clock"
        sub-text="Just Updated"
      />
      <base-material-stats-card
        color="primary lighten-4"
        icon="mdi-sale"
        title="Sales With Discount"
        value="520"
        sub-icon="mdi-tag"
        sub-text="Sales By Fantastic Apro Team."
      />
    </div>
    <div class="d-flex mt-6">
      <v-card v-if="true" class="chart-wrapper d-flex flex-column">
        <div class="chart mb-1 pa-4">
          <!-- <chart :title="chartTitle" :chart-data="series" :chart-options="options" type="area" /> -->
          <div class="d-flex justify-space-between">
            <span class="d-flex flex-column">
              <span class="rounded primary lighten-4 white--text text-caption text-center">
                overview
              </span>
              <span class="text-h6">
                {{ chartTitle }}
              </span>
            </span>
            <div>
              <v-btn :class="['lightGrey', {'blue white--text': activeChart === 'Month'}]" @click.prevent="initBigChart(0)">
                Month
              </v-btn>
              <v-btn :class="['lightGrey', {'blue white--text': activeChart === 'Week'}]" @click.prevent="initBigChart(1)">
                Week
              </v-btn>
              <v-btn :class="['lightGrey', {'blue white--text': activeChart === 'Both'}]" @click.prevent="initBigChart(2)">
                Both
              </v-btn>
            </div>
          </div>
          <line-chart
            ref="bigChart"
            class="mt-4"
            :height="350"
            :chart-data="bigLineChart.chartData"
            :extra-options="bigLineChart.extraOptions"
          />
        </div>
        <div class="d-flex pa-2 align-center justify-space-between">
          <v-btn
            v-for="(item, i) in chartBtns"
            :key="i"
            :color="item.color"
            width="24%"
            class="btn"
            @click="chartTitle = item.text"
          >
            {{ item.text }}
          </v-btn>
        </div>
      </v-card>
      <div class="progress-sales ml-4">
        <v-card class="pa-4">
          <span class="text-h6">
            In Progress Sales
          </span>
          <div>
            <div v-for="(arrayItem, i) in progressData" :key="i" class="progress-table d-flex justify-space-between mt-4">
              <div v-for="(item, j) in arrayItem" :key="j" class="d-flex flex-column">
                <div v-if="i === 0" class="grey--text text-body-2 header d-flex justify-center align-center">
                  {{ item.header }}
                </div>
                <div class="d-flex justify-center align-center" :class="`${item.body.toLowerCase()}--text`">
                  {{ item.body }}
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
// import chart from '~/components/chart/chart'

// Charts
import * as chartConfigs from '@/components/Charts/config'
import LineChart from '@/components/Charts/LineChart'
// import BarChart from '@/components/Charts/BarChart'

export default {
  layout: 'admin',
  components: {
    // chart,
    LineChart,
    // BarChart
  },
  data() {
    return {
      activeChart: 'Both',
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        }
      },
      chartOptions: {
        chart: {
          type: 'area'
        },

        title: {
          text: 'Sign Up'
        },

        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        plotOptions: {
          area: {
            fillColor: {
              pattern: {
                path: {
                  d: 'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
                  strokeWidth: 3
                },
                width: 10,
                height: 10,
                opacity: 0.4
              }
            }
          }
        },

        series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
          color: '#88e',
          fillColor: {
            pattern: {
              color: '#11d'
            }
          }
        }, {
          data: [null, null, null, null, null, 43.1, 95.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          color: '#e88',
          fillColor: {
            pattern: {
              color: '#d11'
            }
          }
        }]
      },
      chartTitle: 'Flight Sales',
      progressData: [
        [
          {
            header: 'Date/Time',
            body: '99/05/15'
          },
          {
            header: 'Service',
            body: 'Flight'
          },
          {
            header: 'Amount',
            body: '18,800,000'
          },
          {
            header: 'Ref No',
            body: '186754'
          },
          {
            header: 'Status',
            body: 'Success'
          },
        ],
        [
          {
            header: 'Date/Time',
            body: '99/05/15'
          },
          {
            header: 'Service',
            body: 'Hotel'
          },
          {
            header: 'Amount',
            body: '1,800,000'
          },
          {
            header: 'Ref No',
            body: '186754'
          },
          {
            header: 'Status',
            body: 'Error'
          },
        ]
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

  mounted() {
    this.initBigChart(2)
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      }
      if (index === 2 ) {
        this.activeChart = 'Both'
        chartData.datasets = [
          {
            label: 'Month',
            data: this.bigLineChart.allData[0]
          },
          {
            label: 'Week',
            data: this.bigLineChart.allData[1]
          }
        ]
      } else if (index === 1) {
        this.activeChart = 'Week'

         chartData.datasets = [
          {
            label: 'Week',
            data: this.bigLineChart.allData[1]
          }
        ]
      } else {
        this.activeChart = 'Month'
        chartData.datasets = [
          {
            label: 'Month',
            data: this.bigLineChart.allData[0]
          }
        ]
      }

      this.bigLineChart.chartData = chartData
      this.bigLineChart.activeIndex = index
    },
  }
}
</script>

<style lang="scss" scoped>
.stats-wrapper {
  & > div {
    width: 24%;
  }
}
.chart-wrapper {
  width: 50%;
}
.progress-sales {
  flex-grow: 1;
}
.progress-table {
  width: 100%;
  .header {
    height: 50px;
    &:last-of-type {
      border-right: nnone;
    }
  }
}
</style>
