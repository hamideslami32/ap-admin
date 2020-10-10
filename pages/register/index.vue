<template>
    <v-layout>
        <v-flex class="d-flex justify-center" width="100%">
            <v-card class="pa-8 card" max-width="500">
                <div class="text-h4">
                    Register
                </div>
                <ValidationObserver ref="observer">
                    <form class="mt-8">
                        <ValidationProvider
                            v-slot="{ errors }"
                            name="FirstName"
                            rules="required"
                        >
                            <v-text-field
                                v-model="registerFormData.firstName"
                                :error-messages="errors"
                                label="First Name"
                                required
                            />
                        </ValidationProvider>
                        <ValidationProvider
                            v-slot="{ errors }"
                            name="LastName"
                            rules="required"
                        >
                            <v-text-field
                                v-model="registerFormData.lastName"
                                :error-messages="errors"
                                label="Last Name"
                                required
                            />
                        </ValidationProvider>
                        <ValidationProvider
                            v-slot="{ errors }"
                            name="Email"
                            rules="required"
                        >
                            <v-text-field
                                v-model="registerFormData.email"
                                :error-messages="errors"
                                label="Email"
                                required
                            />
                        </ValidationProvider>
                        <ValidationProvider
                            v-slot="{ errors }"
                            name="Phone"
                            rules="required"
                        >
                            <v-text-field
                                v-model="registerFormData.phone"
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
                                v-model="registerFormData.password"
                                :error-messages="errors"
                                type="password"
                                label="Password"
                                required
                            />
                        </ValidationProvider>
                        <v-btn large class="mt-8 primary white--text" width="100%" :loading="loading" @click="submit">
                            register
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
    name: 'Register',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    mixins: [loading],
    layout: 'auth',
    data() {
        return {
            registerFormData: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
            }
        }
    },
    methods: {
        async submit() {
            const validate = await this.$refs.observer.validate()
            if (validate) {
                this.loading = true

                const message = await this.$auth.register(this.registerFormData)
                this.loading = false

                this.$toast[message.status](message.text)

            }
        },
        clear() {
            this.registerFormData = {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
            }
            this.$refs.observer.reset()
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        max-width: 500px;
        width: 100%;
        justify-content: center;
    }
</style>
