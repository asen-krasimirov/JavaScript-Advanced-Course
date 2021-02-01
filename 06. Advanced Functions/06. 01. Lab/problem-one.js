function solve(area, vol, input) {
    // return JSON.parse(input).map(obj => ({'area': Math.abs(area.call(obj)), 'volume': Math.abs(vol.call(obj))}));

    function setNewProperies(obj) {
        const newObj = {};

        newObj['area'] = area.call(obj);
        newObj['volume'] = vol.call(obj);

        return newObj;
    }

    return JSON.parse(input).map(setNewProperies);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};


example1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    
example2 = `[
    {"x":"10","y":"-22","z":"10"},
    {"x":"47","y":"7","z":"-5"},
    {"x":"55","y":"8","z":"0"},
    {"x":"100","y":"100","z":"100"},
    {"x":"55","y":"80","z":"250"}
    ]`

console.log(solve(area, vol, example1))
// console.log(solve(area, vol, example2))