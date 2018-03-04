const fund = state => state.fund

const stocks = state => state.stocks

const purchasedStocks = (state) => {
    return state.stocks.filter(stock => {
        return stock.boughtQuantity != 0
    })
}

export default {
    fund,
    stocks,
    purchasedStocks
}