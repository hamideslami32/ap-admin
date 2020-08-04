<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :expanded.sync="expanded"
    item-key="nationalId"
    :item-class="rowClasses"
    :show-expand="expandable"
    class="rounded"
  >
    <template v-slot:top>
      <v-toolbar flat dark class="primary table-header">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ }">
      <v-icon
        class="mr-2"
      >
        mdi-dots-vertical
      </v-icon>
    </template>
    <template v-if="title === 'Payment'" v-slot:item.icon="{ item }">
      <v-icon :class="rowClasses(item)">
        {{ item.icon }}
      </v-icon>
    </template>
    <template v-if="expandable" v-slot:expanded-item="{ item }">
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
    methods: {
      rowClasses(item) {
        if (this.title === 'Payment') {
          if (item.icon === 'mdi-download-outline') {
            return "green--text" //can also return multiple classes e.g ["orange","disabled"]
          } else if (item.icon === 'mdi-upload-outline') {
            return "red--text"
          } else {
            return 'lightPrimary--text'
          }
        }
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
