import actions from './global/actions'
import getters from './global/getters'
import mutations from './global/mutations'

const state = () => ({
    alert: {
        message: '',
        color: 'green',
        show: false,
    }
})

export default {
  state,
  actions,
  getters,
  mutations
}
