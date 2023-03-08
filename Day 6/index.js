const items = [
  {
    name: "apple",
    category: "fruit",
  },
  {
    name: "Cucumber",
    category: "vegetable",
  },
  {
    name: "Banana",
    category: "fruit",
  },
  {
    name: "Celery",
    category: "vegetable",
  },
  {
    name: "orange",
    category: "fruit",
  },
  {
    name: "sausage",
    category: "meat",
  },
  {
    name: "bacon",
    category: "meat",
  },
];

const categorySelect = document.getElementById("category");
const itemSelect = document.getElementById("item");
const itemHeader = document.getElementById('item__header')
const allCategories = new Set(items.map((item) => item.category));
let currentCategory = "fruit";
let categoryItems;
let currentItem = itemSelect.value;

function getItems(currentCategory) {
   return categoryItems = items
  .filter((item) => item.category === currentCategory)
  .map((item) => item.name);
}

function createOptions(list, container) {
  if (container === itemSelect) {
    while (container.firstChild) {
      container.firstChild.remove();
    }
  }

  list.forEach((element) => {
    const option = document.createElement("option");
    option.textContent = element;
    option.value = element;
    container.appendChild(option);
  });
}

categorySelect.addEventListener("click", () => {
  currentCategory = categorySelect.value;
  getItems(currentCategory)
  createOptions(categoryItems, itemSelect);
  itemHeader.textContent = itemSelect.value;
});

itemSelect.addEventListener("change", () => {
  itemHeader.textContent = itemSelect.value;
});

// default options on first load
createOptions(allCategories, categorySelect);
getItems(currentCategory)
createOptions(categoryItems, itemSelect);
itemHeader.textContent = itemSelect.value;