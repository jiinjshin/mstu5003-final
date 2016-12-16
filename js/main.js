var recipeData = [{
    id: "1a",
    stepNumber: 1,
    imageUrl: "http://placehold.it/220x220",
    videoUrl: "",
    desText: "this is text for step one.",
    addText: "DEMO TEXT ADDITIONAL"
}, {
    id: "2b",
    stepNumber: 2,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step two.",
    addText: ""
}, {
    id: "3c",
    stepNumber: 3,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step three.",
    addText: ""
}, {
    id: "4d",
    stepNumber: 4,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step four.",
    addText: ""
}, {
    id: "5e",
    stepNumber: 5,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step five.",
    addText: ""
}, {
    id: "6f",
    stepNumber: 6,
    imageUrl: "",
    videoUrl: "",
    desText: "this is text for step six.",
    addText: "Bananas"
}];

function getById(list, id) {
    var targetItem = list.find(function(listItem) {
        return listItem.id === id;
    });
    return targetItem;
}


// creating the list of recipe steps
recipeData.forEach(function(step) {
    var recipeListEl = document.querySelector('#recipe-list');

    // var recipeNumberEl = document.createElement('ul');
    // recipeNumberEl.id = step.id;
    // recipeNumberEl.classList.add('recipeNumber');
    // recipeNumberEl.innerHTML = step.stepNumber;

		// Creating number
		var numContainer = document.createElement('span');
		numContainer.classList.add('number');
		numContainer.innerText = step.stepNumber;

		// Create step item
    var stepTextEl = document.createElement('div');
    stepTextEl.id = step.id;
    stepTextEl.classList.add('stepText');

		// Append the span to the div, and then add more to the div.
		stepTextEl.appendChild(numContainer);
    stepTextEl.innerHTML = stepTextEl.innerHTML + " --- " +step.desText;

    // recipeListEl.appendChild(recipeNumberEl);
    recipeListEl.appendChild(stepTextEl);

    // var addListEl = document.querySelector('#add-list');
    //
    // var addListTextEl = document.createElement('ul');
    // addListTextEl.id = step.id;
    // addListTextEl.classList.add('addText');
    // addListTextEl.innerHTML = step.addText;
    //
    // addListEl.appendChild(addListTextEl);
});

// event listener listens to whole listener
var stepListEl = document.querySelector('#recipe-list');
stepListEl.addEventListener('click', function(event) {
    console.log(event.target);

		var dataID = event.target.id;

		// Let's ues the ide to search through the data.
		var foundStep = recipeData.find(function(step){
			return Math.random() < 0.5;
		  // return step.id === dataID;
		});

		console.log(foundStep);

		document.getElementById('rightContent').innerHTML = foundStep.addText;



    // if (event.target && event.target.matches(ul.stepNumber)) {
    //     var targetStep = getById(recipeData, event.target.id);
    //     displayStep(targetStep);
    // } else {
    //     alert('Clicked an element that is not a ul.stepItem');
    // }
});

// Just a demo for how to study...
// var users = [{hobbies:['soccer']}]
// function findUserByHobby(hobby) {
//
// }
