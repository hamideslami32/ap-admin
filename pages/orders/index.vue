<template>
  <v-layout>
    <v-flex class="pa-4">
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="text-h6">Search</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="d-flex flex-column">
              <div class="filters d-flex flex-column">
                <div class="d-flex flex-column flex-md-row filter-cols-wrapper">
                  <div class="filter-col pr-6" v-for="(col, key) in filterFieldsData" :key="key">
                    <div class="field d-flex align-items" v-for="(item, j) in col" :key="j">
                      <v-container fluid>
                        <v-row>
                          <v-col cols="4">
                            <v-subheader class="mt-4 subtitle-2">{{item.label}}</v-subheader>
                          </v-col>
                          <v-col :cols="fieldCol(key)">
                            <v-text-field
                              :placeholder="item.placeholder"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" v-if="key === 'secondCol'">
                            <v-text-field
                              :placeholder="item.s_placeholder"
                              class="ml-2"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-end ma-6">
                  <v-btn width="200" color="primary" large>search</v-btn>
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      filterFieldsData: {
        firstCol: [
          {
            label:'Mobile',
            placeholder: '09' 
          },
          {
            label:'Order No',
            placeholder: 'DF-'
          },
          {
            label:'Product',
            placeholder: 'flight'
          }
        ],
        secondCol: [
          {
            label:'Issue Date',
            placeholder: 'From',
            s_placeholder: 'To'
          },
          {
            label:'Travel Date',
            placeholder: 'From',
            s_placeholder: 'To'
          },
          {
            label:'Route',
            placeholder: 'ORG',
            s_placeholder: 'DST'
          }
        ],
        thirdCol: [
          {
            label:'Payment Status',
            placeholder: ''
          },
          {
            label:'Order Status',
            placeholder: ''
          },
          {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  min-height: 400px;
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
