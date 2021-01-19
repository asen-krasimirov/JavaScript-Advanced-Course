

function createAssemblyLine() {
    const decoratorLibrary = {};

    decoratorLibrary.hasClima = (obj) => {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = () => { if (obj.temp < obj.tempSettings) { obj.temp++; } else if (obj.temp > obj.tempSettings) { obj.temp--; } };
    }

    decoratorLibrary.hasAudio = (obj) => {
        obj.currentTrack = null;
        obj.nowPlaying = () => { if (obj.currentTrack != null) { 
            console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
         } };
    }

    decoratorLibrary.hasParktronic = (obj) => {
        obj.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (0.1 <= distance && distance < 0.25) {
                console.log("Beep! Beep!");
            } else if (0.25 <= distance && distance < 0.5) {
                console.log("Beep!");
            }
            
            /*
            switch (distance) {
                case distance < 0.1: console.log("Beep! Beep! Beep!"); break;
                case 0.1 <= distance && distance < 0.25: console.log("Beep! Beep!"); break;
                case 0.25 <= distance && distance < 0.5: console.log("Beep!"); break;
            }
            */
        
        }; 
    }

    return decoratorLibrary;
}


function assemblyFunctionTests() {
    // const assert = require('assert');

    const assemblyLine = createAssemblyLine();

    const myCar = {
        make: 'Toyota',
        model: 'Avensis'
    };

    const testOne = () => {
        assemblyLine.hasClima(myCar);
        console.log(myCar.temp);
        myCar.tempSettings = 18;
        myCar.adjustTemp();
        console.log(myCar.temp);
    };

    const testTwo = () => {
        assemblyLine.hasAudio(myCar);
        myCar.currentTrack = {
            name: 'Never Gonna Give You Up',
            artist: 'Rick Astley'
        };
        myCar.nowPlaying();
    };

    const testThree = () => {
        assemblyLine.hasParktronic(myCar);
        myCar.checkDistance(0.4);
        myCar.checkDistance(0.2);
    };

    testOne();
    testTwo();
    testThree();
    console.log('\n');
    console.log(myCar);
}

assemblyFunctionTests();
