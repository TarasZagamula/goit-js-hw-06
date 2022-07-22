const listEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listEl.length}`)

listEl.forEach(function (el, index) {
    const titleItem = el.querySelector(`h2`);
    const numberItem = el.querySelectorAll(`li`);
    console.log(`Category: ${titleItem.textContent}`);
    console.log(`Elements: ${numberItem.length}`);
})



