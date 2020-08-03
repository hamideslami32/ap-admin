<template>
  <v-expansion-panel class="data-table" :value="0">
    <v-expansion-panel-header class="text-h6">
      {{ title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-data-table
        :headers="headers"
        :items="data"
        :page.sync="page"
        hide-default-footer
        item-key="id"
        class="cell-height"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        @page-count="pageCount = $event"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <OrderData :data="item" />
            </tr>
          </tbody>
        </template>
      </v-data-table>
      <div class="d-flex justify-space-between mt-10">
        <div class="text-center">
          <v-btn color="secondary" class="mr-2" @click="toggleOrder">
            Toggle sort order
          </v-btn>
          <v-btn color="secondary" @click="nextSort">
            Sort next column
          </v-btn>
          <v-select
            v-model="sortSelect.value"
            class="mt-4"
            :label="sortSelect.label"
            outlined
            dense
            :items="sortSelect.selectList"
          />
        </div>
        <v-pagination v-model="page" color="secondary" :length="pageCount" />
      </div>
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
    data() {
        return {
            sortSelect: {
                value: 'orderID',
                label:'Sort Item',
                selectList: this.headers.map(x => x.value)
            },
            page: 1,
            pageCount: 0,
            sortBy: 'id',
            sortDesc: false,
        }
    },
    computed: {
      generateTableOrders() {
        let orders = []

        return orders
      }
    },
    methods: {
        toggleOrder () {
          this.sortDesc = !this.sortDesc
        },
        nextSort () {
          let index = this.headers.findIndex(h => h.value === this.sortBy)
          index = (index + 1) % this.headers.length
          this.sortBy = this.headers[index].value
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
