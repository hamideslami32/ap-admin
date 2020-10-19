<template>
    <v-layout>
        <v-flex class="d-flex justify-center pa-8" width="100%">
            <keep-alive>
                <LoginWithPassword v-if="!$route.query.otp" />
                <LoginWithOTP v-else />
            </keep-alive>
        </v-flex>
    </v-layout>
</template>

<script>
import LoginWithPassword from "@/components/auth/LoginWithPassword"
import LoginWithOTP from "@/components/auth/LoginWithOTP"

export default {
    name: 'Login',
    layout: 'auth',
    components: {
        LoginWithOTP,
        LoginWithPassword
    },
}
</script>
