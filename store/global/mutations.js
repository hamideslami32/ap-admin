const SET_ALERT_DATA = (state, alertData) => {
    state.alert = alertData
}
const RESET_ALERT_DATA = (state) => {
    state.alert = {
        message: '',
        color: 'green',
        show: false,
    }
}
const CLOSE_ALERT = (state) => {
    state.alert.show = false
}

export default {
    SET_ALERT_DATA,
    RESET_ALERT_DATA,
    CLOSE_ALERT
}