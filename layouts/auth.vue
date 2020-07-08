<template>
  <v-app light>
    <v-app-bar
      fixed
      app
      class="light-blue white--text"
      dark
    >
      <v-toolbar-title class="logo" v-text="title" />
    </v-app-bar>
    <v-main class="my-8">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-alert
      :value="alertData.show"
      class="alert"
      border="left"
      close-text="Close Alert"
      :color="alertData.color"
      dark
      dismissible
      transition="scale-transition"
      @input="closeAlert($event)"
    >
      {{ alertData.message }}
    </v-alert>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { goTo, logout } from '~/utils/mixins'

export default {
  name: 'Auth',
  mixins: [goTo, logout],
  data() {
    return {
      fixed: true,
      title: "Apro Dashboard",
    }
  },
  computed: {
    ...mapGetters({
      alertData: 'global/alertData'
    })
  }
}
</script>

<style lang="scss" scoped>

.logo {
  font-size: 24px;
  font-weight: bold;
}

</style>
