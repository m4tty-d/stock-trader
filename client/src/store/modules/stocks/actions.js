const getStocksFromAPI = ({commit}) => {
    let stocks = [
        {
            company: "BMW",
            price: 100,
            boughtQuantity: 0
        },
        {
            company: "Google",
            price: 200,
            boughtQuantity: 0
        },
        {
            company: "Facebook",
            price: 300,
            boughtQuantity: 0
        },
        {
            company: "Twitter",
            price: 100,
            boughtQuantity: 0
        },
    ]

    commit("updateStocks", stocks)
}

export default {
    getStocksFromAPI
}
