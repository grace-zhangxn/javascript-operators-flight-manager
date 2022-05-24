function Util() {
    function calculateTotalDistributedPassengers(object1){
        return object1.vipPassengersWithBusinessSeats + object1.vipPassengersWithEconomySeats + object1.regularPassengersWithBusinessSeats + object1.regularPassengersWithEconomySeats;
    }

    function calculateTotalNumberOfPassengers(array1) {
        let sum = 0;
        for(let i = 0; i<array1.length; i++){
            sum += array1[i];
        }
        return sum;
    }
    return {calculateTotalDistributedPassengers,calculateTotalNumberOfPassengers};
}

module.exports = Util();


