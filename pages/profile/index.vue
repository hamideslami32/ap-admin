<template>
    <div class="d-flex profile pa-4">
        <!-- <v-card class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
      <div class="card card-profile shadow">
          <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                      <a href="#">
                          <img src="~/assets/images/avatar.png" class="rounded-circle">
                      </a>
                  </div>
              </div>
          </div>
          <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
                  <base-button size="sm" type="info" class="mr-4">Connect</base-button>
                  <base-button size="sm" type="default" class="float-right">Message</base-button>
              </div>
          </div>
          <div class="card-body pt-0 pt-md-4">
              <div class="row">
                  <div class="col">
                      <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                              <span class="heading">22</span>
                              <span class="description">Friends</span>
                          </div>
                          <div>
                              <span class="heading">10</span>
                              <span class="description">Photos</span>
                          </div>
                          <div>
                              <span class="heading">89</span>
                              <span class="description">Comments</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="text-center">
                  <h3>
                      Jessica Jones<span class="font-weight-light">, 27</span>
                  </h3>
                  <div class="h5 font-weight-300">
                      <i class="ni location_pin mr-2"></i>Bucharest, Romania
                  </div>
                  <div class="h5 mt-4">
                      <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                      <i class="ni education_hat mr-2"></i>University of Computer Science
                  </div>
                  <hr class="my-4" />
                  <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                  <a href="#">Show more</a>
              </div>
          </div>
      </div>
    </v-card> -->
        <v-card v-if="$auth.user" class="d-flex justify-space-around pa-4 align-center" width="60%">
            <div class="avatar mr-8">
                <v-avatar size="256">
                    <img src="~/assets/images/avatar.png" alt="avatar">
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
