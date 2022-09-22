const refs = {
  input: document.getElementById("validation-input"),
  inputData: document.querySelector("input[data-length]"),
};
const INPUT_MAX_LENGTH = Number(refs.inputData.dataset.length);
console.log(INPUT_MAX_LENGTH);
refs.input.addEventListener("blur", onInputBlur);

function onInputBlur(e) {
  if (e.currentTarget.value.length === INPUT_MAX_LENGTH) {
    refs.input.classList.remove("invalid");
    refs.input.classList.add("valid");
  } else if (e.currentTarget.value.length === 0) {
    refs.input.classList.remove("invalid");
    refs.input.classList.remove("valid");
  } else {
    refs.input.classList.add("invalid");
  }
}
