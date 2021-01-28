
export const itemCardHTML = (item) => {
    // console.log(item)
    let htmlCard = `
    <div>
        <h4>${item.name}</h4>
        <img class="list-img" alt="Image of ${item.name}" src="${item.img}">
    </div>
    `
    // console.log(htmlCard)
    return htmlCard
}