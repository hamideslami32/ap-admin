<template>
  <div class="price-details rounded">
    <v-card height="100%" class="d-flex">
      <div class="d-flex">
        <div v-for="(item, i) in data" :key="i" class="d-flex pa-2">
          <div>{{ item.title }}</div>
          <div>{{ item.value }}</div>
          <v-divider vertical class="px-2" />
        </div>
      </div>
      <v-spacer />
      <div>
        <span>Benefit:</span>
        <span>20000 T</span>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    // data: {
    //   type: Object,
    //   require : true
    // }
  },
  data() {
    return {
      data: [
        {
          title: 'Total Price',
          value: '12,000,000 T'
        },
        {
          title: 'Discount',
          value: '12,000 T'
        },
        {
          title: 'Purchased Price',
          value: '12,000,000 T'
        },
        {
          title: 'Mark Up/Down',
          value: '3%'
        },
        {
          title: 'Sales Price',
          value: '12,000,000 T'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.price-details {
  width: 100%;
  height: 100px;
}
</style>
