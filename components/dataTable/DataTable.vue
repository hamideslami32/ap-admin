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
        :search="search"
        class="cell-height"
      >
        <template v-slot:top>
          <v-text-field v-model="search" label="Search" class="mx-4" />
        </template>
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <OrderData :data="item"></OrderData>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import OrderData from '~/components/order/OrderData'
export default {
  components: {
    OrderData
  },
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
  .v-data-table {
    line-height: 2 !important;
  }
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
