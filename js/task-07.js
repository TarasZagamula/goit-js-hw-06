const refs = {
    slider: document.querySelector(`#font-size-control`),
    textOut: document.querySelector(`#text`),
}

refs.slider.addEventListener(`input`, () => {
    refs.textOut.style.fontSize = `${refs.slider.value}px`;
});

