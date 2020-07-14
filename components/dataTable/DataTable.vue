<template>
  <v-expansion-panel class="data-table" :value="0">
    <v-expansion-panel-header class="text-h6">
      {{ title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-data-table
        :headers="headers"
        :items="data"
        item-key="id"
        class="elevation-1"
        :search="search"
      >
        <template v-slot:top>
          <v-text-field v-model="search" label="Search" class="mx-4" />
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
    props: {
      data: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      headers: {
        type: Array,
        required: true
      },
    },
    data() {
        return {
            search: "",
        }
    },
    methods: {
        // filterOnlyCapsText(value, search, item)
        filterOnlyCapsText(value, search) {
          return (
            value != null &&
            search != null &&
            typeof value === "string" &&
            value.toString().toLocaleUpperCase().indexOf(search) !== -1
          )
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
