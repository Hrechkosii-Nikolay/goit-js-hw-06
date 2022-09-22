let refs = {
  btnDecrement: document.querySelector('button[data-action="decrement"]'),
  btnIncrement: document.querySelector('button[data-action="increment"]'),
  valueCounter: document.querySelector("#value"),
};

refs.btnDecrement.addEventListener("click", onDecrementBtnlick);
refs.btnIncrement.addEventListener("click", onIncrementBtnClick);

let counterValue = 0;
refs.valueCounter.textContent = counterValue;

function onDecrementBtnlick() {
  counterValue -= 1;
  refs.valueCounter.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  refs.valueCounter.textContent = counterValue;
}
