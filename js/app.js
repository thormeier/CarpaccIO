import discountRates from '../data/discountRates.json' with { type: "json" }
import stateTaxData from '../data/stateTaxes.json' with { type: "json" }

const state = document.querySelector('#state')
const items = document.querySelector('#items')
const price = document.querySelector('#price')

state.innerHTML = stateTaxData.map(pair => `<option value="${pair.taxRate}">${pair.state}</option>`)

console.log(discountRates)

document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault()
    console.log(items.value * price.value * (1 + state.value))
    document.querySelector('#result').innerHTML = items.value * price.value * (1 + parseFloat(state.value))
})
