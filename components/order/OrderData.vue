<template>
  <fragment>
    <template v-if="data.firstOrder.flights.length > 1">
      <td>
        {{ data.order._id }}
        <br>
        <nuxt-link :to="{ path: '/orders', query: { phone: '' } }">
          {{ data.order.user ? data.order.user.phone : '0' }}
        </nuxt-link>
      </td>
      <td>
        <nuxt-link :to="{ path: '/orders', query: { 'route-origin': data.firstOrder.flights[0].departureAirport, 'route-dest': data.firstOrder.flights[0].arrivalAirport } }">
          {{ data.firstOrder.flights[0].departureAirport.toUpperCase() }}-{{ data.firstOrder.flights[0].arrivalAirport.toUpperCase() }}
        </nuxt-link>
        <br>
        <nuxt-link :to="{ path: '/orders', query: { 'route-origin': data.firstOrder.flights[1].departureAirport, 'route-dest': data.firstOrder.flights[1].arrivalAirport } }">
          {{ data.firstOrder.flights[1].departureAirport.toUpperCase() }}-{{ data.firstOrder.flights[1].arrivalAirport.toUpperCase() }}
        </nuxt-link>
      </td>
      <td>{{ data.firstOrder.flights[0].departureDate }} <br> {{ data.firstOrder.flights[1].departureDate }}</td>
      <td>{{ data.issueDate }}</td>
      <td>
        {{ data.firstOrder.flights[0].providerKey }} - {{ data.firstOrder.flights[0].airline }}
        <br>
        {{ data.firstOrder.flights[1].providerKey }} - {{ data.firstOrder.flights[1].airline }}
      </td>
      <td>{{ data.firstOrder.passengers.length || '' }} </td>
      <td>
        {{ data.price | separateNumber }}
        <!-- <br>
        {{ data.salesPrice }} -->
      </td>
      <td>{{ data.firstOrder.pnr[0] }} <br> {{ data.firstOrder.pnr[1] }}</td>
      <td>
        <v-chip class="white--text rounded py-1 mb-1 px-2" :class="getBadgeColor(data.order.status)">
          {{ data.order.status }}
        </v-chip>
        <br>
        <v-chip class="white--text rounded py-1 px-2" :class="getBadgeColor(data.order.status)">
          {{ data.order.status }}
        </v-chip>
      </td>
      <td :class="getColor(data.paymentStatus || '')">
        {{ data.paymentStatus || ''}}
      </td>
      <td class="d-flex flex-column justify-space-around">
        <v-btn class="secondary white--text" small @click="$router.push('/orders/detail')">
          Detail
        </v-btn>
        <v-btn class="blue white--text" small>
          Ticket
        </v-btn>
      </td>
    </template>
    <template v-else>
      <td>
        {{ data.order._id }}
        <br>
        <nuxt-link :to="{ path: '/orders', query: { phone: '' } }">
          {{ data.order.user ? data.order.user.phone : '' }}
        </nuxt-link>
      </td>
      <td>
        <nuxt-link :to="{ path: '/orders', query: { 'route-origin': data.firstOrder.flights[0].departureAirport, 'route-dest': data.firstOrder.flights[0].arrivalAirport } }">
          {{ data.firstOrder.flights[0].departureAirport.toUpperCase() }}-{{ data.firstOrder.flights[0].arrivalAirport.toUpperCase() }}
        </nuxt-link>
      </td>
      <td>{{ data.firstOrder.flights[0].departureDate }}</td>
      <td>{{ data.issueDate }}</td>
      <td>
        {{ data.firstOrder.flights[0].providerKey }} - {{ data.firstOrder.flights[0].airline }}
      </td>
      <td>{{ data.firstOrder.passengers.length || '' }} </td>
      <td>
        {{ data.price | separateNumber  }}
        <!-- <br>
        {{ data.salesPrice }} -->
      </td>
      <td>{{ data.firstOrder.pnr[0] }}</td>
      <td>
        <v-chip class="white--text rounded py-1 px-2" :class="getBadgeColor(data.order.status)">
          {{ data.order.status }}
        </v-chip>
      </td>
      <td :class="getColor(data.paymentStatus || '')">
        {{ data.paymentStatus || ''}}
      </td>
      <td class="d-flex flex-column justify-space-around">
        <v-btn class="secondary white--text" small @click="$router.push(`/orders/detail/${data.order._id}`)">
          Detail
        </v-btn>
        <v-btn class="blue white--text" small>
          Ticket
        </v-btn>
      </td>
    </template>
  </fragment>
</template>

<script>
export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      getBadgeColor(string) {
        let color = 'blue'
        if (string.includes('success')) {
          color = 'success'
        } else if (string.includes('failed')) {
          color = 'danger'
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
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td{
  height: 80px;
  padding: 8px;
}
</style>
