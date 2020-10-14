<template>
    <v-layout>
        <v-flex class="d-flex justify-center" width="100%">
            <v-card class="pa-8 rounded" width="100%" max-width="500">
                <div class="text-h4 mb-6">
                    Login with phone
                </div>
                <ValidationObserver v-if="step === 'phone'" ref="phoneValidate" v-slot="{ handleSubmit }">
                    <form class="mt-8" @submit.prevent="handleSubmit(requestOtp)">
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
                        <v-btn large class="mt-8 primary white--text" :loading="loading" width="100%" type="submit">
                            Send code
                        </v-btn>
                    </form>
                </ValidationObserver>
                <ValidationObserver v-else ref="otpValidate" v-slot="{ handleSubmit }">
                    <form class="mt-8" @submit.prevent="handleSubmit(verifyOtp)">
                        <ValidationProvider
                            v-slot="{ errors }"
                            name="OTP"
                            rules="required|min:5|max:5"
                        >
                            <v-text-field
                                v-model="otp"
                                :error-messages="errors"
                                label="OTP Code"
                                required
                            />
                        </ValidationProvider>
                        <div class="d-flex justify-space-between align-center">
                            <span class="">
                                <span class="">
                                    {{ !resend ? 'Please be patient for: ' : "Didn't recieve code! Please try again" }}
                                </span>
                                <span v-if="!resend" class="">
                                    <timer :duration="duration" @finish="finishCounter" /> s
                                </span>
                            </span>
                            <v-btn
                                color="secondary"
                                :disabled="!resend"
                                class="resend white--text"
                                @click.prevent="resendRequest"
                            >
                                Resend
                            </v-btn>
                        </div>
                        <v-btn large class="mt-8 primary white--text" :loading="loading" width="100%" type="submit">
                            Login
                        </v-btn>
                    </form>
                </ValidationObserver>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import Timer from '~/components/Timer'
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
        Timer
    },
    mixins: [loading],
    layout: 'auth',
    data: () => ({
        phone: "",
        otp: "",
        step: "phone",
        resend: false,
        duration: 60,
    }),
    methods: {
        async requestOtp() {
            const validate = await this.$refs.phoneValidate.validate()
            if (validate) {
                try {
                    this.loading = true
                    const data  = await this.$auth.requestOtp(this.phone)
                    this.$toast.success(data.message)
                    this.duration = Number(data.duration)
                    this.step = 'verification'
                    console.log({data})
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
                    const data = await this.$auth.verifyOtp(this.phone, this.otp)
                    this.$toast.success(data.message)
                    console.log({data})
                } catch (e) {
                    console.log({e})
                    if(e.response.status === 401) {
                        this.$toast.error('OTP code is wrong. Please try again.')
                    }
                }finally {
                    this.loading = false
                }
            }
        },
        async resendRequest() {
            try {
                let data = await this.$auth.requestOtp(this.phone)
                this.$toast.success(data.message)
                console.log({data})
            } catch (e) {
                console.log({e})
                this.$toast.error("Something is wrong. please check your console.")
            }
        },

        finishCounter() {
            this.resend = true
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

<style lang="scss" scoped>
    .resend {
        cursor: pointer;
    }
</style>
