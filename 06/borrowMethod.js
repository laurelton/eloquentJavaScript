// Can you think of a way to call hasOwnProperty on an object that has its own
// property by that name?

const main = () => {
    let map = {one: 1, two: true, hasOwnProperty: true};

    // Fix this call
    console.log(Object.hasOwnProperty.call(map, 'one'));
    // → true
};

main();
