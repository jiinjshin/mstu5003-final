var recipeData = [
  {
    id: "1a",
    stepNumber: 1,
    imageUrl: "http://placehold.it/220x220",
    videoUrl: "",
    desText: "this is text for step one.",
    addText: ""
  },
  {
    id: "2b",
    stepNumber: 2,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step two.",
    addText: ""
  },
  {
    id: "3c",
    stepNumber: 3,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step three.",
    addText: ""
  },
  {
    id: "4d",
    stepNumber: 4,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step four.",
    addText: ""
  },
  {
    id: "5e",
    stepNumber: 5,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step five.",
    addText: ""
  },
  {
    id: "6f",
    stepNumber: 6,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step six.",
    addText: ""
  }
];

function getById(list, id) {
  var targetItem = list.find(function(listItem) {
    return listItem.id=== id;
  });
  return targetItem;
}


// creating the list of recipe steps
recipeData.forEach(function(step) {
  var recipeListEl = document.querySelector('#recipe-list');

  var recipeNumberEl = document.createElement('ul');
  recipeNumberEl.id = step.id;
  recipeNumberEl.classList.add('recipeNumber');
  recipeNumberEl.innerHTML = step.stepNumber;

  var stepTextEl = document.createElement('ul');
  stepTextEl.id = step.id;
  stepTextEl.classList.add('stepText');
  stepTextEl.innerHTML = step.desText;

  recipeListEl.appendChild(recipeNumberEl);
  recipeListEl.appendChild(stepTextEl);
});
