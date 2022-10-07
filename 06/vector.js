// Write a class Vec that represents a vector in two-dimensional space. It takes 
// x and y parameters (numbers), which it should save to properties of the same 
// name.
//
// Give the Vec prototype two methods, plus and minus, that take another vector 
// as a parameter and return a new vector that has the sum or difference of the 
// two vectors’ (this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of the 
// vector—that is, the distance of the point (x, y) from the origin (0, 0).

/** Class representing a vector */
class Vec {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Sum of two vectors
     * @param {Vec} vec 
     * @returns {Vec} The new vector
     */
    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    /**
     * Difference of two vectors
     * @param {Vec} vec 
     * @returns {Vec} The new vector
     */
    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    /**
     * Return the length of the vector
     * @returns {number} The length of the vector
     */
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

const main = () => {
    console.log(new Vec(1, 2).plus(new Vec(2, 3)));
    // → Vec{x: 3, y: 5}
    console.log(new Vec(1, 2).minus(new Vec(2, 3)));
    // → Vec{x: -1, y: -1}
    console.log(new Vec(3, 4).length);
    // → 5
};

main();
