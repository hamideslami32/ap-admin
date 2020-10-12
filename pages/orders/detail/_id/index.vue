<template>
    <v-layout>
        <v-flex v-if="$orders.order">
            <div class="d-flex justify-space-between px-4 align-center user-info">
                <span v-for="(item, i) in userData" :key="i">
                    <span>
                        {{ item.title }}:
                    </span>
                    <span class="font-weight-bold" :class="colorize(item)">
                        <span v-if="item.title === 'Orders'">
                            <span class="green--text">
                                {{ item.value[0] }}
                            </span>
                            -
                            <span class="red--text">
                                {{ item.value[item.value.length - 1] }}
                            </span>

                        </span>
                        <span v-else>
                            <span>
                                {{ item.value }}
                            </span>
                        </span>
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
                    <v-tab v-for="(item, i) in tabItems" :key="i" @click="$vuetify.goTo(item.selector, {offset: 10})">
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </div>
            <div class="main pa-4 mb-10">
                <OrderWrapper id="tab-1" />
                <v-expansion-panels class="my-4" :value="openExpansionPanel" :multiple="true">
                    <!-- <CanceledOrderWrapper /> -->
                </v-expansion-panels>
                <OrderWrapper label-color="green" label-title="Success" />
                <PriceDetails class="my-8" :data="priceData" />
                <div class="my-4 rounded passengers">
                    <!-- <CanceledOrderWrapper /> -->
                    <v-card class="rounded">
                        <DataTable title="Passengers" :data="passengersData" :headers="passengersHeaders" :expandable="true" @open-refund="dialog = true" @show-passenger-edit="showPassengerEdit = true" />
                        <div v-if="showPassengerEdit" class="edit pa-4">
                            <div class="edit__header d-flex justify-space-between align-center">
                                <span class="mb-6 text-h6">
                                    Edit User
                                </span>
                                <v-icon @click="showPassengerEdit = false">
                                    mdi-close
                                </v-icon>
                            </div>
                            <div class="edit__main">
                                <div class="d-flex flex-wrap fields-wrapper">
                                    <div v-for="(field, j) in passengerEditData" :key="j" class="mr-2">
                                        <v-select
                                            v-if="field.type === 'select'"
                                            v-model="field.value"
                                            :label="field.label"
                                            outlined
                                            :items="field.selectList"
                                        />
                                        <v-text-field
                                            v-if="field.type === 'input'"
                                            v-model="field.value"
                                            :label="field.label"
                                            outlined
                                            :placeholder="field.placeholder"
                                        />
                                    </div>
                                </div>
                                <div class="edit__confirm d-flex justify-end">
                                    <v-btn large class="white backLight mr-2" @click="showPassengerEdit = false">
                                        Cancel
                                    </v-btn>
                                    <v-btn large class="primary">
                                        Save
                                    </v-btn>
                                </div>
                            </div>
                            <div />
                        </div>
                    </v-card>
                    <div class="d-flex justify-end mt-4">
                        <v-btn color="primary">
                            Share Ticket
                        </v-btn>
                        <v-btn color="secondary white--text" class="ml-2">
                            Refund All
                        </v-btn>
                    </div>
                </div>
                <div id="tab-3" class="my-8">
                    <v-card class="rounded">
                        <DataTable title="Refund Details" :data="refundsData" :headers="refundHeaders" />
                    </v-card>
                </div>
                <div id="tab-2" class="my-8">
                    <v-card class="rounded">
                        <DataTable title="Payment" :data="paymentData" :headers="paymentHeaders" />
                    </v-card>
                    <v-card class="d-flex mt-1 pa-4 justify-space-between">
                        <div class="d-flex">
                            <div class="d-flex flex-column mr-8">
                                <span class="grey--text text--darken-1 text-body-2 mb-2">
                                    Total
                                </span>
                                <span class="secondary--text text-h6">
                                    3,500,000 T
                                </span>
                            </div>
                            <v-divider vertical />
                            <div class="d-flex flex-column ml-8">
                                <span class="grey--text text--darken-1 text-body-2 mb-2">
                                    Paid
                                </span>
                                <span class="primary--text text-h6">
                                    1,000,000 T
                                </span>
                            </div>
                        </div>
                        <div class="d-flex flex-column">
                            <span class="grey--text text--darken-1 text-body-2 mb-2">
                                Benefit
                            </span>
                            <span class="green--text text-h6">
                                20,000 T
                            </span>
                        </div>
                    </v-card>
                </div>
                <div>
                    <v-card id="tab-4" class="rounded">
                        <DataTable title="Customer Support" :data="customerSupportData" :headers="supportHeaders" />
                    </v-card>
                </div>
                <!-- <div class="d-flex justify-center mt-8">
          <v-btn color="secondary">
            Send Ticket
          </v-btn>
          <v-btn color="secondary" class="mx-4">
            Send Payment
          </v-btn>
          <v-btn color="secondary">
            User Log
          </v-btn>
        </div> -->
            </div>
        </v-flex>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span>Refund</span>
                    <v-spacer />
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text class="dialog-main pt-4">
                    <div v-for="(checkbox, i) in dialogData" :key="i">
                        <v-checkbox
                            v-model="checkbox.model"
                            :label="checkbox.label"
                        />
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        @click="dialog = false"
                    >
                        back
                    </v-btn>

                    <v-btn
                        color="primary"
                        @click="secondDialog = true"
                    >
                        next
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="secondDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span>Refund</span>
                    <v-spacer />
                    <v-btn icon @click="secondDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text class="dialog-main pt-4">
                    <div v-for="(input, i) in secondDialogData" :key="i">
                        <v-text-field
                            v-model="input.value"
                            outlined
                            :label="input.label"
                            :placeholder="input.placeholder"
                        />
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        @click="secondDialog = false"
                    >
                        back
                    </v-btn>

                    <v-btn
                        color="primary"
                        @click="secondDialog = false"
                    >
                        confirm
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import OrderWrapper from '~/components/orderWrapper/OrderWrapper'
import DataTable from '~/components/dataTable/DataTable'

