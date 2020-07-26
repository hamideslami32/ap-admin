<template>
  <v-layout>
    <v-flex>
      <div class="d-flex justify-space-between px-4 align-center user-info">
        <span v-for="(item, i) in data.userData" :key="i" :style="colorize">
          <span>
            {{ item.title }}:
          </span>
          <span>
           {{ item.value }}
          </span>
        </span>
      </div>
      <div>
        <v-tabs
          v-model="tab"
          height="60"
          background-color="white"
          centered
        >
          <v-tabs-slider />
          <v-tab href="#tab-1">
            Ticket Detail
          </v-tab>
          <v-tab href="#tab-2">
            Payment
          </v-tab>
          <v-tab href="#tab-3">
            Refund Details
          </v-tab>
          <v-tab href="#tab-4">
            Customer Support
          </v-tab>

        </v-tabs>
      </div>
      <div class="main pa-4 mb-10">
        <OrderWrapper id="#tab-1" />
        <v-expansion-panels class="my-4" :value="openExpansionPanel" :multiple="true">
          <CanceledOrderWrapper />
        </v-expansion-panels>
        <OrderWrapper />
        <PriceDetails class="mt-4" id="#tab-2"/>
        <div class="my-4 rounded">
          <v-data-table
            :headers="headers"
            :items="passengers"
            :expanded.sync="expanded"
            :single-expand="singleExpand"
            item-key="nationalId"
            show-expand
            class="rounded"
          >
            <template v-slot:top>
              <v-toolbar flat dark class="primary">
                <v-toolbar-title>Passengers</v-toolbar-title>
              </v-toolbar>
            </template>
            <template v-slot:expanded-item="{ passengers, item }">
              <td :colspan="headers.length">
                <tr class="d-flex justify-space-between">
                  <td class="pr-4">
                    {{ item.nationalId }}
                  </td>
                  <td class="pr-4">
                    {{ item.nationalId }}
                  </td>
                  <td class="pr-4">
                    {{ item.nationalId }}
                  </td>
                  <td class="pr-4">
                    {{ item.nationalId }}
                  </td>
                  <td class="pr-4">
                    {{ item.nationalId }}
                  </td>
                  <td class="pr-4">
                    {{ item.nationalId }}
                  </td>
                  <td class="pr-4">
                    {{ item.nationalId }}
                  </td>
                  <td>{{ item.nationalId }}</td>
                </tr>
              </td>
            </template>
          </v-data-table>
          <div class="d-flex justify-end mt-4">
            <v-btn color="secondary">
              Replace
            </v-btn>
            <v-btn color="red white--text" class="ml-2">
              Refund All
            </v-btn>
          </div>
        </div>
        <div class="my-8" id="#tab-3">
          <v-card class="rounded">
            <v-data-table
              :headers="refundHeaders"
              :items="refundsData"
              :items-per-page="5"
            >
              <template v-slot:top>
                <v-toolbar flat dark class="primary">
                  <v-toolbar-title>Refund Details</v-toolbar-title>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-card>
        </div>
        <div>
          <v-card class="rounded" id="#tab-4">
            <v-data-table
              :headers="supportHeaders"
              :items="customerSupportData"
              :items-per-page="5"
            >
              <template v-slot:top>
                <v-toolbar flat dark class="primary">
                  <v-toolbar-title>Customer Support</v-toolbar-title>
                </v-toolbar>
              </template>
            </v-data-table>
          </v-card>
        </div>
        <div class="d-flex justify-center mt-8">
          <v-btn color="secondary">
            Send Ticket
          </v-btn>
          <v-btn color="secondary" class="mx-4">
            Send Payment
          </v-btn>
          <v-btn color="secondary">
            User Log
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import OrderWrapper from '~/components/orderWrapper/OrderWrapper'
import CanceledOrderWrapper from '~/components/canceledOrderWrapper/CanceledOrderWrapper'
import PriceDetails from '~/components/priceDetails/PriceDetails'

