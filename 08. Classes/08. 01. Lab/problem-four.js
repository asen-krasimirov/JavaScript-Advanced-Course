

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointOne, pointTwo) {
        for (const point of [pointOne, pointTwo]) {
            if (!point instanceof Point) { throw new Error(`Expected Point object, got ${typeof point} instead`) }
        }
        
        // distance=√((x2 - x1)² + (y2 - y1)²)
        return Math.sqrt((pointTwo.x - pointOne.x)**2 + (pointTwo.y - pointOne.y)**2);
    }
}


let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
