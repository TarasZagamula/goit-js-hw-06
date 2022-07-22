function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnEl: document.querySelector(`.change-color`),
  textColor: document.querySelector(`.color`),
  bodyEl: document.querySelector(`body`),
};

refs.btnEl.addEventListener(`click`, onBtnClick)
function onBtnClick (event) {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.textColor.textContent = getRandomHexColor();
};
