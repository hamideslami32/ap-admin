<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      color="primary"
      width="270"
      :clipped="true"
      :mini-variant="false"
      app
      dark
    >
      <v-list>
        <template v-for="(item, i) in items">
          <div
            v-if="item.heading"
            :key="item.heading"
            class="d-flex pl-4 lightPrimary--text"
          >
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link :to="item.to" class="text-decoration-none">
                  {{ item.heading }}
                </nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </div>
          <v-list-group
            v-else
            :key="item.text"
            v-model="item.model"
            color="white"
            :append-icon="item.icon"
          >
            <template v-slot:activator>
              <v-icon class="mr-4">
                {{ item['icon-pre'] }}
              </v-icon>
              <v-list-item-content @click="$router.push(item.to)">
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, j) in item.children"
              :key="j"
              link
              :to="child.to"
              exact
            >
              <!-- <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action> -->
              <v-list-item-content class="pl-10">
                <v-list-item-title class="text-body-2">
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-divider :key="i" width="90%" class="lightPrimary mx-auto" />
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      class="white lightPrimary--text align-center"
    >
      <v-app-bar-nav-icon class="mr-4" @click.stop="drawer = !drawer" />
      <nuxt-link to="/">
        <img src="~/assets/imgs/logo.svg" alt="apro-logo" height="40px">
      </nuxt-link>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-message</v-icon>
      </v-btn>
      <v-btn icon class="mr-6 ml-4">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn v-if="!$auth.user" icon class="px-2 mr-5" width="100">
        <nuxt-link to="/login" class="text-decoration-none">
          <span class="white--text mr-1">Login</span>
          <v-icon color="white">
            mdi-login-variant
          </v-icon>
        </nuxt-link>
      </v-btn>
      <v-menu v-else offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            height="auto"
            class="user-profile"
            v-on="on"
          >
            <v-avatar>
              <img src="~/assets/imgs/avatar.png" alt="avatar">
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="remove-padding">
          <v-list-item
            v-for="(item, i) in userMenuItems"
            :key="i"
            class="white pointer primary--text user-menu-item"
            @click.native="item.title === 'Profile' ? $router.push('/profile') : $auth.logout()"
          >
            <v-list-item-action>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-action>
            <v-spacer />
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main class="grey lighten-2">
      <div>
        <nuxt />
      </div>
    </v-main>
    <!-- <v-btn
      bottom
      color="primary"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn> -->
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="primary white--text">
          Create contact
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-avatar
                  size="40px"
                  class="mx-3"
                >
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-card-details-outline"
                placeholder="Company"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                placeholder="Job title"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-mail"
                placeholder="Email"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                prepend-icon="mdi-text"
                placeholder="Notes"
              />
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
          >
            More
          </v-btn>
          <v-spacer />
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    name: 'Default',
    middleware: ['auth'],
    data() {
      return {
        dialog: false,
        userMenuItems: [
          {
            title: 'Profile',
            icon: 'mdi-account',
          },
          {
            title: 'Logout',
            icon: 'mdi-logout-variant',
          }
        ],
        items: [
          // { icon: 'mdi-contacts', text: 'Contacts' },
          { 'icon-pre': 'mdi-history', heading: 'Dashboard', to: '/' },
          // { icon: 'mdi-content-copy', text: 'Duplicates' },
          {
            text: "Orders",
            icon: 'mdi-chevron-down',
            'icon-alt': 'mdi-chevron-up',
            'icon-pre': 'mdi-playlist-check',
            to: "/orders",
            model: true,
            children: [
              {
                icon: "mdi-order-bool-descending",
                text: "All",
                to: "/orders",
              },
              {
                icon: "mdi-airplane",
                text: "Flight",
                to: "/orders/flight",
              },
              {
                icon: "mdi-bed",
                text: "Hotel",
                to: "/orders/hotel",
              },
              {
                icon: "mdi-chart-bubble",
                text: "Insurance",
                to: "/orders/insurance",
              },
            ]
          },
          {
            icon: 'mdi-chevron-down',
            'icon-alt': 'mdi-chevron-up',
            'icon-pre': 'mdi-account',
            text: 'User Management',
            model: true,
            to: "/users",
            children: [
              { to: '/users', icon: 'mdi-account-multiple', text: 'Users' },
              { to: '/users/permissions', icon: 'mdi-account-key', text: 'Permissions' },
              { to: '/users/roles', icon: 'mdi-card-account-details', text: 'Roles' },
              { to: '/users/groups', icon: 'mdi-account-group', text: 'Groups' },

            ],
          },
          // {
          //   icon: 'mdi-chevron-up',
          //   'icon-alt': 'mdi-chevron-down',
          //   text: 'More',
          //   model: false,
          //   children: [
          //     { text: 'Import' },
          //     { text: 'Export' },
          //     { text: 'Print' },
          //     { text: 'Undo changes' },
          //     { text: 'Other contacts' },
          //   ],
          // },
          // { icon: 'mdi-cog', text: 'Settings' },
          // { icon: 'mdi-message', text: 'Send feedback' },
          // { icon: 'mdi-help-circle', text: 'Help' },
          // { icon: 'mdi-cellphone-link', text: 'App downloads' },
          // { icon: 'mdi-keyboard', text: 'Go to the old version' },
        ],
    }},
    computed: {
      drawer() {
        let drawer = false
        if (this.$vuetify.breakpoint.width >= '1500') drawer = true
        return drawer
      },
      // miniVariant() {
      //   let variant = false
      //   if (this.$vuetify.breakpoint.width < '1500' && this.$vuetify.breakpoint.width >= '1200') variant = true
      //   return variant
      // }
    }
  }
</script>

<style lang="scss" scoped>
a {
  color: #C5ACF2 !important;
}
.v-list .v-list-item--active .v-icon {
  color: $lightPrimary ;
}
.child-item {
  font-size: 0.8em !important;
}
.user-profile {
  border-radius: 50%;
  padding: 0 !important;
  min-width: unset !important;
}
.user-menu-item {
  &:hover {
    background-color: #eee !important;
  }
}
</style>
