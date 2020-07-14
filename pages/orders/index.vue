<template>
  <v-layout>
    <v-flex>
      <v-card class="d-flex flex-column pa-4">
        <div class="filters d-flex flex-column">
          <div class="d-flex filter-cols-wrapper pa-2">
            <div class="filter-col" v-for="(col, i) in filterFieldsData" :key="i" :style="`width:${col.width}`">
              <div class="field d-flex align-items pl-2" v-for="(item, j) in col" :key="j">
                <v-container fluid>
                  <v-row>
                    <v-col cols="3">
                      <v-subheader class="mt-4">{{item.label}}</v-subheader>
                    </v-col>
                    <v-col :cols="fieldCol(i)">
                      <v-text-field
                        :placeholder="item.placeholder"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4" v-if="i%2 !== 0">
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
          <div class="d-flex justify-end ma-4">
            <v-btn width="200" color="primary" large>search</v-btn>
          </div>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      filterFieldsData: [
        [
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
        [
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
        [
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
      ]
    }
  },
  methods: {
    fieldCol(colIndex) {
      return colIndex%2 !== 0 ? 4 : 8
    }
  }
}
</script>

<style lang="scss" scoped>
.filters {
  height: 400px;

  .filter-cols-wrapper {
    background-color: #fff;
    height: 80%;

    .filter-col {
      border-right: 1px solid #ccc;
      height: inherit;
      width: 33.33%;

      &:last-of-type {
        border-right: none;
      }

      .field {
        width: 90%;
      }
    }
  }
  
}
</style>
