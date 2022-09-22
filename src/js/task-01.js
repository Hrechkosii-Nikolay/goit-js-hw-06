console.log("-------TASK-1 START----------------");
const categoriesRef = document.querySelector("#categories");
// const numCategories = categoriesRef.children.length;
const categoriesItemRef = document.querySelectorAll(".item");
const numCategoriesLength = categoriesItemRef.length;

console.log(`Number of categories: ${numCategoriesLength}`);

const titleItems = categoriesItemRef.forEach((el) => {
  const titleRef = el.querySelector("h2");
  const catListRef = el.querySelector("ul").children.length;
  //   const catLen = catListRef.children.length;

  console.log(`Category: ${titleRef.textContent}
  Elements: ${catListRef}`);
});

console.log("------TASK-1 END------------------");
