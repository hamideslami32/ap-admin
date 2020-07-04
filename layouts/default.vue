<template>
  <v-app light>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      class="light-blue white--text z-index-15"
      :style="zIndexStyle"
      dark
    >
      <v-app-bar-nav-icon @click.stop="leftDrawer = !leftDrawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "left" : "right"}` }}</v-icon>
      </v-btn>
      <v-btn icon class="mr-6">
        <nuxt-link to="/" class="text-decoration-none">
          <v-icon color="white">
            mdi-home
          </v-icon>
        </nuxt-link>
      </v-btn>
      <v-toolbar-title class="colorful" v-text="title" />
      <v-spacer />
      <v-btn v-if="!isLogin" icon class="light-blue darken-2 rounded px-2 mr-5" tile width="100" @click.native="isLogin = true">
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
            class="light-blue darken-2"
            dark
            v-bind="attrs"
            height="auto"
            v-on="on"
          >
            <div>
              <v-icon>
                mdi-arrow-bottom
              </v-icon>
              <span class="mr-2">P.Eslami</span>
              <v-avatar>
                <img src="~/assets/imgs/girl-avatar.webp" alt="girl-avatar">
              </v-avatar>
            </div>
          </v-btn>
        </template>
        <v-list class="remove-padding">
          <v-list-item
            v-for="(item, index) in userMenuItems"
            :key="index"
            class="white pointer"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon class="text-dark-blue">
                {{ item.icon }}
              </v-icon>
            </v-list-item-action>
            <v-spacer />
            <v-list-item-title class="text-dark-blue">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main class="my-8">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="leftDrawer"
      :style="zIndexStyle"
      :left="left"
      :mini-variant="miniVariant"
      :clipped="clipped"
      class="light-blue"
      fixed
      dark
      app
    >
      <v-list>
        <v-list-group
          v-for="(item, i) in menuItems"
          :key="i"
          value="true"
          class="white--text"
          link
        >
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title @click.prevent="$router.push(item.to)">
              {{ item.title }}
            </v-list-item-title>
          </template>
          <v-list-item
            v-for="(childItem, j) in item.children"
            :key="j"
            link
            class="light-blue pl-6"
            router
            :to="childItem.to"
          >
            <v-list-item-icon>
              <v-icon>{{ childItem.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ childItem.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      zIndexStyle: {
        zIndex: 15,
      },
      clipped: true,
      fixed: true,
      userMenuItems: [
        {
          title: 'Profile',
          icon: 'mdi-account'
        },
        {
          title: 'Logout',
          icon: 'mdi-logout-variant'
        }
      ],
      menuItems: [
        {
          title: "Orders",
          icon: "mdi-order-bool-descending-variant",
          to: "/orders",
          children: [
            {
              icon: "mdi-airplane",
              title: "Flight",
              to: "/orders/flight",
            },
            {
              icon: "mdi-bed",
              title: "Hotel",
              to: "/orders/hotel",
            },
            {
              icon: "mdi-chart-bubble",
              title: "Insurance",
              to: "/orders/insurance",
            },
          ]
        }
      ],
      miniVariant: false,
      left: true,
      leftDrawer: true,
      title: "Apro Dashboard",
    }
  },
}
</script>

<style lang="scss" scoped>

.colorful {
  font-size: 24px;
  font-weight: bold;
}

.remove-padding {
  padding: 0 !important;
}

.text-dark-blue {
  color: #0d47a1 !important;
}

.pointer {
  cursor: pointer;

  &:hover {
    background-color: #eee !important;
  }
}
</style>
