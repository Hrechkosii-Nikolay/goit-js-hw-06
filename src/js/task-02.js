const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const arr = [];

ingredients.map((el) => {
  const ingredientsListItemsCreate = document.createElement("li");
  ingredientsListItemsCreate.classList.add("item");
  ingredientsListItemsCreate.textContent = el;

  arr.push(ingredientsListItemsCreate);
});

ingredientsListRef.append(...arr);
