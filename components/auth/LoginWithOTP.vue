<template>
    <v-card class="pa-8 rounded" width="100%" max-width="500">
        <div>
            <img src="~assets/images/logo.svg" class="mx-auto d-block" width="200">
        </div>
        <v-observer v-if="!$route.query.verify" ref="phoneValidate" v-slot="{ handleSubmit }">
            <form class="mt-8" @submit.prevent="handleSubmit(requestOtp)">
                <v-provider
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
                </v-provider>
                <v-btn large class="mt-4 primary white--text" :loading="loading" type="submit" block>
                    Send code
                </v-btn>
            </form>
        </v-observer>
        <v-observer v-else ref="otpValidate" v-slot="{ handleSubmit }">
            <form class="mt-8" @submit.prevent="handleSubmit(verifyOtp)">
                <v-provider
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
                </v-provider>
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
                <v-btn large class="mt-4 primary white--text" :loading="loading" type="submit" block>
                    Login
                </v-btn>
            </form>
        </v-observer>
        <div class="mt-3">
            <nuxt-link to="/login">
                Login with password
            </nuxt-link>
        </div>
    </v-card>
</template>

<script>
import Timer from '~/components/Timer'
import { loading } from '~/utils/mixins'
import '~/plugins/veeValidate/rules/mobileNumber'

export default {
    name: 'LoginWithOTP',
    components: {
        Timer
    },
    mixins: [loading],
    data() {
        return {
            phone: this.$route.query.verify || null,
            otp: null,
            resend: false,
            duration: 60,
        }
    },
    methods: {
        async requestOtp() {
            try {
                this.loading = true
                const data  = await this.$auth.requestOtp(this.phone)
                this.duration = Number(data.duration)
                this.$router.push({
                    query: {
                        otp: true,
                        verify: this.phone
                    }
                })
            } catch (e) {
                console.error(e)
                this.$toast.error("User Can't login. Something is wrong. please check your console.")
            } finally {
                this.loading = false
            }
        },
        async verifyOtp() {
            try {
                this.loading = true
                await this.$auth.verifyOtp(this.phone, this.otp)
                await this.$router.push('/')
            } catch (e) {
                console.log({e})
                if(e.response.status === 401) {
                    this.$toast.error('OTP code is wrong. Please try again.')
                }
            } finally {
                this.loading = false
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
            this.phone = ''
            this.otp = ''
            this.$refs.phoneValidate.reset()
            this.$refs.otpValidate.reset()
        },
    },
}
</script>
