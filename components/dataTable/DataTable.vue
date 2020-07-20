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
            <tr v-for="(item, i) in items" :key="i" v-html="orderFileds(item)">
            </tr>
          </tbody>
        </template>
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
        orderFileds(item) {
          if (item.returning) {
            return `
              <td>
                ${item.id}
                <br/>
                ${item.phone}
              </td>
              <td>
                ${item.route}
                <br/>
                ${item.route}
              </td>
              <td>${item.departingDate} <br/> ${item.returningDate}</td>
              <td>${item.createdDate}</td>
              <td>${item.provider} - ${item.airline}</td>
              <td>${item.pax} P</td>
              <td>
                ${item.netPrice}
                <br/>
                ${item.salesPrice}
              </td>
              <td>${item.departingConfCode} <br/> ${item.returningConfCode}</td>
              <td>
                <v-chips class="success white--text rounded py-1 px-2">${item.departingOrderStatus}</v-chips>
                <br/>
                <v-chips class="success white--text rounded py-1 px-2">${item.returningOrderStatus}</v-chips>
              </td>
              <td>${item.paymentStatus}</td>
              <td></td>
              <span class="order-icon rounded white elevation-1">
                <v-icon>
                  mdi-airplane
                </v-icon>
              </span>`
          } else {
            return `
              <td>
                ${item.id}
                <br/>
                ${item.phone}
              </td>
              <td>
                ${item.route}
              </td>
              <td>${item.departingDate}</td>
              <td>${item.createdDate}</td>
              <td>${item.provider} - ${item.airline}</td>
              <td>${item.pax} P</td>
              <td>
                ${item.netPrice}
                <br/>
                ${item.salesPrice}
              </td>
              <td>${item.departingConfCode}</td>
              <td>
                <v-chips class="success white--text rounded py-1 px-2">${item.departingOrderStatus}</v-chips>
              </td>
              <td>${item.paymentStatus}</td>
              <td></td>
              <span class="order-icon rounded white elevation-1">
                <v-icon>
                  mdi-airplane
                </v-icon>
              </span>`
          }
        }
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
