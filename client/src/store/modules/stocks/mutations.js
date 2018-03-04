const updateStocks = (state, newStocks) => {
    state.stocks = newStocks
}

const changeStockPrices = state => {
    let max = 500
    let min = 5

    for (let key in state.stocks) {
        if (state.stocks.hasOwnProperty(key)) {
            state.stocks[key].price =
                Math.floor(Math.random() * (max - min + 1)) + min
        }
    }
}

const buyStock = (state, payload) => {
    let modifiedFund = state.fund - payload.price * payload.boughtQuantity

    if (modifiedFund >= 0) {
        state.stocks[payload.key].boughtQuantity += payload.boughtQuantity
        state.fund = modifiedFund
    } else {
        alert("You don't have enough money!")
    }
}

const sellStock = (state, payload) => {
    let remaningQuantity = payload.boughtQuantity - payload.sellQuantity

    if (remaningQuantity >= 0) {
        state.fund += payload.price * payload.sellQuantity
        state.stocks[payload.key].boughtQuantity = remaningQuantity
    } else {
        alert("You cannot sell more stocks than you have!")
    }
}

export default {
    updateStocks,
    changeStockPrices,
    buyStock,
    sellStock
}
