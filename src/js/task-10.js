function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls input[type="number"]'),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  innerDiv: document.getElementById("boxes"),
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);

function onDestroyBtnClick() {
  refs.innerDiv.innerHTML = "";
  refs.input.value = "";
}
let num = 0;
function onCreateBtnClick() {
  refs.innerDiv.innerHTML = "";
  for (let i = 1; i <= refs.input.value; i++) {
    const sizeBox = 20 + i * 10;
    const boxMarkup = `<div style="background-color: ${getRandomHexColor()}; 
    width: ${sizeBox}px; height: ${sizeBox}px"></div>`;

    refs.innerDiv.insertAdjacentHTML("beforeend", boxMarkup);
  }
  refs.input.value = "";
}
