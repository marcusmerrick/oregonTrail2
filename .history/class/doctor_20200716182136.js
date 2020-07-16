class Doctor extends Traveler {
    constructor (name, food, isHealthy) {
        super(name, food, isHealthy)
    }

    //******come back to heal */


    heal(traveler) {
        if (traveler.isHealthy === false) {
            traveler.isHealthy = true
        }
        tra
    }


}

//set the traveler's isHealthy property to true