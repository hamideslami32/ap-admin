<template>
  <v-layout>
    <v-flex class="pa-4">
      <UserSearch></UserSearch>
    </v-flex>
  </v-layout>
</template>

<script>
import UserSearch from '~/components/users/search/UserSearch'
export default {
  components: {
    UserSearch
  },
  data() {
    return {}
  }
}
</script>
