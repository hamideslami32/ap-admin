<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      width="300"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
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
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="child.to"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
      class="primary align-center"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon class="mr-4">
        <nuxt-link to="/" class="text-decoration-none">
          <v-icon color="white">
            mdi-home
          </v-icon>
        </nuxt-link>
      </v-btn>
      <v-chip class="white py-6 d-none d-sm-flex">
        <img src="~/assets/imgs/logo.svg" alt="apro-logo" height="40px">
      </v-chip>
      <v-spacer />
      <v-btn icon class="">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn v-if="!$auth.user" tile icon class="rounded primary px-2 mr-5" width="100">
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
            class="primary lighten-1"
            v-bind="attrs"
            height="auto"
            v-on="on"
          >
            <div>
              <v-icon>
                mdi-arrow-bottom
              </v-icon>
              <span v-if="$auth.user" class="mr-2">{{ $auth.user.firstName[0] + '.' + $auth.user.lastName }}</span>
              <v-avatar>
                <img src="~/assets/imgs/avatar.png" alt="avatar">
              </v-avatar>
            </div>
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
    <v-btn
      bottom
      color="primary"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
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
// import { goTo, logout } from '~/utils/mixins'
  export default {
    name: 'Default',
    middleware: ['auth'],
    // mixins: [goTo, logout],
    data: () => ({
      dialog: false,
      drawer: null,
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
        // { icon: 'mdi-history', text: 'Frequently contacted' },
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
    }),
    methods: {
      goTo(path) {
        this.$router.push(path)
      },
    },
  }
</script>

<style lang="scss" scoped>
.user-menu-item {
  &:hover {
    background-color: #eee !important;
  }
}
</style>
