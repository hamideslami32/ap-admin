<template>
    <div class="price-details rounded">
        <v-card height="100%" class="d-flex align-center px-4">
            <div class="d-flex" width="80%">
                <div v-for="(item, i) in data.tableData" :key="i" class="d-flex pr-6">
                    <div class="d-flex flex-column justify-space-around">
                        <div class="grey--text text--darken-1 mb-2">
                            {{ item.title }}
                        </div>
                        <div class="text-subtitle-1 font-weight-medium" :class="item.color">
                            {{ item.value | separateNumber }}
                        </div>
                    </div>
                    <v-divider vertical class="px-2" />
                </div>
            </div>
            <v-spacer />
            <div width="20%">
                <div class="grey--text text--darken-1 mb-2">
                    Benefit
                </div>
                <span class="green--text text-subtitle-1 font-weight-medium">{{ data.benefit && '-' }}</span>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            require : true
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.price-details {
    width: 100%;
    height: 100px;
}
</style>
