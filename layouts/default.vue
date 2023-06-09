<template>
    <v-app>
        <app-drawer :show="drawer" />

        <v-app-bar
            :clipped-left="$vuetify.breakpoint.mdAndUp"
            app
            class="white lightPrimary--text align-center"
        >
            <v-app-bar-nav-icon class="mr-4" @click.stop="drawer = !drawer" />
            <nuxt-link to="/">
                <img class="d-block" src="~/assets/images/logo.svg" alt="apro-logo" height="28px">
            </nuxt-link>
            <v-spacer />
            <v-btn icon>
                <v-icon>mdi-message</v-icon>
            </v-btn>
            <v-menu
                bottom
                left
                offset-y
                origin="top right"
                transition="scale-transition"
            >
                <template v-slot:activator="{ attrs, on }">
                    <v-btn
                        class="mr-3"
                        min-width="0"
                        icon
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-badge
                            color="red"
                            overlap
                            bordered
                        >
                            <template v-slot:badge>
                                <span>5</span>
                            </template>

                            <v-icon>mdi-bell</v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <v-list
                    :tile="false"
                    nav
                >
                    <div>
                        <app-bar-item
                            v-for="(n, i) in notifications"
                            :key="`item-${i}`"
                        >
                            <v-list-item-title v-text="n" />
                        </app-bar-item>
                    </div>
                </v-list>
            </v-menu>
            <!-- <v-btn icon class="mr-6 ml-4">
        <v-icon>mdi-bell</v-icon>
      </v-btn> -->
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
                            <img src="~/assets/images/avatar.png" alt="avatar">
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
        <v-main>
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
import AppDrawer from '~/components/drawer/AppDrawer'
import { VHover, VListItem } from 'vuetify/lib'

export default {
    name: 'Default',
    middleware: ['auth'],
    components: {
        AppDrawer,
        AppBarItem: {
            render (h) {
                return h(VHover, {
                    scopedSlots: {
                        default: ({ hover }) => {
                            return h(VListItem, {
                                attrs: this.$attrs,
                                class: {
                                    'black--text': !hover,
                                    'white--text primary elevation-4': hover,
                                },
                                props: {
                                    activeClass: '',
                                    dark: hover,
                                    link: true,
                                    ...this.$attrs,
                                },
                            }, this.$slots.default)
                        },
                    },
                })
            },
        },
    },
    data() {
        return {
            dialog: false,
            drawer: false,
            drawerClipped: true,
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
            notifications: [
                'Mike John Responded to your email',
                'You have 5 new tasks',
                'You\'re now friends with Andrew',
                'Another Notification',
                'Another one',
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
                    'icon-pre': 'mdi-currency-usd',
                    text: 'Financial',
                    model: true,
                    to: "/financial",
                    children: [
                        { to: '/financial/sales', icon: 'mdi-finance', text: 'Sales' },
                        { to: '/financial/invoice', icon: 'mdi-receipt', text: 'Invoice' },
                        { to: '/financial/balance', icon: 'mdi-wallet-outline', text: 'Balance' },

                    ],
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
    watch: {
        '$vuetify.breakpoint.width': {
            handler: function() {
                this.changeDrawer()
            },
            deep: true,
            immediate: true
        }
    },
    mounted() {
        this.changeDrawer()
    },
    methods: {
        changeDrawer() {
            if (this.$vuetify.breakpoint.width > 1440) {
                this.drawer = true
            } else {
                this.drawer = false
            }

        }
    }
}
</script>

<style lang="scss" scoped>
a {
    color: #c5acf2 !important;
}

.v-list .v-list-item--active .v-icon {
    color: $lightPrimary;
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
