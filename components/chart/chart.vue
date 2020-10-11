<template>
    <v-card class="pa-4">
        <p class="mb-8 text-h6">
            {{ title }}
        </p>
        <apexchart :type="type" :options="chartOptions" :series="chartData" />
    </v-card>
</template>

<script>
import ApexCharts from "vue-apexcharts"

export default {
    components: {
        apexchart: ApexCharts,
    },
    props: {
        title: {
            type: String,
            required: true
        },
        chartData: {
            type: Array,
            required: true
        },
        chartOptions: {
            type: Object,
            required: true
        },
        type: {
            type: String,
            required: true
        },
    },

}
</script>

<style lang="scss" scoped>
</style>
