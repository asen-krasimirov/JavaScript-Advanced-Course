

function simpleObject(arr) {
    return arr.reduce((key, value) => {
        let [k, v] = value.split(" ")
    }, {})
}