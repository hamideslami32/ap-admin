<template>
  <v-layout>
    <v-flex class="pa-4">
      <v-expansion-panels :value="openExpansionPanel" :multiple="true">
        <Search />
        <OrderTable title="Orders" :data="ordersData" :headers="mockHeaderData" />
      </v-expansion-panels>
    </v-flex>
  </v-layout>
</template>

<script>
import Search from '~/components/search/Search'
import OrderTable from '~/components/orderTable/OrderTable'
import {ordersData} from '~/assets/js/orders-data'
export default {
  components: {
    Search,
    OrderTable
  },
  data() {
    return {
      ordersData,
      // index of expansion panels to be open by default
      // we can use arrays for multiple modules
      openExpansionPanel: [0, 1],
      mockHeaderData: [
          {
            text: "Order ID",
            align: "start",
            value: "id",
          },
          { text: "ORG - DST" , value: 'route'},
          { text: "Travel Date" , value: 'travel-date'},
          { text: "Date of Issue" , value: "issue-date"},
          { text: "Airline/Provider", value: "airline-provider" },
          { text: "Pax", value: "pax" },
          { text: "Net/Sales Price", value: "price" },
          { text: "Confirmation Code", value: "conf-code" },
          { text: "Order Status", value: "order-status", sortable :false },
          { text: "Payment Status", value: "payment-status", sortable :false },
          { text: "Ticket/Details", value: "ticket-details", sortable :false }
        ],
    }
  }
}
</script>
