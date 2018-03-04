import Home from "./components/Home.vue"
import Portfolio from "./components/Portfolio.vue"
import Stocks from "./components/Stocks.vue"

export const routes = [
    {path: "", name: "home", component: Home},
    {path: "/portfolio", name: "portfolio", component: Portfolio},
    {path: "/stocks", name: "stocks", component: Stocks},

    {path: "*", redirect: {name: "home"}}
]
