function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createBtn: document.querySelector(`[data-create]`),
  destroyBtn: document.querySelector(`[data-destroy]`),
  formInput: document.querySelector(`input`),
  boxes: document.querySelector(`#boxes`),
};

refs.createBtn.addEventListener(`click`, () => createBoxes(refs.formInput.value));

refs.destroyBtn.addEventListener(`click`, destroyBox);


function createBoxes(amount) {
  for (let i = 1; (i <= amount); i += 1) {
    const newBox = document.createElement(`div`);
    newBox.style.width = `${20 + 10 * i}px`;
    newBox.style.height = `${20 + 10 * i}px`;
    newBox.style.marginTop = `10px`;
    newBox.style.backgroundColor = getRandomHexColor();
  
    refs.boxes.appendChild(newBox)
  }
}

function destroyBox(event) {
  refs.boxes.innerHTML = "";
}

