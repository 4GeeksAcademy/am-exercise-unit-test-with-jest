// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (a) => {
    return a/oneEuroIs['USD']*oneEuroIs['JPY']
}
const fromEuroToDollar = (a) => {
    return a/oneEuroIs['USD']
}
const fromYenToPound = (a) => {
    return a/oneEuroIs['USD']*oneEuroIs['GBP']
}

console.log(fromEuroToDollar(3))
console.log(fromDollarToYen(3))
console.log(fromYenToPound(3))

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};
