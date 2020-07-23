<template>
  <v-expansion-panel class="canceled-order-wrapper">
    <v-expansion-panel-header class="text-h6">
      <span>Mashhad -> Tehran</span>
      <v-spacer />
      <span>Canceled</span>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <OrderWrapper />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import OrderWrapper from '~/components/orderWrapper/OrderWrapper'
export default {
  components: {
    OrderWrapper
  }
}
</script>

<style lang="scss" scoped>
.canceled-order-wrapper {
  width: 100%;
  border: 1px solid grey;
}
</style>
