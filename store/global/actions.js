const setAlertData = (context, alertData) => {
    context.commit('SET_ALERT_DATA', alertData)
}
const resetAlertData = (context) => {
    context.commit('RESET_ALERT_DATA')
}
const closeAlert = (context) => {
    context.commit('CLOSE_ALERT')
}

export default {
    setAlertData,
    resetAlertData,
    closeAlert
}