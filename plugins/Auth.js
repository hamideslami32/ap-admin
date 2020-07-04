import Vue from 'vue'

const COOKIE_TOKEN = 'token'

class Auth {

    constructor(ctx) {
        this.axios = ctx.app.$axios
        this.storage = ctx.$storage
        this.user = null

        const token = this.storage.getCookie(COOKIE_TOKEN)

        if (token) {
            this.setToken(token)
        }
        if (ctx.nuxtState.user) {
            this.user = ctx.nuxtState.user
        }
        if (!this.user && this.token) {
            this.fetchUser()
        }
    }
    
    async login(username, password) {
        const loginPayload = {
            username,
            password
        }
        const { token, user } = await this.axios.$post('/auth/login', loginPayload)
        this.setToken(token)
        this.user = user
        this.storage.setCookie(COOKIE_TOKEN, token)
        console.log('user is login')
        return user
    }
    async register(username, password, phone) {
        const registerPayload = {
            username,
            password,
            phone
        }
        const { token, user } = await this.axios.$post('/auth/register', registerPayload)
        this.setToken(token)
        this.user = user
        this.storage.setCookie(COOKIE_TOKEN, token)
        console.log('user is registered')
        return user
    }

    logout() {
        this.user = null
        this.storage.removeCookie('token')
        this.removeToken()
    }

    async fetchUser() {
        const user = await this.axios.$get('/auth/user')
        this.user = user
        return user
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

}

export default async function (ctx, inject) {
    const auth = Vue.observable(new Auth(ctx))
    console.log({auth})
    inject('auth', auth)
}
