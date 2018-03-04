import Vue from 'vue'

Vue.filter("formatMoney", value => {
    return "$" + value.toLocaleString()
})