<template>
    <v-card class="pa-8 rounded" width="100%" max-width="500">
        <div>
            <img src="~assets/images/logo.svg" class="mx-auto d-block" width="200">
        </div>
        <v-observer ref="observer" v-slot="{ handleSubmit }">
            <form class="mt-8" @submit.prevent="handleSubmit(submit)">
                <v-provider
                    v-slot="{ errors }"
                    name="Phone or Email"
                    rules="required"
                >
                    <v-text-field
                        v-model="username"
                        :error-messages="errors"
                        label="Phone or Email"
                        required
                    />
                </v-provider>
                <v-provider
                    v-slot="{ errors }"
                    name="Password"
                    rules="required"
                >
                    <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        type="password"
                        label="Password"
                        required
                    />
                </v-provider>
                <v-btn large class="mt-4 primary white--text" :loading="loading" width="100%" type="submit">
                    Login
                </v-btn>
            </form>
        </v-observer>
        <div class="mt-3">
            <nuxt-link to="/login?otp=true">
                Login with OTP
            </nuxt-link>
        </div>
    </v-card>
</template>

<script>
import { loading } from '~/utils/mixins'

export default {
    name: 'LoginWithPassword',
    mixins: [loading],
    data: () => ({
        username: "",
        password: "",
    }),
    methods: {
        async submit() {
            this.loading = true
            try {
                await this.$auth.login({
                    username: this.username,
                    password: this.password,
                })
                await this.$router.push('/')
            } catch (err) {
                this.$toast.error(err.message)
            } finally {
                this.loading = false
            }
        },
        clear() {
            this.username = ""
            this.password = ""
            this.$refs.observer.reset()
        },
    },
}
</script>