export default {
  components: {
    OrderWrapper,
    CanceledOrderWrapper,
    PriceDetails
  },
  data() {
    return {
      tab: null,
      openExpansionPanel: [],
      expanded: [],
      singleExpand: false,
      supportHeaders: [
        {
          text: 'No',
          align: 'start',
          sortable: false,
          value: 'number',
        },
        { sortable: false, text: 'Subject', value: 'subject' },
        { sortable: false, text: 'Date Created', value: 'createdDate' },
        { sortable: false, text: 'Date Updated', value: 'updatedDate' },
        { sortable: false, text: 'Status', value: 'status' },
      ],
      refundHeaders: [
        {
          text: 'TKT No',
          align: 'start',
          sortable: false,
          value: 'ticketNo',
        },
        { sortable: false, text: 'Date', value: 'date' },
        { sortable: false, text: 'Fare', value: 'fairPrice' },
        { sortable: false, text: 'Tax', value: 'tax' },
        { sortable: false, text: 'Total', value: 'totalPrice' },
        { sortable: false, text: 'CRCN', value: 'cancelationRate' },
        { sortable: false, text: 'PNR', value: 'pnr' },
        { sortable: false, text: 'Penalty Amount', value: 'penaltyAmount' },
        { sortable: false, text: 'Refund Amount', value: 'refundAmount' },
      ],
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { sortable: false, text: 'Age', value: 'age' },
        { sortable: false, text: 'Name', value: 'firstName' },
        { sortable: false, text: 'Last Name', value: 'lastName' },
        { sortable: false, text: 'Passport No', value: 'passportNo' },
        { sortable: false, text: 'TKT No', value: 'ticketNo' },
        { sortable: false, text: 'Fare', value: 'farePrice' },
        { sortable: false, text: 'National ID', value: 'nationalId' },
        { sortable: false, text: 'Tax', value: 'tax' },
        { sortable: false, text: 'Total', value: 'totalPrice' },
        { sortable: false, text: '', value: '' },

      ],
      customerSupportData: [
        {
          number: 'U32456',
          subject: 'problem with payment',
          createdDate: '1399/04/22 13:00',
          updatedDate: '1399/04/22 14:30',
          status: 'Replayed',
        },
        {
          number: 'U32457',
          subject: 'problem with payment',
          createdDate: '1399/04/22  13:00',
          updatedDate: '1399/04/22 14:30',
          status: 'Replayed',
        }
      ],
      refundsData: [
        {
          ticketNo: '91755555558',
          date: '1399/3/5',
          fairPrice: '2,200,000',
          tax: '200,000',
          totalPrice: '2,400,000',
          cancelationRate: '30%',
          pnr: 'GHYKJ',
          penaltyAmount: '500,000',
          refundAmount: '200,000',
        },
        {
          ticketNo: '91754555558',
          date: '1399/3/5',
          fairPrice: '2,200,000',
          tax: '200,000',
          totalPrice: '2,400,000',
          cancelationRate: '30%',
          pnr: 'GHYKJ',
          penaltyAmount: '500,000',
          refundAmount: '200,000',
        }
      ],
      passengers: [
        {
          title: 'MS',
          age: 'Adult',
          firstName: 'Maedeh',
          lastName: 'Masoumi',
          passportNo: 'A123456780',
          ticketNo: '91755555555',
          farePrice: '2,200,000',
          nationalId: '1757473859',
          tax: '200,000',
          totalPrice: '2,400,000',
          details: [],
        },
        {
          title: 'MS',
          age: 'Adult',
          firstName: 'Maedeh',
          lastName: 'Masoumi',
          passportNo: 'A123456780',
          ticketNo: '91755555555',
          farePrice: '2,200,000',
          nationalId: '1757373859',
          tax: '200,000',
          totalPrice: '2,400,000',
          details: [],
        },
        {
          title: 'MS',
          age: 'Adult',
          firstName: 'Maedeh',
          lastName: 'Masoumi',
          passportNo: 'A123456780',
          ticketNo: '91755555555',
          farePrice: '2,200,000',
          nationalId: '1757673859',
          tax: '200,000',
          totalPrice: '2,400,000',
          details: [],
        },{
          title: 'MS',
          age: 'Adult',
          firstName: 'Maedeh',
          lastName: 'Masoumi',
          passportNo: 'A123456780',
          ticketNo: '91755555555',
          farePrice: '2,200,000',
          nationalId: '1757379859',
          tax: '200,000',
          totalPrice: '2,400,000',
          details: [],
        },
      ],
      data: {
        userData: [
          {
            title: 'User',
            value: 'Maedeh Masoumi'
          },
          {
            title: 'Phone',
            value: '09125277216'
          },
          {
            title: 'Orders',
            value: '3 - 9'
          },
          {
            title: 'Order Number',
            value: 'IF34988'
          },
          {
            title: 'Date of Issue',
            value: '1399-03-12 - 11:45'
          },
        ]
      }
    }
  },
  computed: {
    colorize() {
      return {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-info {
    height: 60px;
    background-color: $lightGray;
  }
</style>
