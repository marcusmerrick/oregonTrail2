class Hunter extends Traveler {
    constructor (name, food, isHealthy) {
        super(name, food, isHealthy)
        this.food = 2
    }

    //starts with 2 food instead of 1

    hunt() {
        this.food = this.food + 5
        //increases the hunter's food by 5 (norm traveler gains only 2)
    }

    eat() {
        if (this.food > 0) {
            this.food = this.food - 1
        } else {
            this.isHealthy = false
        }
// Consumes 1 unit of the traveler's food. If the traveler doesn't have any food left to eat, the traveler is no longer healthy (set isHealthy to false).
    
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