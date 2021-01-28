// import { useBelgiumData } from './belgium/belgiumDataProvider.js'
// import { useGreeceData } from './greece/greeceDataProvider.js'
// import { useItalyData } from './italy/italyDataProvider.js'
import { useCountryData } from './countryDataProvider.js'

import { htmlContent } from './countryHTML.js'

// ------------------- NAV BAR ----------------------
// Listen for Belgium
document.querySelector("#belgium-nav-link").addEventListener("click", () => {
    htmlContent(useCountryData()[0])
})

// Listen for Greece
document.querySelector("#greece-nav-link").addEventListener("click", () => {
    htmlContent(useCountryData()[1])
})

// Listen for Italy
document.querySelector("#italy-nav-link").addEventListener("click", () => {
    htmlContent(useCountryData()[2])
})

// Listen for Norway
document.querySelector("#norway-nav-link").addEventListener("click", (eventObject) => {
    // console.log(eventObject.target)
    htmlContent(useCountryData()[3])
})