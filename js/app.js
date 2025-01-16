import discountRates from '../data/discountRates.json' with { type: "json" }
import stateTaxData from '../data/stateTaxes.json' with { type: "json" }

document.querySelector('#state').innerHTML = stateTaxData.map(pair => `<option value="${pair.taxRate}">${pair.state}</option>`)

console.log(discountRates)
