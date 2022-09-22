const refs = {
  input: document.getElementById("name-input"),
  sapn: document.getElementById("name-output"),
};

refs.input.addEventListener("input", onInputWrite);
function onInputWrite(e) {
  if (e.currentTarget.value === "") {
    refs.sapn.textContent = "Anonymous";
  } else {
    refs.sapn.textContent = e.currentTarget.value;
  }
}
