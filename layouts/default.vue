<template>
  <v-app light>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="light-blue"
      class="white--text z-index-15"
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
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div>
        <span class="mr-2">Name</span>
        <v-avatar>
          <img src="~/assets/imgs/girl-avatar.webp" alt="girl-avatar">
        </v-avatar>
      </div>
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
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon light>
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      zIndexStyle: {
        zIndex: 15,
      },
      clipped: true,
      fixed: true,
      items: [
        {
          icon: "mdi-home",
          title: "Home",
          to: "/",
        },
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
      ],
      miniVariant: false,
      left: true,
      leftDrawer: true,
      title: "Apro Support Dashboard",
    }
  },
}
</script>
