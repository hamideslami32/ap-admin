<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :expanded.sync="expanded"
    item-key="nationalId"
    :show-expand="expandable"
    class="rounded"
  >
    <template v-slot:top>
      <v-toolbar flat dark class="primary table-header">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
    </template>
    <template v-if="expandable" v-slot:expanded-item="{ item }">
      <td :colspan="headers.length">
        <tr class="d-flex justify-space-between">
          <td class="pr-4">
            {{ item.nationalId }}
          </td>
          <td class="pr-4">
            {{ item.nationalId }}
          </td>
          <td class="pr-4">
            {{ item.nationalId }}
          </td>
          <td class="pr-4">
            {{ item.nationalId }}
          </td>
          <td class="pr-4">
            {{ item.nationalId }}
          </td>
          <td class="pr-4">
            {{ item.nationalId }}
          </td>
          <td class="pr-4">
            {{ item.nationalId }}
          </td>
          <td>{{ item.nationalId }}</td>
        </tr>
      </td>
    </template>
  </v-data-table>
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
      expandable: {
        type: Boolean,
        default: false
      }
    },
    data() {
        return {
            expanded: [],
        }
    },
}
</script>

<style lang="scss" scoped>
.table-header {
  border-radius: 4px 4px 0 0;
}
</style>
