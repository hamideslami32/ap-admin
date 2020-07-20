<template>
  <v-layout>
    <v-flex class="pa-4">
      <v-expansion-panels :value="openExpansionPanel" :multiple="true">
        <Search />
        <DataTable title="Orders" :data="mockOrdersData" :headers="mockHeaderData" />
      </v-expansion-panels>
    </v-flex>
  </v-layout>
</template>

<script>
import Search from '~/components/search/Search'
import DataTable from '~/components/dataTable/DataTable'
export default {
  components: {
    Search,
    DataTable
  },
  data() {
    return {
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
          { text: "ORG - DST" },
          { text: "Travel Date" },
          { text: "Date of Issue" },
          { text: "Airline / Provider" },
          { text: "Pax" },
          { text: "Net Price / Sales Price" },
          { text: "Confirmation Code" },
          { text: "Order Status" },
          { text: "Payment Status" },
          { text: "Ticket / Details"},
        ],
      // request for this data (default -> latest || query data by search widget link)
      mockOrdersData: [
        {
          id: 'DF-1976544',
          type: 'flight',
          phone: '09366182745',
          route: 'thr-mhd',
          returning: true,
          departingDate: '2020-12-03',
          returningDate: '2020-12-05',
          createdDate: '2020-12-01',
          airline: 'W5',
          provider: 'mahan',
          pax: '3',
          netPrice: '11,550,000',
          salesPrice: '12,550,000',
          departingConfCode: 'SDFXC',
          returningConfCode: 'HUJKI',
          departingOrderStatus: 'Success',
          returningOrderStatus: 'Success',
          paymentStatus: 'IPG, success',
          ticketUrl: '/flight/ticket/',
        },
        {
          id: 'DF-1976544',
          type: 'flight',
          phone: '09366182745',
          route: 'thr-mhd',
          returning: false,
          departingDate: '2020-12-03',
          returningDate: '2020-12-05',
          createdDate: '2020-12-01',
          airline: 'W5',
          provider: 'mahan',
          pax: '3',
          netPrice: '11,550,000',
          salesPrice: '12,550,000',
          departingConfCode: 'SDFXC',
          returningConfCode: 'HUJKI',
          departingOrderStatus: 'Success',
          returningOrderStatus: 'Success',
          paymentStatus: 'IPG, success',
          ticketUrl: '/flight/ticket/',
        },
      ],
    }
  }
}
</script>
