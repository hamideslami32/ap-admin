<template>
  <div class="pa-4 d-flex flex-column">
    <!-- <v-card height="500" width="50%" class="d-flex">
        <chart class="chart" title="Daily Sign-up" :chart-data="series" :chart-options="options" type="area" width="80%"/>
        <div class="d-flex flex-column">
          <v-btn v-for="(item, i) in chartBtns" :key="i" >
            {{item.text}}
          </v-btn>
        </div>
      </v-card>
    <div v-if="viewCharts" class="chart-wrapper">
    </div> -->
    <div class="charts pa-4">
      charts
    </div>
    <v-container class="mt-8">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="secondary"
            icon="mdi-currency-usd"
            title="Credit"
            value="12,000,000"
            sub-icon="mdi-clock"
            sub-text="Just Updated"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="blue"
            icon="mdi-chart-box-plus-outline"
            title="Today Sales"
            value="1780"
            sub-icon="mdi-tag"
            sub-text="Sales By Fantastic Apro Team."
          />
        </v-col>

        <!-- <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="success"
            icon="mdi-store"
            title="Revenue"
            value="$ 34,245"
            sub-icon="mdi-calendar"
            sub-text="Last 24 Hours"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="orange"
            icon="mdi-sofa"
            title="Bookings"
            value="184"
            sub-icon="mdi-alert"
            sub-icon-color="red"
            sub-text="Get More Space..."
          />
        </v-col> -->
      </v-row>
    </v-container>
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
// import chart from '~/components/chart/chart'
export default {
  components: {
    // chart
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
          text: 'Flight Sales'
        },
        {
          text: 'Hotel Sales'
        },
        {
          text: 'Tours Sales'
        },
        {
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
.charts {
  height: 400px;
  border: 2px solid $greyColor;
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
