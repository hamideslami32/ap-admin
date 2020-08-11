<template>
  <v-layout>
    <v-flex class="pa-4">
      <UserSearch />
      <DataTable class="mt-4" title="Balance" :data="balanceData" :headers="balanceHeaders" />
    </v-flex>
  </v-layout>
</template>

<script>
import UserSearch from '~/components/users/search/UserSearch'
import DataTable from '~/components/dataTable/DataTable'
export default {
  components: {
    DataTable,
    UserSearch
  },
  data() {
    return {
      balanceData: [
        {
          id: '1',
          amount: '12,000,000',
          service: 'Example',
          remainingCredit: '20,000,000',
        },
        {
          id: '2',
          amount: '5,000,000',
          service: 'Example 2',
          remainingCredit: '6,000,000',
        }
      ],
      balanceHeaders: [
        {
          text: 'ID/Type',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        {
          text: 'Amount',
          align: 'start',
          sortable: false,
          value: 'amount',
        },
        { sortable: false, text: 'Service', value: 'service' },
        { sortable: false, text: 'Remaining Credit', value: 'remainingCredit' },
      ],
    }
  }
}
</script>
