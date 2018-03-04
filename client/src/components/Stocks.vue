<template>
    <div class="container stock-container">
        <div class="columns is-multiline">
            <app-stock v-for="(stock, key) in stocks" :stock-key="key" :stock="stock" stock-type="buyable"></app-stock>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex' 
    import Stock from './Stock.vue'

    export default {
        computed: {
            ...mapGetters('stocks', [
                'stocks'
            ])
        },
        components: {
            appStock: Stock
        },
        methods: {
            ...mapActions('stocks', [
                'getStocksFromAPI'
            ])
        }
    }
</script>

<style>
    .stock-container {
        margin-top: 35px;
    }
</style>


