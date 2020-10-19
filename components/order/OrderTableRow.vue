<template>
    <tr v-if="order.firstOrder.flights.length > 1 || true">
        <td>
            {{ order._id }}
            <br>
            <nuxt-link :to="{ path: '/orders', query: { phone: '' } }">
                {{ order.user ? order.user.phone : '' }}&nbsp;
            </nuxt-link>
        </td>
        <td>
            <nuxt-link
                v-for="flight in order.firstOrder.flights"
                :key="flight._id"
                class="d-block"
                :to="{ path: '/orders', query: { 'route-origin': flight.departureAirport, 'route-dest': flight.arrivalAirport } }"
            >
                {{ flight.departureAirport.toUpperCase() }}-{{ flight.arrivalAirport.toUpperCase() }}
            </nuxt-link>
        </td>
        <td>
            <span v-for="flight in order.firstOrder.flights" :key="flight._id" class="d-block">
                {{ flight.departureDate }}
            </span>
        </td>
        <td>{{ order.issueDate }}</td>
        <td>
            <span v-for="flight in order.firstOrder.flights" :key="flight._id" class="d-block">
                <b>{{ flight.providerKey }}</b> / {{ flight.airline }}
            </span>
        </td>
        <td>{{ order.firstOrder.passengers.length || '' }} </td>
        <td>
            <span>
                {{ netPrice | separateNumber }}
            </span>
            /
            <span>
                {{ order.price | separateNumber }}
            </span>
            <span :class="profitPrice === 0 ? 'warning--text' : (profitPrice > 0 ? 'success--text' : 'danger--text')">
                ({{ profitPrice }})
            </span>
        </td>
        <td>{{ (order.firstOrder.reserves || []).map(r => r.pnr).join('-') }}</td>
        <td>
            <v-chip class="rounded py-1 mb-1 px-2 white--text caption text-center" :color="getBadgeColor(order.status)" style="width: 60px;">
                {{ order.status.toUpperCase() }}
            </v-chip>
        </td>
        <td :class="getColor(order.paymentStatus || '')">
            {{ order.paymentStatus || '' }}
        </td>
        <td class="d-flex flex-column justify-space-around">
            <v-btn small color="primary" @click="$router.push(`/orders/detail/${order._id}`)">
                Detail
            </v-btn>
            <v-btn small outlined>
                Ticket
            </v-btn>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        order: {
            type: Object,
            required: true
        }
    },
    computed: {
        netPrice() {
            return this.order.orderItems.reduce((carry, item) => {
                return carry + item.netPriceTotal
            }, 0)
        },
        profitPrice() {
            return this.order.price - this.netPrice
        }
    },
    methods: {
        getBadgeColor(string) {
            let color = 'blue'
            if (['success', 'paid'].includes(string)) {
                color = 'green'
            } else if (string.includes('failed')) {
                color = 'red'
            } else if (string.includes('pending')) {
                color = 'grey'
            }
            return color
        },
        getColor(string) {
            let color = ''
            if (string.includes('success')) {
                color = 'green--text'
            } else if (string.includes('failed')) {
                color = 'red--text'
            }
            return color
        }
    }
}
</script>

<style lang="scss" scoped>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    height: 80px;
    padding: 8px;
}
</style>
