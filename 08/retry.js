// Say you have a function primitiveMultiply that in 20 percent of cases
// multiplies two numbers and in the other 80 percent of cases raises an
// exception of type MultiplicatorUnitFailure. Write a function that wraps this
// clunky function and just keeps trying until a call succeeds, after which it
// returns the result.
//
// Make sure you handle only the exceptions you are trying to handle.

/** Error for the funky multiplcation function */
class MultiplicatorUnitFailure extends Error {
    constructor(message) {
        super(message);
        this.cause = 'User error';
    }
}

/**
 * @description Multiplication function that will throw an error 80% of the time
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @throws {MultiplicatorUnitFailure}
 */
function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure('Klunk');
    }
}

/**
 * @description Keeps attempting to execute 'primitiveMultiply' until no error
 * is thrown
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function reliableMultiply(a, b) {
    let product;
    let counter = 0;

    while (!product) {
        try {
            counter += 1;
            product = primitiveMultiply(a, b);
        } catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)) throw error;
        }
    }

    console.log(`Tried ${counter} times.`);

    return product;
}

const main = () => {
    console.log(reliableMultiply(8, 8));
    // → 64
};

main();
