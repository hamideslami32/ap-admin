<template>
  <v-expansion-panel class="data-table" :value="0">
    <v-expansion-panel-header class="text-h6">
      {{ title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-data-table
        :headers="headers"
        :items="data"
        item-key="id"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:top>
          <v-text-field v-model="search" label="Search" class="mx-4" />
        </template>
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <td>{{ item.id }}</td>
              <td>{{ item.route }}</td>
              <td>{{ item.departingDate }}</td>
              <td>{{ item.createdDate }}</td>
              <td>{{ item.provider + ' - ' + item.airline }}</td>
              <td>{{ item.pax+' P' }}</td>
              <td>{{ item.netPrice }}</td>
              <td>{{ item.departingConfCode }}</td>
              <td>{{ item.departingOrderStatus }}</td>
              <td>
                <v-chips class="success white--text rounded pa-2">{{ item.departingOrderStatus }}</v-chips>
              </td>
              <td>{{ item.paymentStatus }}</td>
              <td></td>
              <span class="order-icon rounded white elevation-1">
                <v-icon>
                  mdi-airplane
                </v-icon>
              </span>
            </tr>
          </tbody>
        </template>
        <!-- <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template> -->
      </v-data-table>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
    props: {
      data: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      headers: {
        type: Array,
        required: true
      },
    },
    computed: {
      generateTableOrders() {
        let orders = []

        return orders
      }
    },
    data() {
        return {
            search: "",
        }
    },
    methods: {
        // filterOnlyCapsText(value, search, item)
        filterOnlyCapsText(value, search) {
          return (
            value != null &&
            search != null &&
            typeof value === "string" &&
            value.toString().toLocaleUpperCase().indexOf(search) !== -1
          )
        },
    }
}
</script>

<style lang="scss" scoped>
.data-table {
  .order-icon {
    background-color: #fff;
    border: 1px solid grey;
    position: absolute;
    left: 2px;
    margin-top: 5px;
    padding: 3px;
  }
}

@media only screen and (max-width: 960px) {
  .filter-col {
    border-right: none !important;
  }
}
</style>
