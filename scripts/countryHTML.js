import { itemListHTML } from './itemList.js'

export const htmlContent = (countryData) => {
    let contentTarget = document.querySelector("main")
    contentTarget.innerHTML = ""

    let htmlString = `<section class="country-img" style="background: url(${countryData.backgroundImage})"></section><section class="country-name"><h2>${countryData.name}</h2></section><section class="flex-Container">`

    for (const infoKey in countryData.information) {
        // console.log(countryData.information)
        // console.log(infoKey)
        htmlString += `<article>
                    ${itemListHTML(countryData.information[infoKey], infoKey)}
                </article>`
    }
    
    // console.log(htmlString)
    contentTarget.innerHTML = htmlString + "</section>"
}