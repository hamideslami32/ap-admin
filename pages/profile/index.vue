<template>
  <div class="d-flex profile pa-4">
    <v-card v-if="$auth.user" class="d-flex justify-space-around pa-4 align-center" width="60%">
      <div class="avatar mr-8">
        <v-avatar size="256">
          <img src="~/assets/imgs/avatar.png" alt="avatar">
        </v-avatar>
      </div>
      <form class="d-flex mt-2 form">
        <div v-for="(item, i) in userInfoList" :key="i">
          <v-text-field
            v-model="$auth.user[item.property]"
            :label="item.title"
            :disabled="isPhone(item.property)"
            :filled="isPhone(item.property)"
          />
        </div>
        <v-btn class="primary white--text" width="100%" :loading="loading" large @click="submit">
          Update User Data
        </v-btn>
      </form>
    </v-card>
    <div class="card-group">
      <v-card class="roles">
        <div class="title text-sm-body-2">
          roles
        </div>
      </v-card>
      <v-card class="permissions">
        <div class="title text-sm-body-2">
          permissions
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { loading } from '~/utils/mixins'
export default {
  name: 'Profile',
  mixins: [loading],
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
        this.$toast.success('Your info is updated!')
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile {
    justify-content: space-between;
    min-height: 400px;

    .form {
      flex-wrap: wrap;
      justify-content: space-between;
      height: 80%;

      & > div {
        width: 48%;
      }
    }

    .card-group {
      display: flex;
      width: 39%;
      flex-direction: column;
      justify-content: space-between;
    }

    .roles,
    .permissions {
      padding: 1rem;
      height: 49%;
      align-items: space-between;
      align-self: stretch;

      .title {
        border-bottom: 1px solid $primary;
        color: $primary;
        border-radius: none;
      }
    }
  }
</style>
