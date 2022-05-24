"use strict"

function Prices() {
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType){
        return (basePrice + variationPassengerType*basePrice/100 + variationFlightType/100 * (basePrice + variationPassengerType*basePrice/100)).toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType){
        let variationPassengerType = 0;
        if (passengerType.toLowerCase() === 'regular'){
            variationPassengerType = -0.05;
        }else if(passengerType.toLowerCase() === 'vip'){
            variationPassengerType = 0.05;
        }

        let variationFlightType = 0;
        if(flightType.toLowerCase() === 'economy'){
            variationFlightType = -0.03;
        }else if(flightType.toLowerCase() === 'business'){
            variationFlightType = 0.1;
        }

        return (basePrice + variationPassengerType*basePrice + variationFlightType * (basePrice + variationPassengerType*basePrice)).toFixed(2);
    }

    function calculateTotalFinalPrice(numSeats,passengerType,flightType,basePrice){
        return numSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice,calculateTotalFinalPrice};
}

module.exports = Prices();

