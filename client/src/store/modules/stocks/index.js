import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

const state = {
    fund: 10000,
    stocks: []
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
