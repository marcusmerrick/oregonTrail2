class Doctor extends Traveler {
    constructor (name, food, isHealthy) {
        super(name, food, isHealthy)
    }

    //******come back to heal */


    heal(Traveler) {
        if (Traveler.isHealthy === false) {
            Traveler.isHealthy = false
        }
        // Traveler.isHealthy = true
    }


}

//set the traveler's isHealthy property to true