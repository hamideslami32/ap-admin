<template>
    <v-app light>
        <v-app-bar
            fixed
            app
            dark
            class="white"
        >
            <v-chip class="white py-6">
                <img src="~/assets/imgs/logo.svg" alt="apro-logo" height="40px">
            </v-chip>
        </v-app-bar>
        <v-main class="my-8">
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { goTo, logout } from '~/utils/mixins'

export default {
    name: 'Auth',
    mixins: [goTo, logout],
    middleware: 'auth',
    data() {
        return {
            fixed: true,
            title: "Apro",
        }
    }
}
</script>

<style lang="scss" scoped>

.logo {
    font-size: 24px;
    font-weight: bold;
}

</style>
