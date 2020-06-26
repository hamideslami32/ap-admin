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
                <v-text-field v-model="calories" type="number" label="Less than"></v-text-field>
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
      calories: "",
      orders: [
        {
          id: "1",
          name: "THR-MHD",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          id: "2",
          name: "MHD-THR",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          id: "3",
          name: "THR-KIH",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          id: "4",
          name: "KIH-MHD",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          id: "5",
          name: "SYZ-THR",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          id: "6",
          name: "MHD-SYZ",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          id: "7",
          name: "IFN-KIH",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          id: "8",
          name: "KIH-IFN",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          id: "9",
          name: "THR-IFN",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          id: "10",
          name: "IFN-THR",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
        {
          id: "11",
          name: "MHD-THR",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          id: "12",
          name: "THR-KIH",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          id: "13",
          name: "KIH-MHD",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          id: "14",
          name: "SYZ-THR",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          id: "15",
          name: "MHD-SYZ",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          id: "16",
          name: "IFN-KIH",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          id: "17",
          name: "KIH-IFN",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          id: "18",
          name: "THR-IFN",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          id: "19",
          name: "IFN-THR",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
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
        {
          text: "Calories",
          value: "calories",
          filter: (value) => {
            if (!this.calories) return true

            return value < parseInt(this.calories)
          },
        },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
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
