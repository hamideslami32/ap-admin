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

const loading = {
    data() {
        return {
            loading: false
        }
    }
}

export {
    goTo,
    loading,
    logout
}