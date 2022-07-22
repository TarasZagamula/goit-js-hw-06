
const refs = {
    btnDecrement: document.querySelector(`[data-action="decrement"]`),
    btnIncrement: document.querySelector(`[data-action="increment"]`),
    counterEl: document.querySelector(`#value`),
};

let counterValue = 0;

refs.btnDecrement.addEventListener(`click`, onClickBtnDec);
refs.btnIncrement.addEventListener(`click`, onClickBtnInc);

function onClickBtnDec() {
    counterValue -= 1;

    refs.counterEl.textContent = counterValue;
};

function onClickBtnInc() {
    counterValue += 1;

    refs.counterEl.textContent = counterValue;
}


console.log(counterValue);