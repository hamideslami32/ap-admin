<template>
  <div class="order-wrapper rounded">
    <v-card height="100%" class="d-flex">
      <div class="white--text label" :class="labelColor">
        <div>{{ labelTitle }}</div>
      </div>
      <div class="main d-flex align-center flex-grow-1 px-4">
        <div class="airline mr-6 d-flex flex-column justify-center">
          <img src="~/assets/imgs/I3.png" class="mb-4" alt="airline logo" width="70%">
          <div class="mb-2">
            I3 365
          </div>
          <div>
            <v-chip tile class="rounded grey--text text--darken-2">
              Provider ATA
            </v-chip>
          </div>
        </div>
        <div class="flight-detail d-flex align-center flex-grow-1 mr-8">
          <div class="d-flex flex-column">
            <span class="font-weight-bold">{{ 'Tehran' }}</span>
            <span class="grey--text">{{ 'THR' }}</span>
            <span>
              {{ '1399/04/16' }}
              <br>
              {{ '17:30' }}
            </span>
          </div>
          <div class="d-flex align-center flex-grow-1">
            <div class="d-flex flex-column  align-center flex-grow-1">
              <span>{{ 'Economy' }}</span>
              <span class="d-flex align-center" style="width:100%;">
                <div class="circle" />
                <div class="line" />
              </span>
              <span>{{ 'Boeing MD' }}</span>
            </div>
            <v-icon>
              mdi-airplane-takeoff
            </v-icon>
            <div class="d-flex flex-column align-center flex-grow-1">
              <span>{{ 'Class H' }}</span>
              <span class="d-flex align-center" style="width:100%;">
                <div class="line" />
                <div class="circle primary" />
              </span>
              <span class="green--text">{{ 'Refundable' }}</span>
            </div>
          </div>
          <div class="d-flex flex-column align-end">
            <span class="font-weight-bold">{{ 'Mashhad' }}</span>
            <span class="grey--text">{{ 'MHD' }}</span>
            <span class="text-right">
              {{ '1399/04/16' }}
              <br>
              {{ '18:40' }}
            </span>
          </div>
        </div>
        <div class="passengers-price mr-10 d-flex flex-column justify-space-around">
          <div>
            <div class="mb-3">
              Adult:
              <span>{{ '3' }}x</span>
              <span>{{ '2,200,000' }}</span>
            </div>
            <div class="mb-3">
              Child:
              <span>{{ '1' }}x</span>
              <span>{{ '1,700,000' }}</span>
            </div>
            <div>
              infant:
              <span>{{ '1' }}x</span>
              <span>{{ '800,000' }}</span>
            </div>
          </div>
          <div class="secondary--text">
            Total:
            <span>{{ '9,100,000' }}</span>
          </div>
        </div>
        <div class="action d-flex flex-column justify-space-around">
          <div>
            <v-chip tile class="rounded grey--text text--darken-2">
              PNR: YTVSC
            </v-chip>
          </div>
          <v-btn class="primary" @click.native="edit = !edit">
            Replace
          </v-btn>
          <v-btn class="blue white--text">
            Rules
          </v-btn>
        </div>
      </div>
    </v-card>
    <div v-if="edit" class="edit pa-4 pt-8 elevation-1">
      <div class="inputs d-flex flex-wrap">
        <v-text-field
          v-for="(item, index) in editOrderData"
          :key="index"
          class="mr-4"
          outlined
          :label="item.label"
          :value="item.value"
        />
      </div>
      <div class="d-flex justify-end pr-4">
        <v-btn color="secondary">
          Confirm
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    labelColor: {
      type: String,
      default: 'red'
    },
    labelTitle: {
      type: String,
      default: 'Failed'
    },
  },
  data() {
    return {
      edit: false,
      editOrderData: [
        {
          label: 'Origin',
          value: 'THR'
        },
        {
          label: 'Destination',
          value: 'MHD'
        },
        {
          label: 'Airline',
          value: 'I3'
        },
        {
          label: 'Flight NO',
          value: '654'
        },
        {
          label: 'Dep. Date',
          value: '1399-03-02'
        },
        {
          label: 'Dep. Time',
          value: '10:30'
        },
        {
          label: 'Ari. Date',
          value: '1399-03-02'
        },
        {
          label: 'Ari. Time',
          value: '14:12'
        },
        {
          label: 'RBD',
          value: 'Y'
        },
        {
          label: 'PNR',
          value: 'DVGHJ'
        },
        {
          label: 'Provider',
          value: 'ATA'
        },
        {
          label: 'Airline',
          value: 'ATA'
        },
        {
          label: 'Fare',
          value: '2,600,000'
        },
        {
          label: 'Tax',
          value: '250,000'
        },
        {
          label: 'Total',
          value: '2,850,000'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.order-wrapper {
  width: 100%;
  min-height: 210px;
  .label {
    display: flex;
    width: 45px;
    justify-content: center;
    align-items: center;
    border-radius: 4px 0 0 4px !important;
    &> div {
      transform: rotate(-90deg);
    }
  }
  .main {
    height: 200px;
    & > div {
      height: 100%;
    }
    .flight-detail {
      & > div {
        height: inherit;
        justify-content: space-around;
      }
    }
  }
  .edit {
    background-color: #F8F4FF;
    min-height: 200px;
    .inputs {
      & > div {
        width: 10%;
      }
    }
  }
}

</style>
