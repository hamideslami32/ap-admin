<template>
    <v-layout>
        <v-flex class="pa-4">
            <v-expansion-panels :value="openExpansionPanel" :multiple="true">
                <v-expansion-panel class="search">
                    <v-expansion-panel-header class="text-h6">
                        Search
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <order-search />
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel class="search">
                    <v-expansion-panel-header class="text-h6">
                        Orders
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <order-table v-if="orders" :items="orders.items" :headers="mockHeaderData" />
                    </v-expansion-panel-content>
                </v-expansion-panel>
                <v-pagination v-model="page" :length="orders ? Math.ceil(orders.count / limit) : 2" />
            </v-expansion-panels>
        </v-flex>
    </v-layout>
</template>

<script>
import OrderSearch from '@/components/order/OrderSearch'
import OrderTable from '@/components/order/OrderTable'
import {orderApi} from "@/api/orderApi"

export default {
    components: {
        OrderSearch,
        OrderTable
    },
    async fetch() {
        this.orders = await orderApi.getOrders(this.limit, this.limit * (this.$route.query.page - 1))
    },
    data() {
        return {
            // ordersData,
            // index of expansion panels to be open by default
            // we can use arrays for multiple modules,
            limit: 20,
            orders: null,
            openExpansionPanel: [1],
            mockHeaderData: [
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
                { text: "Ticket/Details", value: "ticket-details", sortable :false }
            ],
        }
    },
    computed: {
        page: {
            get() {
                return Number(this.$route.query.page) || 1
            },
            set(x) {
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        page: x
                    }
                })
            }
        }
    },
    watch: {
        'page': '$fetch'
    },
}
</script>
