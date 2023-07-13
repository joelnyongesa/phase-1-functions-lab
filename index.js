// Code your solution in this file!
function distanceFromHqInBlocks(location){
    return Math.abs(location - 42)
};

function distanceFromHqInFeet(location){
    const blocks = distanceFromHqInBlocks(location);
    return (blocks*264);
};

function distanceTravelledInFeet(startBlock, destinationBlock){
    const blocks = Math.abs(destinationBlock - startBlock);
    const distanceTravelled = blocks * 264;
    return distanceTravelled;
}

function calculatesFarePrice(startBlock, destinationBlock){
    const distanceTravelled = distanceTravelledInFeet(startBlock, destinationBlock);
    // Fare prices: 
    // First 400 feet free, between 400 and 2000 feet: 2 cents/foot, 
    if(distanceTravelled<=400){
        return 0;
    }
    else if(distanceTravelled >400 && distanceTravelled<=2000){
        const totalFeetTravelled = distanceTravelled - 400;
        const cost = (0.02*totalFeetTravelled);
        return cost;
    }
    else if(distanceTravelled > 2000 && distanceTravelled <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far'
    }
}