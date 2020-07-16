// class Dog {
//     constructor (name, breed) {
//         this.name = name
//         this.breed = breed
//         this.isGoodBoy = Boolean("of course")
//     }
//     sit () {
//         // sitting code goes here
//     }   
//     fetch () {
//         // fetching code goes here
//     }   
// }

//Your task: Following the Class pattern (as shown above), create two different classes: a Traveler and a Wagon.

// The Traveler Class
// The Traveler class (blueprint) should set the following properties for each instance:

// a name, which must be provided as a parameter to the constructor.
// an amount of food, with an initial value of 1.
// an isHealthy property, with an initial value of true, which indicates whether a traveler is sick.
// The Traveler class should also have the following methods:

// hunt() – Increases the traveler's food by 2.
// eat() – Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
// The Wagon Class
// The Wagon class should set the following properties for each instance:

// a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
// a passengers list, which is initially an empty array.
// The Wagon class should have these methods:

// getAvailableSeatCount() – Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
// join(traveler) - Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
// shouldQuarantine() - Returns true if there is at least one unhealthy person in the wagon. Return false if not.
// totalFood() - Returns the total amount of food among all passengers in the wagon.

// Stretch Goals
// Add the wagons and the travelers to the DOM.
// Display relevent information in the DOM about the wagons and traveler – for example: travelers name/food/isHealthy, and/or Wagon's passengers/capacity.
// Add buttons to your classes – for example: make a traveler eat, add a traveler to a wagon, check if a wagon should quarantine, etc.
// Add a button to create a new traveler based on a name the user inputs.
// Add animations simulating travel, etc.
// Generally just make your game feel more like the original Oregon Trail.

// Oregon Trail Part 1 Rubric
//Wagon class has these properties: capacity, and passengers (initialized to an empty array)
// This criterion is linked to a Learning OutcomeWagon prototype has these methods: getAvailableSeatCount, join, shouldQuarantine, and totalFood
// This criterion is linked to a Learning OutcomeTraveler class has these properties: name, food (initialized to 1), isHealthy (initialized to true)
// This criterion is linked to a Learning OutcomeTraveler prototype has these methods: hunt, and eat
// This criterion is linked to a Learning OutcomeThe console.log statements are present and match the expected values.
// Testing code is present, and unmodified from the assessment description
