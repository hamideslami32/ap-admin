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
        color="grey"
        icon="mdi-sale"
        title="Sales With Discount"
        value="520"
        sub-icon="mdi-tag"
        sub-text="Sales By Fantastic Apro Team."
      />
    </div>
    <div class="d-flex mt-6">
      <div v-if="viewCharts" class="chart-wrapper d-flex flex-column">
        <div class="chart mb-1">
          <chart :title="chartTitle" :chart-data="series" :chart-options="options" type="area" />
        </div>
        <v-card class="d-flex pa-2 align-center justify-space-between">
          <v-btn
            :color="item.color"
            width="24%"
            class="btn"
            v-for="(item, i) in chartBtns"
            :key="i"
            @click="chartTitle = item.text"
          >
            {{item.text}}
          </v-btn>
        </v-card>
      </div>
      <div class="progress-sales ml-4">
        <v-card class="pa-4">
          <span class="text-h6">
            In Progress Sales
          </span>
          <div >
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
import chart from '~/components/chart/chart'
export default {
  components: {
    chart
  },
  data() {
    return {
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
  layout: 'admin',
  mounted() {
    this.viewCharts = true
  },
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
