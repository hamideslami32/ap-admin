<template>
    <vue-json-pretty
        v-if="order"
        class="json-view"
        :data="order"
        highlight-mouseover-node
    />
</template>

<script>
import {orderApi} from "@/api/orderApi"

export default {
    async fetch() {
        this.order = await orderApi.getOrder(this.$route.params.id)
    },
    data() {
        return {
            order: null
        }
    }
}
</script>
