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
          { text: "Order Status", value: "order-status" },
          { text: "Payment Status", value: "payment-status" },
          { text: "Ticket/Details", value: "ticket-details", sortable :false }
        ],
      // request for this data (default -> latest || query data by search widget link)
      // mockOrdersData: [
      //   {
      //     id: 'DF-1976544',
      //     type: 'flight',
      //     phone: '09366182745',
      //     origin: 'thr',
      //     dest: 'mhd',
      //     returning: true,
      //     departingDate: '2020-12-03',
      //     returningDate: '2020-12-05',
      //     createdDate: '2020-12-01',
      //     airline: 'W5',
      //     provider: 'mahan',
      //     pax: '3',
      //     netPrice: '11,550,000',
      //     salesPrice: '12,550,000',
      //     departingConfCode: 'SDFXC',
      //     returningConfCode: 'HUJKI',
      //     departingOrderStatus: 'Success',
      //     returningOrderStatus: 'Success',
      //     paymentStatus: 'IPG, success',
      //     ticketUrl: '/flight/ticket/',
      //   },
      //   {
      //     id: 'DF-1976544',
      //     type: 'flight',
      //     phone: '09127654321',
      //     origin: 'kih',
      //     dest: 'syz',
      //     returning: false,
      //     departingDate: '2020-12-03',
      //     returningDate: '2020-12-05',
      //     createdDate: '2020-12-01',
      //     airline: 'W5',
      //     provider: 'mahan',
      //     pax: '3',
      //     netPrice: '11,550,000',
      //     salesPrice: '12,550,000',
      //     departingConfCode: 'SDFXC',
      //     returningConfCode: 'HUJKI',
      //     departingOrderStatus: 'Success',
      //     returningOrderStatus: 'Success',
      //     paymentStatus: 'partial,failed',
      //     ticketUrl: '/flight/ticket/',
      //   },
      // ],
    }
  }
}
</script>
