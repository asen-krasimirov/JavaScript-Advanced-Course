

function calorieObject(array) {
    const newObj = {};
    for (let index = 0; index < array.length; index+=2) {
        newObj[array[index]] = Number(array[index+1]);
    }
    console.log(newObj);
}


calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);