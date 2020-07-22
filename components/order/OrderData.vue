<template>
  <fragment>
    <template v-if="data.returning">
      <td>
        {{ data.id }}
        <br>
        <nuxt-link :to="{ path: '/orders', query: { phone: data.phone } }">
          {{ data.phone }}
        </nuxt-link>
      </td>
      <td>
        <nuxt-link :to="{ path: '/orders', query: { 'route-origin': data.origin, 'route-dest': data.dest } }">
          {{ data.origin.toUpperCase() }}-{{ data.dest.toUpperCase() }}
        </nuxt-link>
        <br>
        <nuxt-link :to="{ path: '/orders', query: { 'route-origin': data.dest, 'route-dest': data.origin } }">
          {{ data.dest.toUpperCase() }}-{{ data.origin.toUpperCase() }}
        </nuxt-link>
      </td>
      <td>{{ data.departingDate }} <br> {{ data.returningDate }}</td>
      <td>{{ data.createdDate }}</td>
      <td>
        {{ data.provider }} - {{ data.airline }}
        <br>
        {{ data.provider }} - {{ data.airline }}
      </td>
      <td>{{ data.pax }} P</td>
      <td>
        {{ data.netPrice }}
        <br>
        {{ data.salesPrice }}
      </td>
      <td>{{ data.departingConfCode }} <br> {{ data.returningConfCode }}</td>
      <td>
        <v-chips class="success white--text rounded py-1 px-2">
          {{ data.departingOrderStatus }}
        </v-chips>
        <br>
        <v-chips class="success white--text rounded py-1 px-2">
          {{ data.returningOrderStatus }}
        </v-chips>
      </td>
      <td :class="getColor(data.paymentStatus)">
        {{ data.paymentStatus }}
      </td>
      <td class="d-flex flex-column justify-space-around">
        <v-btn class="primary white--text" small>
          Detail
        </v-btn>
        <v-btn class="green white--text" small>
          Ticket
        </v-btn>
      </td>
    </template>
    <template v-else>
      <td>
        {{ data.id }}
        <br>
        <nuxt-link :to="{ path: '/orders', query: { phone: data.phone } }">
          {{ data.phone }}
        </nuxt-link>
      </td>
      <td>
        <nuxt-link :to="{ path: '/orders', query: { 'route-origin': data.origin, 'route-dest': data.dest } }">
          {{ data.origin.toUpperCase() }}-{{ data.dest.toUpperCase() }}
        </nuxt-link>
      </td>
      <td>{{ data.departingDate }}</td>
      <td>{{ data.createdDate }}</td>
      <td>
        {{ data.provider }} - {{ data.airline }}
      </td>
      <td>{{ data.pax }} P</td>
      <td>
        {{ data.netPrice }}
        <br>
        {{ data.salesPrice }}
      </td>
      <td>{{ data.departingConfCode }}</td>
      <td>
        <v-chips class="success white--text rounded py-1 px-2">
          {{ data.departingOrderStatus }}
        </v-chips>
      </td>
      <td :class="getColor(data.paymentStatus)">
        {{ data.paymentStatus }}
      </td>
      <td class="d-flex flex-column justify-space-around">
        <v-btn class="primary white--text" small>
          Detail
        </v-btn>
        <v-btn class="green white--text" small>
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
}
</style>
