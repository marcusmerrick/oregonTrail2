class Doctor extends Traveler {
    constructor (name, food, isHealthy) {
        super(name, food, isHealthy)
    }

    //******come back to heal */


    heal(Traveler) {
        if (Traveler.isHealthy === false) {
            traveler.isHealthy = true
        }
        Traveler.isHealthy = true
    }


}

//set the traveler's isHealthy property to true