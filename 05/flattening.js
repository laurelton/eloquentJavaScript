/*
 * Use the reduce method in combination with the concat method to “flatten” an
 * array of arrays into a single array that has all the elements of the original
 * arrays.
 */

/**
 * @description Flatten an array using the 'reduce' and 'concat' Array methods.
 * @param   {Array} arr The array to be flattened.
 * @return  {Array}     flattend array
 */
function flatten(arr) {
    return arr.reduce((flat, elem) => flat.concat(elem), []);
}

const main = () => {
    let arrays = [[1, 2, 3], [4, 5], [6]];
    const flattened = flatten(arrays);
    // → [1, 2, 3, 4, 5, 6]
    console.log(flattened);
};

main();
