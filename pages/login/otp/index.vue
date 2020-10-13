<template>
    <v-layout>
        <v-flex class="d-flex justify-center" width="100%">
            <v-card class="pa-8 rounded" width="100%" max-width="500">
                <div class="text-h4 mb-6">
                    Login with OTP
                </div>
                <ValidationObserver v-if="step === 'phone'" ref="phoneValidate">
                    <form class="mt-8">
                        <ValidationProvider
                            v-slot="{ errors }"
                            name="Phone"
                            rules="required|min:11|max:11|mobileNumber"
                            vid="phone"
                        >
                            <v-text-field
                                v-model="phone"
                                :error-messages="errors"
                                label="Phone"
                                required
                            />
                        </ValidationProvider>
                        <v-btn large class="mt-8 primary white--text" :loading="loading" width="100%" @click="requestOtp">
                            Send OTP code
                        </v-btn>
                    </form>
                </ValidationObserver>
                <ValidationObserver v-else ref="otpValidate">
                    <form class="mt-8">
                        <ValidationProvider
                            v-slot="{ errors }"
                            name="otp"
                            rules="required|min:5|max:5"
                        >
                            <v-text-field
                                v-if="step !== 'phone'"
                                v-model="otp"
                                :error-messages="errors"
                                label="OTP Code"
                                required
                            />
                        </ValidationProvider>
                        <v-btn large class="mt-8 primary white--text" :loading="loading" width="100%" @click="verifyOtp">
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
import { required, max, min } from "vee-validate/dist/rules"
import '~/plugins/veeValidate/rules/mobileNumber'

extend('min', {
    ...min,
    message: "{_field_} should be {length} characters",
})

extend('max', {
    ...max,
    message: "{_field_} should be {length} characters",
})

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

export default {
    name: 'LoginOTP',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    mixins: [loading],
    layout: 'auth',
    data: () => ({
        phone: "",
        otp: "",
        step: "phone"
    }),
    methods: {
        async requestOtp() {
            const validate = await this.$refs.phoneValidate.validate()
            if (validate) {
                try {
                    this.loading = true
                    await this.$auth.requestOtp(this.phone)
                    this.step = 'verification'
                } catch (e) {
                    console.log({e})
                    this.$toast.error("User Can't login. Something is wrong. please check your console.")
                } finally {
                    this.loading = false
                }
            }
        },
        async verifyOtp() {
            const validate = await this.$refs.otpValidate.validate()
            if (validate) {
                try {
                    this.loading = true
                    await this.$auth.verifyOtp(this.phone, this.otp)
                } catch (e) {
                    if(e.response.status === 401) {
                        this.$toast.error('OTP code is wrong. Please try again.')
                    }
                }finally {
                    this.loading = false
                }
            }
        },
        clear() {
            this.phone = ""
            this.otp = ""
            this.step = "phone"
            this.$refs.phoneValidate.reset()
            this.$refs.otpValidate.reset()
        },
    },
}
</script>
