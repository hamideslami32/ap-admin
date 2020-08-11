<template>
  <v-layout>
    <v-flex class="pa-4">
      <Search title="Balance" :fieldsData="balanceSearchFields"/>
      <DataTable class="mt-4" title="Balance" :data="balanceData" :headers="balanceHeaders" :hideFooter="false" />
    </v-flex>
  </v-layout>
</template>

<script>
import Search from '~/components/search/Search'
import DataTable from '~/components/dataTable/DataTable'
export default {
  components: {
    DataTable,
    Search
  },
  data() {
    return {
      balanceSearchFields: {
        firstCol: [
        {
            value: '',
            type: 'input',
            label:'ID',
            placeholder: '',
            mask:''
        },
        {
            value: '',
            type: 'input',
            label:'Amount',
            placeholder: '186,000',
            mask:''
        },
        {
            value: 'Flight',
            type: 'select',
            label:'Service',
            selectList: [
            'Flight',
            'Hotel',
            'Bus',
            'Visa'
            ]
        }
        ],
        secondCol: [
        {
            value: '',
            type: 'input',
            label:'Remaining Credit',
            placeholder: '12,000,000',
            mask:''
        },
        ],
      },
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
