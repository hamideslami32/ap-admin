import Vue from 'vue'

const COOKIE_TOKEN = 'token'

class Auth {

    constructor(ctx) {
        this.axios = ctx.app.$axios
        this.storage = ctx.$storage
        this.user = null
        this.router = ctx.app.router

        const token = this.storage.getCookie(COOKIE_TOKEN)

        if (token) {
            this.setToken(token)
            this.fetchUser()
        }
    }

    async login(args) {
        try {
            const { token, user } = await this.axios.$post('/auth/login', args)
            this.setToken(token)
            this.user = user
            this.storage.setCookie(COOKIE_TOKEN, token)
        } catch (err) {
            if (err.response.status === 401) {
                throw new Error('Username or password is wrong')
            }
            throw err
        }
        return this.user
    }

    requestOtp(phoneNumber) {
        return this.axios.$post('/auth/otp', { phoneNumber })
    }

    async verifyOtp(phoneNumber, otp) {
        const { token, user, expiration } = await this.axios.$post('/auth/otp/verify', { phoneNumber, otp })
        this.setToken(token)
        this.user = user
        this.storage.setCookie(COOKIE_TOKEN, token, {
            expires: new Date(expiration)
        })
        return user
    }

    async register(args) {
        let message = {}
        try {
            await this.axios.$post('/auth/register', args)
            this.router.push('/login')
            message.status = 'success'
            message.text = 'User is registered'
        } catch (error) {
            message.status = 'error'
            message.text = 'Registeration failed'
        }
        return message
    }

    logout() {
        this.user = null
        this.storage.removeCookie('token')
        this.removeToken()
        this.router.push('/login')
    }

    async fetchUser() {
        try {
            this.user = await this.axios.$get('/auth/user')
        } catch (error) {
            console.log({error})
        }
    }

    setToken (token) {
        this.axios.defaults.headers.common.Authorization = 'Bearer ' + token
    }

    removeToken () {
        delete this.axios.defaults.headers.common.Authorization
    }

    get token () {
        const authorization = this.axios.defaults.headers.common.Authorization
        return authorization ? authorization.slice(7).trim() : null
    }

    can(permission) {
        const hasPermission = this.user.permissions.includes(permission)
        return hasPermission
    }

    hasRole(role) {
        const userHasRole = this.user.roles.includes(role)
        return userHasRole
    }

}

export default async function (ctx, inject) {
    const auth = Vue.observable(new Auth(ctx))
    inject('auth', auth)
}
