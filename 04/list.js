// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Then add a helper function prepend, which
// takes an element and a list and creates a new list that adds the element to
// the front of the input list, and nth, which takes a list and a number and
// returns the element at the given position in the list (with zero referring to
// the first element) or undefined when there is no such element.
//
// If you haven’t already, also write a recursive version of nth.

/**
 * @description Create a linked list that represents the values in the array
 * using reduce array method
 * @param {Array} arr
 */
function arrayToList(arr) {
    const dummyHead = {};
    arr.reduce((prev, value) => {
        const rest = null;
        const curr = {value, rest};
        prev.rest = curr;

        return curr;
    }, dummyHead);

    return dummyHead.rest;
}

/**
 * @description Create a linked list that represents the values in the array
 * using reduceRight array method
 * @param {Array} arr An array of integers
 * @returns {Object}
 */
function arrayToListRR(arr) {
    return arr.reduceRight((acc, value) => {
        return acc.value !== undefined
            ? {value, rest: acc}
            : {value, rest: null};
    }, {});
}

/**
 * @description Create a linked list that represents the values in the array
 * using reduceRight array method
 * @param {Array} arr An array of integers
 * @returns {Object}
 */
function arrayToListRRP(arr) {
    return arr.reduceRight((rest, value) => prepend(value, rest), null);
}

/**
 * @description Create a linked list representing the elements of the array.
 * @param {Array} arr
 * @returns {Object} Head of the linked list
 */
function arrayToListRecursive(arr) {
    return arr.length
        ? {value: arr[0], rest: arrayToListRecursive(arr.slice(1))}
        : null;
}

/**
 * @description Create an array from the values in a linked list
 * @param {Object} list Object representing a linked list
 * @returns {Array} An array containing values from the linked list
 */
function listToArray(list) {
    const result = [];

    while (list) {
        result.push(list.value);
        list = list.rest;
    }

    return result;
}

/**
 * @description Create a new head for a linked list
 * @param {number} value Value of the new node
 * @param {Object} rest Existing list
 * @returns {Object} List with the new node as the head
 */
function prepend(value, rest = null) {
    return {value, rest};
}

/**
 * @description Returns the value of the element at the given position in the
 * list or undefined when there is no such element.
 * @param {Object} list Linked list
 * @param {number} n Index of the value to return
 * @returns {number|undefined}
 */
function nth(list, n) {
    if (!list) return undefined;

    return n === 0
        ? list.value
        : nth(list.rest, n - 1);
}

const main = () => {
    console.log(arrayToList([10, 20, 33]));
    // → {value: 10, rest: { value: 20, rest: { value: 33, rest: null } } }
    console.log(arrayToListRR([44, 55, 66]));
    // → { value: 44, rest: { value: 55, rest: { value: 66, rest: null } } }
    console.log(arrayToListRecursive([78, 89, 90]));
    // → { value: 78, rest: { value: 89, rest: { value: 90, rest: null } } }
    console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    console.log(listToArray(arrayToListRRP([43, 54, 65])));
    // → [43, 54, 65]
    console.log(prepend(10, prepend(20, {value: 42, rest: null})));
    // → {value: 10, rest: { value: 20, rest: { value: 42, rest: null } } }
    console.log(nth(arrayToList([10, 20, 30]), 1));
    // → 20
    console.log(nth(arrayToListRRP([44, 88, 101]), 3));
    // → undefined
};

main();
