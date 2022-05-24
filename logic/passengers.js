function Passengers() {
    function checkFlightCapacity(flightCapacity,passengersNumArray) {
        let totalNumber = 0;
        for(let i = 0;i<passengersNumArray.length;i++){
            totalNumber += passengersNumArray[i];
        }

        if(totalNumber<=flightCapacity){
            return totalNumber;
        }else {
            throw new Error('The capacity of the flight is exceeded');
        }
    }   

    function distributeAllSeatsToAllPassengers(numVIP, numRegular, numFlights, numBusinessSeat, numEconomySeat){
        let object1 = {vipPassengersWithBusinessSeats:0,vipPassengersWithEconomySeats:0,regularPassengersWithBusinessSeats:0,regularPassengersWithEconomySeats:0};

        if(numVIP <= numBusinessSeat*numFlights){
            object1.vipPassengersWithBusinessSeats = numVIP;
            object1.vipPassengersWithEconomySeats = 0;
            let busSeatLeft = numBusinessSeat*numFlights - numVIP;
            if(busSeatLeft >= numRegular) {
                object1.regularPassengersWithBusinessSeats = numRegular;
                object1.regularPassengersWithEconomySeats = 0;
            }else { //buSeatLeft < numReg
                object1.regularPassengersWithBusinessSeats = busSeatLeft;
                let regLeft = numRegular - busSeatLeft; //reg passenger left
                object1.regularPassengersWithEconomySeats = regLeft > numFlights*numEconomySeat ? numFlights*numEconomySeat:regLeft;
            }
        }else{ //numVIP > numBusinessSeat*numFlights
            object1.vipPassengersWithBusinessSeats = numBusinessSeat*numFlights;
            object1.regularPassengersWithBusinessSeats = 0;
            let vipLeft = numVIP - numBusinessSeat*numFlights;
            if(vipLeft >= numEconomySeat*numFlights){
                object1.vipPassengersWithEconomySeats = numEconomySeat*numFlights;
                object1.regularPassengersWithEconomySeats = 0;
            }else{//vipLeft < numEconomySeat*numFlights
                object1.vipPassengersWithEconomySeats = vipLeft;
                let ecoSeatLeft = numEconomySeat*numFlights - vipLeft;
                object1.regularPassengersWithEconomySeats = (ecoSeatLeft >= numRegular)?numRegular:ecoSeatLeft;
            }           
        }
        return object1;
    }
    return {checkFlightCapacity,distributeAllSeatsToAllPassengers};
}

module.exports = Passengers();