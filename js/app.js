import discountRates from '../data/discountRates.json' with { type: "json" }
import stateTaxData from '../data/stateTaxes.json' with { type: "json" }

const state = document.querySelector('#state')
const items = document.querySelector('#items')
const price = document.querySelector('#price')

state.innerHTML = stateTaxData.map(pair => `<option value="${pair.taxRate}">${pair.state}</option>`)

console.log(discountRates)

document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault()

    let total = items.value * price.value * (1 + parseFloat(state.value))

    let discountIndex = -1
    discountRates.forEach((rate, i) => {
        if (rate.orderValue <= total) {
            discountIndex = i
        }
    })

    if (discountIndex > -1) {
        total *= (1 - discountRates[discountIndex].discountRate)
    }

    document.querySelector('#result').innerHTML = total
})
