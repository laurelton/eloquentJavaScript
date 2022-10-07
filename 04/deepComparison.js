// The == operator compares objects by identity. But sometimes you’d prefer to
// compare the values of their actual properties.
//
// Write a function deepEqual that takes two values and returns true only if
// they are the same value or are objects with the same properties, where the
// values of the properties are equal when compared with a recursive call to
// deepEqual.

/**
 * @description Perform a deep comparison of two objects
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {boolean}
 */
function deepEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (obj1 === obj2) return true;
    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
        if (!(key in obj2)) return false;
        const curr1 = obj1[key];
        const curr2 = obj2[key];

        if (typeof curr1 === 'object') {
            if (!deepEqual(curr1, curr2)) {
                return false;
            }
        } else if (curr1 !== curr2) {
            return false;
        }
    }

    return true;
}

const main = () => {
    let obj = {here: {is: 'an'}, object: 2};
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, {here: 1, object: 2}));
    // → false
    console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
    // → true
};

main();
