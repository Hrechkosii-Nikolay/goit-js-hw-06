function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onChengeColorBtnClick);

function onChengeColorBtnClick() {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.span.textContent;
}
