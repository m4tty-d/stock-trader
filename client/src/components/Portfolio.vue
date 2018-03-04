<template>
  <div class="container stock-container">
      <div class="columns is-multiline">
          <app-stock v-for="(stock, key) in purchasedStocks" :stock-key="key" :stock="stock" stock-type="sellable"></app-stock>
      </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Stock from './Stock.vue'

    export default {
        computed: {
            ...mapGetters('stocks', [
                'purchasedStocks'
            ])
        },
        components: {
            appStock: Stock
        }
    }
</script>
