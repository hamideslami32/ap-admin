<template>
    <v-subheader v-if="divider">
        {{ title }}
    </v-subheader>
    <v-list-group
        v-else-if="children"
        :prepend-icon="icon"
        :sub-group="indent > 0"
        no-action
        color="white"
    >
        <template v-slot:activator>
            <v-list-item-title @click="$router.push(to)">
                {{ title }}
            </v-list-item-title>
        </template>

        <app-drawer-item
            v-for="(child, i) in children"
            :key="i"
            v-bind="child"
            :indent="indent + 1"
        />
    </v-list-group>
    <v-list-item v-else :to="to" nuxt link>
        <v-list-item-icon v-if="icon">
            <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    name: 'AppDrawerItem',
    props: {
        title: {
            type: String,
            default: null,
        },
        icon: {
            type: String,
            default: null,
        },
        children: {
            type: Array,
            default: null,
        },
        indent: {
            type: Number,
            default: 0,
        },
        to: {
            type: String,
            default: null,
        },
        divider: {
            type: Boolean,
            default: false
        }
    }
}
</script>
