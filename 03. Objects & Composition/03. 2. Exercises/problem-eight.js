

function rectangle(width, height, color) {
    return {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea() {
            return this.width * this.height;
        }
    }

    // const calcArea = () => {
    //     return newRect.width * newRect.height;
    // }

    // newRect.calcArea = calcArea;

    // return newRect;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
