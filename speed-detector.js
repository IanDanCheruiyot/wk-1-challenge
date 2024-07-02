function detectedSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsLimit = 12;
    if (speed < speedLimit + kmPerDemeritPoint) {
        console.log("Ok");
    } else {
        const demeritPoints = ((speed - speedLimit) / kmPerDemeritPoint) | 0;
        if (demeritPoints >= demeritPointsLimit) {
            console.log("Driving License suspended");
        } else {
            console.log("Points:" + demeritPoints);
        }
    }
}
