 
function timeToWalk (steps, footprint, speedKH) {
    const speed = speedKH / 3.6;
    const distance = steps * footprint;
    const breaks = Math.floor(distance / 500) * 60;

    const totalTimeInSeconds = (distance / speed) + breaks;

    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds - (hours * 3600)) / 60);
    const seconds = (totalTimeInSeconds - (minutes * 60)).toFixed(0);

    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
}


timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
