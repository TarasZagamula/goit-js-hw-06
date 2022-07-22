
const nameEl = {
    input: document.querySelector(`#name-input`),
    output: document.querySelector(`#name-output`),
};

nameEl.output.textContent = `Anonymous`

nameEl.input.addEventListener(`input`, () => {
    if (nameEl.input.value === ``) {
       nameEl.output.textContent = `Anonymous` 
    } else
    nameEl.output.textContent = nameEl.input.value;
})