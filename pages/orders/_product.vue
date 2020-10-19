<template>
    <v-layout>
        <v-flex class="pa-4">
            <v-expansion-panels :value="openExpansionPanel" :multiple="true">
                <OrderSearch />
                <OrderTable v-if="$orders.orders" title="Orders" :data="$orders.orders" />
            </v-expansion-panels>
        </v-flex>
    </v-layout>
</template>

<script>
import OrderSearch from '@/components/order/OrderSearch'
import OrderTable from '@/components/order/OrderTable'
// import {ordersData} from '~/assets/js/orders-data'
export default {
    components: {
        OrderSearch,
        OrderTable
    },
    data() {
        return {
            // ordersData,
            // index of expansion panels to be open by default
            // we can use arrays for multiple modules
            openExpansionPanel: [1, 1],
        }
    },
    mounted() {
        this.$orders.getOrders()
    }
}
</script>
