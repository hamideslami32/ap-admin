<template>
  <div class="order-wrapper rounded">
    <v-card height="100%" class="d-flex">
      <div class="white--text label" :class="labelColor">
        <div>{{ labelTitle }}</div>
      </div>
      <div class="main d-flex align-center flex-grow-1 pa-4">
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
        <div class="flight-detail d-flex align-center flex-grow-1 mx-10">
          <div class="d-flex flex-column">
            <span class="font-weight-bold">{{ 'Tehran' }}</span>
            <span class="grey--text">{{ 'THR' }}</span>
            <span>{{ '1399/04/16 - 17:30' }}</span>
          </div>
          <div class="d-flex align-center">
            <div class="d-flex flex-column  align-center">
              <span>{{ 'Economy' }}</span>
              <span class="d-flex align-center">
                <div class="circle" />
                <div class="line" />
              </span>
              <span>{{ 'Boeing MD' }}</span>
            </div>
            <v-icon>
              mdi-airplane-takeoff
            </v-icon>
            <div class="d-flex flex-column align-center">
              <span>{{ 'Class H' }}</span>
              <span class="d-flex align-center">
                <div class="line" />
                <div class="circle primary" />
              </span>
              <span class="green--text">{{ 'Refundable' }}</span>
            </div>
          </div>
          <div class="d-flex flex-column align-end">
            <span class="font-weight-bold">{{ 'Mashhad' }}</span>
            <span class="grey--text">{{ 'MHD' }}</span>
            <span>{{ '1399/04/16 - 18:40' }}</span>
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
          <v-btn class="primary">
            Replace
          </v-btn>
          <v-btn class="blue white--text">
            Rules
          </v-btn>
        </div>
      </div>
    </v-card>
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
      default: 'System'
    },
  }
}
</script>

<style lang="scss" scoped>
.order-wrapper {
  width: 100%;
  height: 210px;
  .label {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px 0 0 4px !important;
    &> div {
      transform: rotate(-90deg);
    }
  }
  .main {
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
}
</style>
