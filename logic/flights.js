const { supportsEsModules } = require("mocha/lib/utils");

function Flights() {
    function calculateNumberOfFlights(numberOfPassenger,flightCapacity){
        if(numberOfPassenger < 0 || !Number.isInteger(numberOfPassenger)){
            throw new Error('The number of passengers must be a positive integer value!');
        }

        if(flightCapacity < 0 || !Number.isInteger(flightCapacity)) {
            throw new Error('The capacity of the flight must be a positive integer value');
        }

        if(numberOfPassenger%flightCapacity == 0){
            return numberOfPassenger/flightCapacity;
        }else{
            return Math.round(numberOfPassenger/flightCapacity) +1;
        }
    }

    function checkAircraftRevision(distanceLimit, distanceArray) {
        let totalDistance = 0;
        for(let i = 0; i<distanceArray.length; i++){
            totalDistance += distanceArray[i];
        }

        if(totalDistance <= distanceLimit/2){
            return "The revision needs to be done within the next 3 months";
        }else if(totalDistance <= (distanceLimit*3/4)) {
            return "The revision needs to be done within the next 2 months";
        }else if(totalDistance <= distanceLimit){
            return "The revision needs to be done within the next month";
        }else {
            throw new Error('The maximum allowed flight distance should be exceeded');
        }
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();

