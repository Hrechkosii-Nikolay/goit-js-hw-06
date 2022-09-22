const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (password.length === 0) {
    alert("ERROR!!! Enter password!");
  } else if (password.length < 4) {
    alert("The password is not secure!");
  } else if (email.length === 0) {
    alert("ERROR!!! Enter email!");
  } else if (password.length > 4 && email.length !== 0) {
    refs.form.reset();
  }
}
