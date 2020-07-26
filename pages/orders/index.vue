<template>
  <v-layout>
    <v-flex class="pa-4">
      <v-expansion-panels :value="openExpansionPanel" :multiple="true">
        <Search />
        <DataTable title="Orders" :data="ordersData" :headers="mockHeaderData" />
      </v-expansion-panels>
    </v-flex>
  </v-layout>
</template>

<script>
import Search from '~/components/search/Search'
import DataTable from '~/components/dataTable/DataTable'
import {ordersData} from '~/assets/js/orders-data'
export default {
  components: {
    Search,
    DataTable
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
            sortable: false,
            value: "id",
          },
          { text: "ORG - DST", sortable: false, },
          { text: "Travel Date", sortable: false, },
          { text: "Date of Issue", sortable: false, },
          { text: "Airline / Provider", sortable: false, },
          { text: "Pax", sortable: false, },
          { text: "Net Price / Sales Price", sortable: false, },
          { text: "Confirmation Code", sortable: false, },
          { text: "Order Status", sortable: false, },
          { text: "Payment Status", sortable: false, },
          { text: "Ticket / Details", sortable: false}
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
