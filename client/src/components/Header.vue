<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <router-link tag="a" class="navbar-item" to="home">Stock Trader</router-link>
            <div class="navbar-burger burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <router-link tag="a" class="navbar-item" to="portfolio">Portfolio</router-link>
                <router-link tag="a" class="navbar-item" to="stocks">Stocks</router-link>
            </div>

            <div class="navbar-end">
                <a class="navbar-item" @click="endDay">End Day</a>
                
                <div class="navbar-item has-dropdown is-hoverable">
                    <span class="navbar-link">Save & Load</span>
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item" href="">Save Data</a>
                        <a class="navbar-item" href="">Load Data</a>
                    </div>
                </div>
                
                <span class="navbar-item">Funds: {{ fund | formatMoney }}</span>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        computed: {
            fund() {
                return this.$store.getters['stocks/fund']
            }
        },
        methods: {
            endDay() {
                //this.$store.actions.stocks.dispatch('updateStocks')
            }
        }
    }
</script>
