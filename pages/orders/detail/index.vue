<template>
  <v-layout>
    <v-flex>
      <div class="d-flex justify-space-between px-4 align-center user-info">
        <span v-for="(item, i) in data.userData" :key="i">{{ item.title }}: {{ item.value }}</span>
      </div>
      <div>
        <v-tabs
          v-model="tab"
          height="60"
          background-color="white"
          centered
        >
          <v-tabs-slider />
          <v-tab href="#tab-1">
            Ticket Detail
          </v-tab>
          <v-tab href="#tab-2">
            Refund Details
          </v-tab>
          <v-tab href="#tab-3">
            Customer Support
          </v-tab>
          <v-tab href="#tab-4">
            Customer Support
          </v-tab>
        </v-tabs>
      </div>
      <div class="main pa-4">
        <OrderWrapper />
        <v-expansion-panels class="my-4" :value="openExpansionPanel" :multiple="true">
          <CanceledOrderWrapper />
        </v-expansion-panels>
        <OrderWrapper />
        <PriceDetails class="mt-4" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import OrderWrapper from '~/components/orderWrapper/OrderWrapper'
import CanceledOrderWrapper from '~/components/canceledOrderWrapper/CanceledOrderWrapper'
import PriceDetails from '~/components/priceDetails/PriceDetails'

export default {
  components: {
    OrderWrapper,
    CanceledOrderWrapper,
    PriceDetails
  },
  data() {
    return {
      data: {
        userData: [
          {
            title: 'User',
            value: 'Maedeh Masoumi'
          },
          {
            title: 'Phone',
            value: '09125277216'
          },
          {
            title: 'Orders',
            value: '3 - 9'
          },
          {
            title: 'Order Number',
            value: 'IF34988'
          },
          {
            title: 'Date of Issue',
            value: '1399-03-12 - 11:45'
          },
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-info {
    height: 60px;
    background-color: $lightGray;
  }
</style>
