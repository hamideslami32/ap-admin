<template>
  <v-expansion-panel class="search">
    <v-expansion-panel-header class="text-h6">
      Search
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <div class="d-flex flex-column">
        <div class="filters d-flex flex-column">
          <div class="d-flex flex-column flex-md-row filter-cols-wrapper">
            <div v-for="(col, key) in filterFieldsData" :key="key" class="filter-col pr-6">
              <div v-for="(item, j) in col" :key="j" class="field d-flex align-items">
                <v-container fluid>
                  <v-row>
                    <v-col cols="4">
                      <v-subheader class="mt-4 subtitle-2">
                        {{ item.label }}
                      </v-subheader>
                    </v-col>
                    <v-col :cols="fieldCol(key)">
                      <v-text-field
                        v-if="item.type === 'input'"
                        v-model="item.value"
                        :placeholder="item.placeholder"
                      />
                      <v-select
                        v-else
                        v-model="item.value"
                        :items="item.selectList"
                      />
                    </v-col>
                    <v-col v-if="key === 'secondCol'" cols="4">
                      <v-text-field
                        v-model="item.s_value"
                        :placeholder="item.s_placeholder"
                        class="ml-2"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </div>
          </div>
          <div class="d-flex justify-end my-6">
            <v-btn width="200" color="primary" x-large @click="search">
              search
            </v-btn>
          </div>
        </div>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import forOwn from 'lodash/forOwn'
import forEach from 'lodash/forEach'
import { normalizeSearchField, normalizeUrl } from '~/utils/helpers'
export default {
    data() {
        return {
            filterFieldsData: {
                firstCol: [
                {
                    value: '',
                    type: 'input',
                    label:'Phone',
                    placeholder: '09' 
                },
                {
                    value: '',
                    type: 'input',
                    label:'Order No',
                    placeholder: 'df-'
                },
                {
                    value: '',
                    type: 'select',
                    label:'Product',
                    placeholder: 'flight',
                    selectList: [
                    'flight',
                    'hotel',
                    'bus',
                    'visa'
                    ]
                }
                ],
                secondCol: [
                {
                    value: '',
                    type: 'input',
                    label:'Issue Date',
                    placeholder: 'from',
                    s_value: '',
                    s_placeholder: 'to'
                },
                {
                    value: '',
                    type: 'input',
                    label:'Travel Date',
                    placeholder: 'from',
                    s_value: '',
                    s_placeholder: 'to'
                },
                {
                    value: '',
                    type: 'input',
                    label:'Route',
                    placeholder: 'origin',
                    s_value: '',
                    s_placeholder: 'destination'
                }
                ],
                thirdCol: [
                {
                    value: '',
                    type: 'select',
                    label:'Payment Status',
                    placeholder: '',
                    selectList: [
                    'success',
                    'pending',
                    'failed',
                    'partial'
                    ]
                },
                {
                    value: '',
                    type: 'select',
                    label:'Order Status',
                    placeholder: '',
                    selectList: [
                    'success',
                    'pending',
                    'failed'
                    ]
                },
                {
                    value: '',
                    type: 'input',
                    label:'Confirmation Code',
                    placeholder: ''
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
                  fieldObject.value = item.value

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

  .filter-cols-wrapper {
    background-color: #fff;
    height: 80%;

    .filter-col {
      border-right: 1px solid #eee;
      min-width: 30%;

      &:last-of-type {
        border-right: none;
        padding-right: 0 !important;
      }

      .field {

        .col {
          padding: 0 !important;
        }
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
