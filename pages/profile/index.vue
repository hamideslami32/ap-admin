<template>
  <v-layout>
    <v-flex style="margin: 0 auto;">
      <div class="mb-8 text-h4">
        Profile
      </div>
      <v-card v-if="$auth.user" class="d-flex justify-space-around pa-4 align-center" width="600px">
        <div class="avatar">
          <v-avatar size="256">
            <img src="~/assets/imgs/avatar.png" alt="avatar">
          </v-avatar>
        </div>
        <div class="d-flex flex-column mt-2">
          <div v-for="(item, i) in userInfoList" :key="i">
            <v-text-field
              v-model="$auth.user[item.property]"
              :label="item.title"
              placeholder="item.title"
              :disabled="isPhone(item.property)"
              :filled="isPhone(item.property)"
              outlined
            />
          </div>
          <v-btn class=" light-blue white--text" width="100%" :loading="loading" large @click="submit">
            Update User Data
          </v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { alert, loading } from '~/utils/mixins'
export default {
  name: 'Profile',
  mixins: [alert, loading],
  data() {
    return {
      userInfoList: [
        {
          property: 'firstName',
          title: 'First Name :'
        },
        {
          property: 'lastName',
          title: 'Last Name :'
        },
        {
          property: 'email',
          title: 'Email :'
        },
        {
          property: 'phone',
          title: 'Phone :'
        }
      ]
    }
  },
  methods: {
    isPhone(property) {
      return property === 'phone'
    },
    submit() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.alert.message = 'Your info is updated!'
        this.alert.show = true
        this.alert.color = 'red'
        this.$store.dispatch('global/setAlertData', this.alert)
      }, 2000)
    }
  }
}
</script>
