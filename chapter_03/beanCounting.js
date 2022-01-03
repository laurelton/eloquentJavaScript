const countChar = (str, query) => {
    let count = 0;

    for (let char of str) {
        if (char === query) {
            count += 1;
        }
    }

    return count;
};

const countBs = (str) => {
    return countChar(str, 'B');
};

const main = () => {
    console.log(countBs('BBC'));
    // → 2
    console.log(countChar('kakkerlak', 'k'));
    // → 4
};

main();
