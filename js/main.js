var recipeData = [{
    id: "1a",
    stepNumber: 1,
    imageUrl: "http://placehold.it/300x220",
    videoUrl: "http://placehold.it/300x220",
    desText: "Mix instant pudding mix with sweetened condensed milk and put in the freezer until it is set.",
    addText: "What happens to instant pudding mix (post-mix) when it is in the fridge (and why it is important to wait)."
}, {
    id: "2b",
    stepNumber: 2,
    imageUrl: "http://placehold.it/220x220",
    videoUrl: "http://placehold.it/220x220",
    desText: "Whip heavy cream into whipped cream.",
    addText: "How to prepare whipped cream properly"
}, {
    id: "3c",
    stepNumber: 3,
    imageUrl: "http://placehold.it/220x220",
    videoUrl: "http://placehold.it/220x220",
    desText: "Fold whipped cream into the pudding mixture until fully incorporated.",
    addText: "How to fold in pudding and whipped cream mix"
}, {
    id: "4d",
    stepNumber: 4,
    imageUrl: "http://placehold.it/220x220",
    videoUrl: "http://placehold.it/220x220",
    desText: "Layer pudding mixture, wafers, and sliced bananas into a glass bowl in the specified order. Repeat. Last layer should be the pudding mix.",
    addText: "What kind of banana is best for optimal banana pudding texture"
}, {
    id: "5e",
    stepNumber: 5,
    imageUrl: "http://placehold.it/220x220",
    videoUrl: "http://placehold.it/220x220",
    desText: "Cover the glass bowl with foil or saran wrap and let sit in fridge for at least two hours.",
    addText: "What happens to wafers in the pudding (and why it is important to wait)"
}, {
    id: "6f",
    stepNumber: 6,
    imageUrl: "http://placehold.it/220x220",
    videoUrl: "http://placehold.it/220x220",
    desText: "Sprinkle crushed wafers on top of the pudding, and serve!",
    addText: "Why you need to wait"
}];

// creating the list of recipe steps
recipeData.forEach(function(step) {
    var recipeListEl = document.querySelector('#recipe-list');

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
    stepTextEl.innerHTML = stepTextEl.innerHTML + step.desText;

    // recipeListEl.appendChild(recipeNumberEl);
    recipeListEl.appendChild(stepTextEl);

});

// active step is highlighted



// event listener listens to whole listener
var stepListEl = document.querySelector('#recipe-list');
stepListEl.addEventListener('click', function(event) {
    console.log(event.target);
    var dataID = event.target.id;

    // Let's ues the ide to search through the data.
    var foundStep = recipeData.find(function(step) {
        return step.id === dataID;
    });

    // Prints out the step that matches with the clicked item
    console.log(foundStep);

    // Create image
    var rightImage = document.createElement('img');
    rightImage.src = foundStep.imageUrl;

    // Create video
    var rightVideo = document.createElement('img');
    rightVideo.src = foundStep.videoUrl;

    // div of right text
    document.getElementById('rightContent').innerHTML = foundStep.addText;
    document.getElementById('rightContent').appendChild(rightImage);
    document.getElementById('rightContent').appendChild(rightVideo);

});

// Just a demo for how to study...
// var users = [{hobbies:['soccer']}]
// function findUserByHobby(hobby) {
//
// }
