import { itemCardHTML } from './itemCard.js'

export const itemListHTML = (listInfo, infoKey) => {
    // console.log(listInfo, infoKey)
    let htmlList = `<h3>${infoKey}</h3>
        <div class="flex-Container">` 
    listInfo.forEach(item => htmlList += itemCardHTML(item))
    htmlList += `</div>`
    // console.log(htmlList)
    return htmlList
}