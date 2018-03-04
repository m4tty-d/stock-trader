<template>
    <div class="column is-one-quarter">
        <div class="card">
            <div class="card-content">
                <p class="title is-3 is-spaced">{{ stock.company }}</p>
                <p class="subtitle is-5" v-if="isBuyable">Price:  {{ stock.price | formatMoney }}</p>
                <table class="table is-striped is-fullwidth is-hoverable" v-if="isSellable">
                    <tbody>
                        <tr>
                            <td>Price: </td>
                            <td>{{ stock.price | formatMoney }}</td>
                        </tr>
                        <tr>
                            <td>Quantity: </td>
                            <td>{{ stock.boughtQuantity }}</td>
                        </tr>
                        <tr>
                            <td><strong>Total: </strong></td>
                            <td><strong>{{ totalStockPrice | formatMoney }}</strong></td>
                        </tr>
                    </tbody>
                </table>
                
                <input  class="input" 
                        type="text" 
                        placeholder="Number of stocks to buy" 
                        v-model.number="numberOfStocksToBuy" 
                        v-if="isBuyable"
                        @keyup.enter="stockBuyHandler">
                <input  class="input" 
                        type="text" 
                        placeholder="Number of stocks to sell" 
                        v-model.number="numberOfStocksToSell" 
                        v-if="isSellable"
                        @keyup.enter="stockSellHandler">
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-dark" @click="stockBuyHandler" v-if="isBuyable">Buy</button>
                    <button class="button is-dark" @click="stockSellHandler" v-if="isSellable">Sell</button>
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        props: ['stockType', 'stockKey', 'stock'],
        data() {
            return {
                numberOfStocksToBuy: '',
                numberOfStocksToSell: ''
            }
        },
        computed: {
            isBuyable() {
                return this.stockType == 'buyable' ? true : false;
            },
            isSellable() {
                return this.stockType == 'sellable' ? true : false;
            },
            
            totalStockPrice() {
                return this.stock.price * this.stock.boughtQuantity;
            }
        },
        methods: {
            ...mapMutations('stocks', [
                'buyStock',
                'sellStock'
            ]),
            stockBuyHandler() {
                this.buyStock({key: this.stockKey, company: this.stock.company, price: this.stock.price, boughtQuantity: this.numberOfStocksToBuy});
                this.numberOfStocksToBuy = '';
            },
            stockSellHandler() {
                this.sellStock({key: this.stockKey, price: this.stock.price, boughtQuantity: this.stock.boughtQuantity, sellQuantity: this.numberOfStocksToSell});
                this.numberOfStocksToSell = '';
            }
        }
    }
</script>
