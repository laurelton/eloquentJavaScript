/*
 * Analogous to the 'some' method, arrays also have an 'every' method. This one
 * returns true when the given function returns true for every element in the
 * array. In a way, 'some' is a version of the || operator that acts on arrays,
 * and 'every' is like the && operator.
 *
 * Implement 'every' as a function that takes an array and a predicate function
 * as parameters. Write two versions, one using a loop and one using the 'some'
 * method.
 */

/**
 * @description Returns true if all members of the array return true for the function provided.
 * @param {Array} arr
 * @param {Function} fn Function to test each element
 * @return {Boolean} Returns 'true' if all elements pass the test function
 */
function everything(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) return false;
    }

    return true;
}

const main = () => {
    console.log(everything([1, 3, 5], n => n < 10));
    // → true
    console.log(everything([2, 4, 16], n => n < 10));
    // → false
    console.log(everything([], n => n < 10));
    // → true
};

main();
