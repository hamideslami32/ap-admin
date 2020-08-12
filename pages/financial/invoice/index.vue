<template>
  <v-layout>
    <v-flex class="pa-4">
      <Search title="Invoice" :fields-data="invoiceSearchFields" />
      <DataTable class="mt-4" title="Invoice" :data="invoiceData" :headers="invoiceHeaders" :hide-footer="false" />
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
      invoiceSearchFields: {
        firstCol: [
        {
            value: '',
            type: 'input',
            label:'Invoice No',
            placeholder: '12345',
            mask:''
        },
        {
            value: '',
            type: 'input',
            label:'Issue Date',
            placeholder: 'YY/MM/DD',
            mask:'##/##/##'
        },
        {
            value: '',
            type: 'input',
            label:'Payment Date',
            placeholder: 'YY/MM/DD',
            mask:'##/##/##'
        }
        ],
        secondCol: [
        {
            value: 'Example 1',
            type: 'select',
            label:'Notify Status',
            selectList: [
            'Example 1',
            'Example 2',
            'Example 3',
            'Example 4',
            'Example 5'
            ]
        },
        {
            value: 'Success',
            type: 'select',
            label:'Payment Status',
            selectList: [
            'Success',
            'Failed',
            'Partial',
            'Waiting'
            ]
        }
        ],
      },
      invoiceData: [
        {
          invoiceNo: '12345',
          issueDate: '2020-12-09',
          paymentDate: '2020-12-09',
          notifyStatus: 'Example 1',
          paymentStatus: 'Success'
        },
        {
          invoiceNo: '54321',
          issueDate: '2020-12-09',
          paymentDate: '2020-12-09',
          notifyStatus: 'Example 2',
          paymentStatus: 'Failed'
        }
      ],
      invoiceHeaders: [
        {
          text: 'Invoice No',
          align: 'start',
          sortable: false,
          value: 'invoiceNo',
        },
        {
          text: 'Date of Issue',
          align: 'start',
          sortable: false,
          value: 'issueDate',
        },
        { sortable: false, text: 'Date of Payment', value: 'paymentDate' },
        { sortable: false, text: 'Notify Status', value: 'notifyStatus' },
        { sortable: false, text: 'Payment Status', value: 'paymentStatus' },
      ],
    }
  }
}
</script>
