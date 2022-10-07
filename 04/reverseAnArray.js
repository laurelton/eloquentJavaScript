// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions,
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
// as argument and produces a new array that has the same elements in the
// inverse order. The second, reverseArrayInPlace, does what the reverse method
// does: it modifies the array given as argument by reversing its elements.
// Neither may use the standard reverse method.

/**
 * @description Returns a copy of the provided array with the order reversed.
 * @param {Array} arr
 * @returns {Array} The reversed array
 */
const reverseArray = function (arr) {
    return arr.reduce((acc, ele) => [ele].concat(acc), []);
};

/**
 * @description Reverses the order of the elements of an array in place
 * @param {Array} arr
 */
const reverseArrayInPlace = function (arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const j = arr.length - i - 1;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};

const main = function () {
    console.log(reverseArray(['A', 'B', 'C']));
    // → ["C", "B", "A"];
    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]
};

main();
