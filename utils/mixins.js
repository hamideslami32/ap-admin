const goTo = {
    methods: {
        goTo(route) {
            this.$router.push(route)
        }
    }
}

const alert = {
    data() {
        return {
            alert: {
                message: '',
                color: 'green',
                show: false
            }
        }
    },
    methods: {
        closeAlert(event) {
            console.log({event})
            this.$store.dispatch('global/closeAlert')
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
    alert,
    loading,
    logout
}