import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home.vue"
import Portfolio from "../components/Portfolio.vue"
import Stocks from "../components/Stocks.vue"

Vue.use(VueRouter)

const routes = [
    {path: "", name: "home", component: Home},
    {path: "/portfolio", name: "portfolio", component: Portfolio},
    {path: "/stocks", name: "stocks", component: Stocks},

    {path: "*", redirect: {name: "home"}}
]

export default new VueRouter({
    routes,
    mode: 'history'
})