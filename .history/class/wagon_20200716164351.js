
class Wagon {
    constructor (capacity) {
        this.passengers = []
        this.capacity = capacity
        // a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
        // a passengers list, which is initially an empty array
    }
    

    getAvailableSeatCount() {
        let seats = this.capacity - this.passengers.length
        return seats
        
       // Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
    }

    join(traveler) {
        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler)
        }

        // Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.

    }

    shouldQuarantine() {
        
        let total = 0
        for (let i = 0; i < this.passengers.length; i = i + 1) {
            let currentPassenger = this.passengers[i]
           if (currentPassenger.isHealthy = false) {
               return false
           } else {
               return true
           }
        }
        let currentPassenger = this.passengers[i]
        const health = currentPassenger.some(currentPassenger => currentPassenger.isHealthy === false)
        console.log(health)

        // Returns true if there is at least one unhealthy person in the wagon. Return false if not.
    }

    totalFood() {

        let total = 0
        for (let i = 0; i < this.passengers.length; i = i + 1) {
            let currentPassenger = this.passengers[i]
            total = total + currentPassenger.food
        }

        // function getSum (total, currentNumber){
        //     return total + currentNumber
        // }
        // let curPass = this.passengers[i]
        // let sum = curPass.reduce(getSum, 0)

      total = this.passengers.reduce((this.passengers.food, 0) => this.passengers.food + 0);
     
        // let total = this.passengers.reduce((a, b) => a + b)
      return total
        // Returns the total amount of food among all passengers in the wagon.
    }

}