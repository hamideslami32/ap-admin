<template>
  <fragment>
    <template v-if="data.returning">
      <td>
        {{data.id}}
        <br/>
        <nuxt-link :to="{ path: '/orders', query: { phone: data.phone } }">
          {{data.phone}}
        </nuxt-link>
      </td>
      <td>
        {{data.route}}
        <br/>
        {{data.route}}
      </td>
      <td>{{data.departingDate}} <br/> {{data.returningDate}}</td>
      <td>{{data.createdDate}}</td>
      <td>{{data.provider}} - {{data.airline}}</td>
      <td>{{data.pax}} P</td>
      <td>
        {{data.netPrice}}
        <br/>
        {{data.salesPrice}}
      </td>
      <td>{{data.departingConfCode}} <br/> {{data.returningConfCode}}</td>
      <td>
        <v-chips class="success white--text rounded py-1 px-2">{{data.departingOrderStatus}}</v-chips>
        <br/>
        <v-chips class="success white--text rounded py-1 px-2">{{data.returningOrderStatus}}</v-chips>
      </td>
      <td>{{data.paymentStatus}}</td>
      <td></td>
    </template>
    <template v-else>
      <td>
        {{data.id}}
        <br/>
        <nuxt-link :to="{ path: '/orders', query: { phone: data.phone } }">
          {{data.phone}}
        </nuxt-link>
      </td>
      <td>
        {{data.route}}
      </td>
      <td>{{data.departingDate}}</td>
      <td>{{data.createdDate}}</td>
      <td>{{data.provider}} - {{data.airline}}</td>
      <td>{{data.pax}} P</td>
      <td>
        {{data.netPrice}}
        <br/>
        {{data.salesPrice}}
      </td>
      <td>{{data.departingConfCode}}</td>
      <td>
        <v-chips class="success white--text rounded py-1 px-2">{{data.departingOrderStatus}}</v-chips>
      </td>
      <td>{{data.paymentStatus}}</td>
      <td></td>
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
}
</script>

<style lang="scss" scoped>
</style>
