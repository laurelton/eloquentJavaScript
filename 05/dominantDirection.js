// Write a function that computes the dominant writing direction in a string of
// text. Remember that each script object has a direction property that can be
// "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
//
// The dominant direction is the direction of a majority of the characters that
// have a script associated with them. The characterScript and countBy functions
// defined earlier in the chapter are probably useful here.
const SCRIPTS = require('./scripts');

function getMaxVal(obj) {
    const keys = Object.keys(obj);

    if (!keys.length) return undefined;

    return keys.reduce((max, curr) => {
        return obj[curr] > obj[max] ? curr : max;
    });
}
/**
 * @description Computes the dominant writing direction in a string of text
 * @param {string} str
 * @returns {string} 'ltr' for left-to-right, 'rtl' for right-to-left, 'ttb' for
 * top-to-bottom
 */
function dominantDirection(str) {
    const directionCounts = {};
    for (const char of str) {
        const code = char.codePointAt(0);
        const script = SCRIPTS.filter(elem => {
            return elem.ranges.some(([fr, to]) => code >= fr && code < to);
        });

        if (script.length) {
            const {direction} = script[0];
            directionCounts[direction] = (directionCounts[direction] || 0) + 1;
        }
    }

    return getMaxVal(directionCounts);
}

const main = () => {
    console.log(dominantDirection('Hello!'));
    // → ltr
    console.log(dominantDirection('Hey, مساء الخير'));
    // → rtl

    let ttbStr = 'Hey there, مساء الخير';
    for (let codePoint = 6176; codePoint < 6200; codePoint++) {
        ttbStr += String.fromCodePoint(codePoint);
    }
    console.log(dominantDirection(ttbStr));
    // → ttb
};

main();