// import CanceledOrderWrapper from '~/components/canceledOrderWrapper/CanceledOrderWrapper'
import PriceDetails from '~/components/priceDetails/PriceDetails'

export default {
    components: {
        OrderWrapper,
        DataTable,
        // CanceledOrderWrapper,
        PriceDetails
    },
    data() {
        return {
            dialog: false,
            secondDialog: false,
            secondDialogData: [
                {
                    label: 'Penalty Amount',
                    placeholder: '20,000',
                    value: ''
                },
                {
                    label: 'Refund Amount',
                    placeholder: '10,000',
                    value: ''
                },
            ],
            dialogData: [
                {
                    model: true,
                    label: 'Tehran > Mashhad'
                },
                {
                    model: true,
                    label: 'Mashhad > Tehran'
                },
                {
                    model: true,
                    label: 'Both of them'
                },
            ],
            tabItems: [
                {
                    title: 'Ticket Detail',
                    selector: '#tab-1'
                },
                {
                    title: 'Payment',
                    selector: '#tab-2'
                },
                {
                    title: 'Refund Details',
                    selector: '#tab-3'
                },
                {
                    title: 'Customer Support',
                    selector: '#tab-4'
                },
                {
                    title: 'System Log',
                    selector: '#tab-1'
                },
                {
                    title: 'User Log',
                    selector: '#tab-1'
                },
            ],
            tab: null,
            openExpansionPanel: [],
            singleExpand: false,
            showPassengerEdit: false,
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
            ],
            passengerEditData: [
                {
                    value: 'MS',
                    type: 'select',
                    label:'Title',
                    selectList: [
                        'MR',
                        'MS',
                        'MiSS',
                        'Sir'
                    ]
                },
                {
                    value: 'Adult',
                    type: 'select',
                    label:'Age',
                    selectList: [
                        'Adult',
                        'Child',
                        'Infant'
                    ]
                },
                {
                    value: 'Maedeh',
                    type: 'input',
                    label:'First Name',
                },
                {
                    value: 'Masoumi',
                    type: 'input',
                    label:'Last Name',
                },
                {
                    value: '0123456789',
                    type: 'input',
                    label:'National Code',
                },
                {
                    value: 'A123456780',
                    type: 'input',
                    label:'Passport NO',
                },
                {
                    value: '1365/03/05',
                    type: 'input',
                    label:'Birthday',
                },
                {
                    value: '1401/03/05',
                    type: 'input',
                    label:'Date of Expire',
                },
                {
                    value: 'Iranian',
                    type: 'input',
                    label:'Nationality',
                },
                {
                    value: 'Turkey',
                    type: 'input',
                    label:'Issuing Country',
                },
            ],
            paymentHeaders: [
                {
                    text: '',
                    align: 'start',
                    sortable: false,
                    value: 'icon',
                },
                {
                    text: 'Title',
                    align: 'start',
                    sortable: false,
                    value: 'title',
                },
                { sortable: false, text: 'Date', value: 'date' },
                { sortable: false, text: 'Time', value: 'time' },
                { sortable: false, text: 'Payment Type', value: 'paymentType' },
                { sortable: false, text: 'Reference', value: 'reference' },
                { sortable: false, text: 'Bank Name', value: 'bank' },
                { sortable: false, text: 'Amount', value: 'amount' },

            ],
            supportHeaders: [
                {
                    text: 'No',
                    align: 'start',
                    sortable: false,
                    value: 'number',
                },
                { sortable: false, text: 'Subject', value: 'subject' },
                { sortable: false, text: 'Priority', value: 'priority' },
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
                { sortable: false, text: 'PNR', value: 'pnr' },
                { sortable: false, text: 'Date', value: 'date' },
                { sortable: false, text: 'Fare', value: 'fairPrice' },
                { sortable: false, text: 'Tax', value: 'tax' },
                { sortable: false, text: 'Total', value: 'totalPrice' },
                { sortable: false, text: 'CRCN', value: 'cancelationRate' },
                { sortable: false, text: 'Penalty Amount', value: 'penaltyAmount' },
                { sortable: false, text: 'Refund Amount', value: 'refundAmount' },
            ],
            passengersHeaders: [
                {
                    text: 'Title',
                    align: 'start',
                    sortable: false,
                    value: 'title',
                },
                { sortable: false, text: 'Age', value: 'age' },
                { sortable: false, text: 'Name', value: 'firstName' },
                { sortable: false, text: 'Last Name', value: 'lastName' },
                { sortable: false, text: 'National ID', value: 'nationalId' },
                { sortable: false, text: 'Passport No', value: 'passportNo' },
                { sortable: false, text: 'TKT No', value: 'ticketNo' },
                { sortable: false, text: 'Fare', value: 'farePrice' },
                { sortable: false, text: 'Tax', value: 'tax' },
                { sortable: false, text: 'Total', value: 'totalPrice' },
                { sortable: false, text: 'Menu', value: 'actions' },
                { sortable: false, text: '', value: 'data-table-expand' }
            ],
            paymentData: [
                {
                    icon: 'mdi-download-outline',
                    title: 'Part 1',
                    date: '1399/3/5',
                    time: '13:00',
                    paymentType: 'IPG',
                    reference: '123578hg6456788489',
                    bank: 'Saman',
                    amount: '1,900,000 T',
                    status: 'incoming'
                },
                {
                    icon: 'mdi-upload-outline',
                    title: 'Refund',
                    date: '1399/3/5',
                    time: '13:00',
                    paymentType: 'IPG',
                    reference: '123578hg6456788489',
                    bank: 'Saman',
                    amount: '900,000 T',
                    status: 'outgoing'
                },
                {
                    icon: 'mdi-timer-sand',
                    title: 'Part 2',
                    date: '1399/3/5',
                    time: 'waiting...',
                    paymentType: 'waiting...',
                    reference: 'waiting...',
                    bank: 'waiting...',
                    amount: '200,000 T',
                    status: 'waiting'
                }
            ],
            customerSupportData: [
                {
                    number: 'U32456',
                    subject: 'problem with payment',
                    priority: 'High',
                    createdDate: '1399/04/22 13:00',
                    updatedDate: '1399/04/22 14:30',
                    status: 'Replayed',
                },
                {
                    number: 'U32456',
                    subject: 'problem with payment',
                    priority: 'Average',
                    createdDate: '1399/04/22 13:00',
                    updatedDate: '1399/04/22 14:30',
                    status: 'Replayed',
                },
                {
                    number: 'U32457',
                    subject: 'problem with payment',
                    priority: 'Low',
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
            passengersData: [
                {
                    title: 'MS',
                    age: 'Adult',
                    firstName: 'Maedeh',
                    lastName: 'Masoumi',
                    passportNo: 'A123456780',
                    birthday: '1365/03/05',
                    expireDate: '1401/02/12',
                    nationality: 'Iranian',
                    issueCountry: 'Turkey',
                    ticketNo: '91755555555',
                    farePrice: '2,200,000',
                    nationalId: '1547473859',
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
                    birthday: '1365/03/05',
                    expireDate: '1401/02/12',
                    nationality: 'Iranian',
                    issueCountry: 'Turkey',
                    ticketNo: '91755555555',
                    farePrice: '2,200,000',
                    nationalId: '8857473859',
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
                    birthday: '1365/03/05',
                    expireDate: '1401/02/12',
                    nationality: 'Iranian',
                    issueCountry: 'Turkey',
                    ticketNo: '91755555555',
                    farePrice: '2,200,000',
                    nationalId: '3257473859',
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
                    birthday: '1365/03/05',
                    expireDate: '1401/02/12',
                    nationality: 'Iranian',
                    issueCountry: 'Turkey',
                    ticketNo: '91755555555',
                    farePrice: '2,200,000',
                    nationalId: '1757483859',
                    tax: '200,000',
                    totalPrice: '2,400,000',
                    details: [],
                },
            ],
        }
    },
    computed: {
        orderWrapperData() {
            // {
            //     flightStatus,
            //     airlineLogo,
            //     airlineName,
            //     airlineCode,
            //     provider,
            //     origin,
            //     destination,
            //     originCode,
            //     destCode,
            //     departureDate,
            //     arrivaldate,
            //     flightFinancialType,
            //     airplane,
            //     flightClass,
            //     isRefundable,
            //     passengersCount: {
            //         adult: 3,
            //         child: 1,
            //         infant: 1
            //     },
            //     price: {
            //         totalprice: 26135617,
            //         passengers: {
            //             adult: 2367352,
            //             child: 265364,
            //             infant: 354623
            //         },
            //         tax,
            //         fare
            //     },
            //     pnr,
            //     rules,

            // }
            return {

            }
        },
        priceData() {
            if (!this.$orders.order) return {}
            else return {
                tableData: [
                    {
                        title: 'Purchased Price',
                        value: this.$orders.order.firstOrder.price,
                        color: 'primary--text'
                    },
                    {
                        title: 'Commission',
                        value: 0,
                        color: 'secondary--text'
                    },
                    {
                        title: 'Discount',
                        value: 0,
                        color: ''
                    },
                    {
                        title: 'Mark Up/Down',
                        value: 0,
                        color: ''
                    },

                    {
                        title: 'Sales Price',
                        value: this.$orders.order.firstOrder.price,
                        color: ''
                    },
                    {
                        title: 'Net Price',
                        value: 0,
                        color: ''
                    }
                ],
                benfit: 0
            }
        }
    },
    created() {
        this.$orders.getOrder(this.$route.params.id)
    },
    mounted() {
        console.log(this.$orders.order)
    },
    methods: {
        colorize(item) {
            if (item.title === 'Phone' || item.title === 'Order Number') return 'secondary--text'
        }
    }
}
</script>

<style lang="scss" scoped>
    .v-input--selection-controls {
        margin-top: 0 !important;
    }

    .dialog-main {
        border-top: 1px solid $greyColor;
    }

    .user-info {
        height: 60px;
        background-color: $lightGrey;
    }

    .passengers {
        .edit {
            width: 100%;
            min-height: 200px;
            background: $backLight;

            &__main {
                .fields-wrapper > * {
                    width: 15%;
                }
            }
        }
    }
</style>
