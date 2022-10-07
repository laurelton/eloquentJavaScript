const countChar = (str, query) => {
    return [...str].reduce((count, char) => {
        return char === query ? count + 1 : count;
    }, 0);
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
