class Hunter extends Traveler {
    constructor (name, food, isHealthy) {
        super()
    }

    //starts with 2 food instead of 1

    hunt() {
        //increases the hunter's food by 5 (norm traveler gains only 2)
    }

    eat() {
        //consumes 2 units of food. If the hunter doesn't have 2
        //food when they are instructed to eat, they eat as much
        //as they can (0 or 1 unit), but the hunter is no longer
        //healthy
    }

    giveFood(traveler, numOfFoodUnits) {
        //transfers numOfFoodUnits from the hunter to the traveler.
        //If the hunter doesn't have enough food, then no food
        //should be transferred
    }

}