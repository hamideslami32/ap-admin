const goTo = {
    methods: {
        goTo(route) {
            this.$router.push(route)
        }
    }
}

const logout = {
    methods: {
        logout() {
            this.$auth.logout()
        }
    }
}

export {
    goTo,
    logout
}