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
            text: "Orders",
            align: "start",
            sortable: false,
            value: "name",
          },
          { text: "Order Id", value: "id" },
          { text: "Net Price", value: "netPrice" },
          { text: "Price", value: "price" },
          { text: "Flight Date/Time", value: "flightDate" },
          { text: "Order Date/Time", value: "orderDate" },
          { text: "Status", value: "status" },
          { text: "Phone", value: "phone" },
          { text: "Customer Name", value: "customerName" },
        ],
      // request for this data (default -> latest || query data by search widget link)
      mockOrdersData: 
      [
              {
                id: "1",
                name: "THR-MHD",
                netPrice: 159,
                price: 6.0,
                flightDate: 24,
                orderDate: 4.0,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'
              },
              {
                id: "2",
                name: "MHD-THR",
                netPrice: 237,
                price: 9.0,
                flightDate: 37,
                orderDate: 4.3,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'
              },
              {
                id: "3",
                name: "THR-KIH",
                netPrice: 262,
                price: 16.0,
                flightDate: 23,
                orderDate: 6.0,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "4",
                name: "KIH-MHD",
                netPrice: 305,
                price: 3.7,
                flightDate: 67,
                orderDate: 4.3,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "5",
                name: "SYZ-THR",
                netPrice: 356,
                price: 16.0,
                flightDate: 49,
                orderDate: 3.9,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "6",
                name: "MHD-SYZ",
                netPrice: 375,
                price: 0.0,
                flightDate: 94,
                orderDate: 0.0,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "7",
                name: "IFN-KIH",
                netPrice: 392,
                price: 0.2,
                flightDate: 98,
                orderDate: 0,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "8",
                name: "KIH-IFN",
                netPrice: 408,
                price: 3.2,
                flightDate: 87,
                orderDate: 6.5,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "9",
                name: "THR-IFN",
                netPrice: 452,
                price: 25.0,
                flightDate: 51,
                orderDate: 4.9,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "10",
                name: "IFN-THR",
                netPrice: 518,
                price: 26.0,
                flightDate: 65,
                orderDate: 7,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "11",
                name: "MHD-THR",
                netPrice: 237,
                price: 9.0,
                flightDate: 37,
                orderDate: 4.3,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "12",
                name: "THR-KIH",
                netPrice: 262,
                price: 16.0,
                flightDate: 23,
                orderDate: 6.0,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "13",
                name: "KIH-MHD",
                netPrice: 305,
                price: 3.7,
                flightDate: 67,
                orderDate: 4.3,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "14",
                name: "SYZ-THR",
                netPrice: 356,
                price: 16.0,
                flightDate: 49,
                orderDate: 3.9,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "15",
                name: "MHD-SYZ",
                netPrice: 375,
                price: 0.0,
                flightDate: 94,
                orderDate: 0.0,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "16",
                name: "IFN-KIH",
                netPrice: 392,
                price: 0.2,
                flightDate: 98,
                orderDate: 0,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "17",
                name: "KIH-IFN",
                netPrice: 408,
                price: 3.2,
                flightDate: 87,
                orderDate: 6.5,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "18",
                name: "THR-IFN",
                netPrice: 452,
                price: 25.0,
                flightDate: 51,
                orderDate: 4.9,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
              {
                id: "19",
                name: "IFN-THR",
                netPrice: 518,
                price: 26.0,
                flightDate: 65,
                orderDate: 7,
                status: "success",
                phone: "09121234567",
                customerName: 'Hamid Eslami'        },
            ],
    }
  }
}
</script>
