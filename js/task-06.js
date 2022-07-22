const inputEl = document.querySelector(`#validation-input`);



inputEl.addEventListener(`blur`, () => {
    if (inputEl.value.length === Number(inputEl.getAttribute(`data-length`))) {
        inputEl.classList.toggle(`valid`)
    } else inputEl.classList.toggle(`invalid`)
})

