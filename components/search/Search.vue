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
            <v-btn width="200" color="primary" x-large @submit="search">
              search
            </v-btn>
          </div>
        </div>
      </div>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
// import forOwn from 'lodash/forOwn'
export default {
    data() {
        return {
            filterFieldsData: {
                firstCol: [
                {
                    value: '',
                    type: 'input',
                    label:'Mobile',
                    placeholder: '09' 
                },
                {
                    value: '',
                    type: 'input',
                    label:'Order No',
                    placeholder: 'DF-'
                },
                {
                    value: '',
                    type: 'select',
                    label:'Product',
                    placeholder: 'flight',
                    selectList: [
                    'Flight',
                    'Hotel',
                    'Insurance',
                    'Visa'
                    ]
                }
                ],
                secondCol: [
                {
                    value: '',
                    type: 'input',
                    label:'Issue Date',
                    placeholder: 'From',
                    s_value: '',
                    s_placeholder: 'To'
                },
                {
                    value: '',
                    type: 'input',
                    label:'Travel Date',
                    placeholder: 'From',
                    s_value: '',
                    s_placeholder: 'To'
                },
                {
                    value: '',
                    type: 'input',
                    label:'Route',
                    placeholder: 'ORG',
                    s_value: '',
                    s_placeholder: 'DST'
                }
                ],
                thirdCol: [
                {
                    value: '',
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
                    value: '',
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
                    placeholder: ''
                }
                ]
            }
        }
    },
    methods: {
        fieldCol(key) {
            return key === 'secondCol' ? 4 : 8
        },
        search() {
            // const url = this.generateSearchUrl()
            // this.$router.push(url)
        },
        generateSearchUrl() {
            // let url = ''
            // let arr = this.filterFieldsData.forOwn(item => console.log({item}))


            // return url
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
