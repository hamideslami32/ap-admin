<template>
    <div class="d-flex flex-column mt-4">
        <div class="filters d-flex flex-column">
            <form class="d-flex flex-column flex-md-row filter-cols-wrapper">
                <div v-for="(col, key) in filterFieldsData" :key="key" class="filter-col pr-6">
                    <div v-for="(item, j) in col" :key="j" class="field d-flex align-items">
                        <v-text-field
                            v-if="item.type === 'input'"
                            v-model="item.value"
                            v-mask="item.mask"
                            outlined
                            dense
                            :label="item.label"
                            :placeholder="item.placeholder"
                        />
                        <v-select
                            v-else
                            v-model="item.value"
                            :label="item.label"
                            outlined
                            dense
                            :items="item.selectList"
                        />
                        <div v-if="key === 'secondCol'">
                            <v-text-field
                                v-model="item.s_value"
                                v-mask="item.mask"
                                outlined
                                dense
                                :label="item.label"
                                :placeholder="item.s_placeholder"
                                class="ml-2"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import forOwn from 'lodash/forOwn'
import forEach from 'lodash/forEach'
import { normalizeSearchField, normalizeUrl, capitalizeFirstLetter } from '@/utils/helpers'
export default {
    data() {
        return {
            filterFieldsData: {
                firstCol: [
                    {
                        value: '',
                        type: 'input',
                        label:'Phone',
                        placeholder: '0912-123-4567',
                        mask:'####-###-####'
                    },
                    {
                        value: '',
                        type: 'input',
                        label:'Order No',
                        placeholder: 'IF-123456',
                        mask:'AA-#######'
                    },
                    {
                        value: 'Flight',
                        type: 'select',
                        label:'Product',
                        selectList: [
                            'Flight',
                            'Hotel',
                            'Bus',
                            'Visa'
                        ]
                    }
                ],
                secondCol: [
                    {
                        value: '',
                        type: 'input',
                        label:'Issue Date',
                        placeholder: 'From - YY/MM/DD',
                        s_value: '',
                        s_placeholder: 'To - YY/MM/DD',
                        mask:'##/##/##'

                    },
                    {
                        value: '',
                        type: 'input',
                        label:'Travel Date',
                        placeholder: 'From - YY/MM/DD',
                        s_value: '',
                        s_placeholder: 'To - YY/MM/DD',
                        mask:'##/##/##'

                    },
                    {
                        value: '',
                        type: 'input',
                        label:'Route',
                        placeholder: 'Origin (THR)',
                        s_value: '',
                        s_placeholder: 'Destination (KIH)',
                        mask:'AAA'

                    }
                ],
                thirdCol: [
                    {
                        value: 'Failed',
                        type: 'select',
                        label:'Payment Status',
                        placeholder: '',
                        selectList: [
                            'Success',
                            'Pending',
                            'Failed',
                            'Partial'
                        ]
                    },
                    {
                        value: 'Pending',
                        type: 'select',
                        label:'Order Status',
                        placeholder: '',
                        selectList: [
                            'Success',
                            'Pending',
                            'Failed'
                        ]
                    },
                    {
                        value: '',
                        type: 'input',
                        label:'Confirmation Code',
                        placeholder: '12X45FH9',
                        mask:''

                    }
                ],
            }
        }
    },
    watch: {
        $route: {
            handler: function() {
                this.init()
            },
            deep: true,
            immediate: true
        },
    },
    mounted() {
        this.init()

    },
    methods: {
        init() {
            this.fillSearchValues()
        // if (urlHasValue) this.search()
        },
        fillSearchValues() {

            // get url
            let url =  window.location.search
            let searchParams =  new URLSearchParams(url)

            // let urlHasParams = Boolean(searchParams.getAll().length())
            let urlHasParams = true

            if (urlHasParams) {
                let urlObj = {}
                searchParams.forEach((value,label) => {
                    urlObj[label] = value
                })

                // normalized url object
                let fieldValuesArray = normalizeUrl(urlObj)

                //set values
                this.setSearchFieldValues(fieldValuesArray)

            }

            // return if url has value
            return urlHasParams
        },
        setSearchFieldValues(fieldsArray) {
            forEach(fieldsArray, (item) => {
                forOwn(this.filterFieldsData, (array) => {
                    forEach(array, (fieldObject) => {

                        if (fieldObject.label === item.label) {

                            if (item.placeholder && (item.placeholder === 'to' || item.placeholder === 'destination')) {
                                fieldObject.s_value = item.value

                            } else {
                                if (fieldObject.type === 'select') {
                                    fieldObject.value = capitalizeFirstLetter(item.value)
                                } else {
                                    fieldObject.value = item.value
                                }
                            }
                        }
                    })
                })
            })
        },
        fieldCol(key) {
            return key === 'secondCol' ? 4 : 8
        },
        search() {
            const url = this.generateSearchUrl()
            this.$router.push({path: '/orders', query: url})
        },
        getSearchFormValues() {
            let fieldValuesArray = []
            let label
            let fieldData
            forOwn(this.filterFieldsData, (items,i) => {
                forEach(items , (fieldObject) => {
                    const fieldLabel = fieldObject.label

                    if (fieldObject.value) {
                        if (fieldLabel === 'Issue Date' || fieldLabel === 'Travel Date') {
                            label = fieldLabel+'-from'
                        } else if (fieldLabel === 'Route') {
                            label = fieldLabel+'-origin'
                        } else {
                            label = fieldLabel
                        }

                        fieldData = {
                            label: label,
                            value: fieldObject.value
                        }

                        fieldValuesArray.push(fieldData)
                    }
                    if (i === 'secondCol' && fieldObject.s_value) {

                        if (fieldLabel === 'Issue Date' || fieldLabel === 'Travel Date') {
                            label = fieldLabel+'-to'
                        } else if (fieldLabel === 'Route') {
                            label = fieldLabel+'-dest'
                        }

                        fieldData = {
                            label: label,
                            value: fieldObject.s_value,
                        }

                        fieldValuesArray.push(fieldData)
                    }
                })
            })
            return normalizeSearchField(fieldValuesArray)
        },
        generateSearchUrl() {
            let normalizedSearchFormValues = this.getSearchFormValues()
            let urlObject = {}

            forEach(normalizedSearchFormValues, (x => {
                urlObject[x.label] = x.value
            }))

            return urlObject
        },

    }
}
</script>

<style lang="scss" scoped>
.filters {
    height: 100%;

    .container {
        padding: 8px !important;
    }

    .filter-cols-wrapper {
        background-color: #fff;

        .filter-col {
            width: 100%;
            border-right: 1px solid $lightGrey;
            margin-left: 24px;

            &:first-of-type {
                margin-left: 0;
            }

            &:last-of-type {
                padding-right: 0 !important;
                border-right: none;
            }

            .field {
                width: 100%;
            }
        }
    }
}

@media only screen and (max-width: 960px) {
    .filter-col {
        border-right: none !important;
    }
}
</style>
