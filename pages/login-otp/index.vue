<template>
    <v-layout>
        <v-flex class="d-flex justify-center" width="100%">
            <v-card class="pa-8 rounded" width="100%" max-width="500">
                <div class="text-h4 mb-6">
                    Login
                </div>
                <ValidationObserver ref="observer">
                    <form class="mt-8">
                        <ValidationProvider
                            v-slot="{ errors }"
                            name="Phone"
                            rules="required"
                        >
                            <v-text-field
                                v-model="username"
                                :error-messages="errors"
                                label="Phone"
                                required
                            />
                        </ValidationProvider>
                        <ValidationProvider
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
                        </ValidationProvider>
                        <v-btn large class="mt-8 primary white--text" :loading="loading" width="100%" @click="submit">
                            login
                        </v-btn>
                    </form>
                </ValidationObserver>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { loading } from '~/utils/mixins'
import { required, max } from "vee-validate/dist/rules"
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
} from "vee-validate"

setInteractionMode("eager")

extend("required", {
    ...required,
    message: "{_field_} can not be empty",
})

extend("max", {
    ...max,
    message: "{_field_} may not be greater than {length} characters",
})

export default {
    name: 'Login',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    mixins: [loading],
    layout: 'auth',
    data: () => ({
        phone: "",
        otp: "",
    }),
    methods: {
        async submit() {
            const validate = await this.$refs.observer.validate()
            if (validate) {
                const loginPayload = {
                    phone: this.username,
                }
                this.loading = true

                const message = await this.$auth.login(loginPayload)
                this.loading = false

                this.$toast[message.status](message.text)

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
