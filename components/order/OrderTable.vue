<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        :page.sync="page"
        hide-default-footer
        item-key="id"
        class="cell-height"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        dense
        @page-count="pageCount = $event"
    >
        <template v-slot:body="{ items }">
            <tbody>
                <OrderTableRow v-for="(item, i) in items" :key="i" :order="item" />
            </tbody>
        </template>
    </v-data-table>
</template>

<script>
import OrderTableRow from '@/components/order/OrderTableRow'
export default {
    components: {
        OrderTableRow
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        hideHeaders: {
            type: Array,
            default: null
        },
        showHeaders: {
            type: Array,
            default: null
        },
        loading: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            sortSelect: {
                value: 'orderID',
                label:'Sort Item',
                // selectList: this.headers.map(x => x.value)
            },
            page: 1,
            pageCount: 0,
            sortBy: 'id',
            sortDesc: false,
        }
    },
    computed: {
        headers() {
            const { showHeaders, hideHeaders } = this
            const headers = [
                {
                    text: "Order ID",
                    align: "start",
                    value: "id",
                },
                { text: "ORG - DST" , value: 'route'},
                { text: "Travel Date" , value: 'travel-date'},
                { text: "Date of Issue" , value: "issue-date"},
                { text: "Airline/Provider", value: "airline-provider" },
                { text: "Pax", value: "pax" },
                { text: "Net/Sales Price", value: "price" },
                { text: "Confirmation Code", value: "conf-code" },
                { text: "Order Status", value: "order-status", sortable :false },
                { text: "Payment Status", value: "payment-status", sortable :false },
                { text: "Actions", value: "actions", sortable :false }
            ]
            if (showHeaders && hideHeaders) {
                console.warn('Using both `showHeaders` and `hideHeaders` are not allowed')
            } else if (showHeaders) {
                return headers.filter(h => showHeaders.includes(h.value))
            } else if (hideHeaders) {
                return headers.filter(h => !hideHeaders.includes(h.value))
            }
            return headers
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
