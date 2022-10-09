// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
//
// Next, write a sum function that takes an array of numbers and returns the sum
// of these numbers. Run the example program and see whether it does indeed
// return 55.
//
// As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return
// [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
// range(5, 2, -1) produces [5, 4, 3, 2].

/**
 * @description Generate all integers between start and stop by step
 * @param {number} start First number in the range
 * @param {number} stop Range limit
 * @param {number} step A non-zero integer, defaults to 1
 * @returns {Array} An array of integers
 */
const range = (start, stop, step = 1) => {
    const values = [];
    if (step === 0) return [];

    const conditional = step < 0
        ? (begin, end) => begin >= end
        : (begin, end) => begin <= end;

    while (conditional(start, stop)) {
        values.push(start);
        start += step;
    }

    return values;
};

/**
 * @description Sums the values of an array of integers
 * @param {Array} nums An array of integers
 * @returns {number} The total
 */
const sum = (nums) => {
    return nums.reduce((total, curr) => total + curr);
};

const main = () => {
    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    range();
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55
};

main();
