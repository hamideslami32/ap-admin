<template>
  <v-layout justify-center>
    <div class="w-80">
      <v-data-table
        :headers="headers"
        :items="orders"
        item-key="id"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title class="text-lg-h4 my-8">
              Flight Ordres
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical />
            <v-spacer />
          </v-toolbar>
          <v-text-field v-model="search" label="Search" class="mx-4" />
        </template>
        <!-- <template v-slot:body.append>
            <tr>
              <td></td>
              <td>
                <v-text-field v-model="netPrice" type="number" label="Less than"></v-text-field>
              </td>
              <td colspan="4"></td>
            </tr>
          </template> -->
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      netPrice: "",
      orders: [
        {
          id: "1",
          name: "THR-MHD",
          netPrice: 159,
          price: 6.0,
          flightDate: 24,
          orderDate: 4.0,
          status: "success",
          phone: "09121234567",
          customerName: 'Hamid Eslami'        },
        {
          id: "2",
          name: "MHD-THR",
          netPrice: 237,
          price: 9.0,
          flightDate: 37,
          orderDate: 4.3,
          status: "success",
          phone: "09121234567",
          customerName: 'Hamid Eslami'        },
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
  },
  computed: {
    headers() {
      return [
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
      ]
    },
  },
  methods: {
    // filterOnlyCapsText(value, search, item) {
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
      )
    },
  },
}
</script>
