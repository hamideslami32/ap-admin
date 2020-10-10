<template>
    <v-navigation-drawer
        v-model="show"
        color="primary"
        width="270"
        clipped
        app
        dark
    >
        <v-list class="mt-8" dark>
            <app-drawer-item v-for="(item, i) in menu" :key="i" v-bind="item" />
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import menu from "~/utils/menu"
import AppDrawerItem from "~/components/drawer/AppDrawerItem"

export default {
    components: {
        AppDrawerItem,
    },
    props: {
        show: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            menu
        }
    }
}
</script>
