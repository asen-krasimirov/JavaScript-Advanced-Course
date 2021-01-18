
function roadRadar (speed, area) {
    let speedLimit;
    let result;

    switch (area) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;
    }

    const speedDifference = speed - speedLimit;

    if (speedDifference <= 0) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        result = `The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimit} - `;

        if (speedDifference <= 20) {
            result += 'speeding';
        } else if (speedDifference <= 40) {
            result += 'excessive speeding';
        } else {
            result += 'reckless driving';
        }
    }

    console.log(result);
}


roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
