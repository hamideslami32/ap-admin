import Vue from 'vue'

const COOKIE_TOKEN = 'token'

class Auth {

    constructor(ctx) {
        this.axios = ctx.app.$axios
        this.storage = ctx.$storage
        this.redirect = ctx.redirect
        this.user = null

        const token = this.storage.getCookie(COOKIE_TOKEN)

        if (token) {
            this.setToken(token)
            this.fetchUser()
        }
    }

    async login(args) {
        let message = {}
        try {
            const { token, user } = await this.axios.$post('/auth/login', args)
            this.setToken(token)
            this.user = user
            this.storage.setCookie(COOKIE_TOKEN, token)
            this.redirect( 302, '/')
            message.status = 'success'
            message.text = 'user is login'
        } catch (error) {
            if(error.response.status === 401) {
                message.status = 'error'
                message.text = 'username or password is wrong'
            }
        }
        return message
    }
    async register(args) {
        let message = {}
        try {
            await this.axios.$post('/auth/register', args)
            this.redirect(401, '/login')
            message.status = 'success'
            message.text = 'user is registered'
        } catch (error) {
            message.status = 'error'
            message.text = 'registeration failed'
        }
        return message
    }

    logout() {
        this.user = null
        this.storage.removeCookie('token')
        this.removeToken()
        this.redirect(302, '/login')
    }

    async fetchUser() {
        try {
            const user = await this.axios.$get('/auth/user')
            this.user = user
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
