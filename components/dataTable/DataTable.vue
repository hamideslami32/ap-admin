<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :expanded.sync="expanded"
    :hide-default-footer="true"
    item-key="nationalId"
    :item-class="rowClasses"
    :show-expand="expandable"
    class="rounded"
  >
    <template v-if="title" #top>
      <v-toolbar flat dark class="primary table-header">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
    </template>
    <template #item.actions>
      <v-menu
        bottom
        origin="center center"
        transition="scale-transition"
        offset-x
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <div
            v-bind="attrs"
            v-on="on"
          >
            <v-icon
              class="mr-2"
            >
              mdi-dots-vertical
            </v-icon>
          </div>
        </template>
        <v-list>
          <v-list-item
            v-for="(menuItem, i) in passengersMenu"
            :key="i"
            @click="menuItemClick(menuItem.title)"
          >
            <v-icon class="mr-2">
              {{ menuItem.icon }}
            </v-icon>
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <template v-if="isPassengersTable" #item.ticketNo="{ item }">
      <td class="pa-1">
        <div class="mb-1">
          {{ item.ticketNo }}
        </div>
        <div>{{ item.ticketNo }}</div>
      </td>
    </template>
    <template v-if="isPassengersTable" #item.farePrice="{ item }">
      <td>
        <div class="mb-1">
          {{ item.farePrice }}
        </div>
        <div>{{ item.farePrice }}</div>
      </td>
    </template>
    <template v-if="isPassengersTable" #item.tax="{ item }">
      <td>
        <div class="mb-1">
          {{ item.tax }}
        </div>
        <div>{{ item.tax }}</div>
      </td>
    </template>
    <template v-if="isPassengersTable" #item.totalPrice="{ item }">
      <td>
        <div class="mb-1">
          {{ item.totalPrice }}
        </div>
        <div>{{ item.totalPrice }}</div>
      </td>
    </template>
    <template v-if="title === 'Payment'" #item.icon="{ item }">
      <v-icon :class="rowClasses(item)">
        {{ item.icon }}
      </v-icon>
    </template>
    <template v-if="title === 'Customer Support'" #item.priority="{ item }">
      <v-chip :color="getColor(item.priority)" dark>
        {{ item.priority }}
      </v-chip>
    </template>
    <template v-if="expandable" #expanded-item="{ item }">
      <td colspan="5" class="expand">
        <tr class="d-flex justify-space-between">
          <td v-for="(cell, i) in expandData" :key="i" class="pr-4 text-center">
            <div class="text-body-2 grey--text text--darken-1">
              {{ cell.title }}
            </div>
            <br>
            <div class="primary--text font-weight-medium">
              {{ item[cell.value] }}
            </div>
          </td>
        </tr>
      </td>
    </template>
  </v-data-table>
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
      expandable: {
        type: Boolean,
        default: false
      }
    },
    data() {
        return {
            expanded: [],
            passengersMenu: [
              {
                title: 'Edit',
                icon: 'mdi-pencil-outline',
                func: ''
              },
              {
                title: 'Share Ticket',
                icon: 'mdi-share-variant-outline',
                func: ''
              },
              {
                title: 'Download Ticket',
                icon: 'mdi-download-outline',
                func: ''
              },
              {
                title: 'Refund',
                icon: 'mdi-arrow-left-circle-outline',
                func: ''
              }
            ],
            expandData: [
              {
                title: 'Passport NO',
                value: 'passportNo',
              },
              {
                title: 'Date of Birth',
                value: 'birthday',
              },
              {
                title: 'Date of Expire',
                value: 'expireDate',
              },
              {
                title: 'Nationality',
                value: 'nationality',
              },
              {
                title: 'Issuing Country',
                value: 'issueCountry',
              },
            ]
        }
    },
    computed: {
      isPassengersTable() {
        return this.title === 'Passengers'
      }
    },
    methods: {
      menuItemClick(title) {
        if (title === 'Edit') this.$emit('show-passenger-edit')
        if (title === 'Refund') this.$emit('open-refund')

      },
      rowClasses(item) {
        if (this.title === 'Payment') {
          //can also return multiple classes e.g ["orange","disabled"]
          if (item.icon === 'mdi-download-outline') return "green--text"
          else if (item.icon === 'mdi-upload-outline') return "red--text"
          else return 'lightPrimary--text'
        }
      },
      getColor(item) {
        if (item === 'High') return 'red'
        else if (item === 'Average') return 'orange'
        else return 'grey'
      }
    },
}
</script>

<style lang="scss" scoped>
.table-header {
  border-radius: 4px 4px 0 0;
}
.expand {
  line-height: 1.5 !important;
  padding: 15px !important;
}
</style>
