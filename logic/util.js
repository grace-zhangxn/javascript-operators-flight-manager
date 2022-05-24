"use strict"

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

    function checkInput(input){
        if(!input || isNaN(parseInt(input))){
            throw new Error('Whoops');
        }
        return;
    }

    function calculateTotalDistance(arrayDistances){
        let total = 0;
        for(let i=0;i<arrayDistances.length;i++){
            if(!isNaN(arrayDistances[i]) && arrayDistances[i]>=0){
                total += arrayDistances[i];
            }
        }
        return total;
    }

    function calculateBonusPoints(arrayDistancesBusiness,arrayDistancesEconomy,businessBonusPercent, economyBonusPercent){
        return businessBonusPercent/100*calculateTotalDistance(arrayDistancesBusiness) + economyBonusPercent/100 * calculateTotalDistance(arrayDistancesEconomy);
    }

    return {calculateTotalDistributedPassengers,calculateTotalNumberOfPassengers, checkInput,calculateTotalDistance,calculateBonusPoints};
}

module.exports = Util();


