const refs = {
  range: document.getElementById("font-size-control"),
  text: document.getElementById("text"),
};

refs.range.addEventListener("input", () => {
  refs.text.style.fontSize = `${refs.range.value}px`;
});
