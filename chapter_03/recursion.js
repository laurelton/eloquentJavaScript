const isEven = (num) => {
    const number = Math.abs(num);

    if (number === 1) {
        return false;
    }

    if (number === 0) {
        return true;
    }

    return isEven(number - 2);
};

const main = () => {
    const nums = [50, 75, -1];

    nums.forEach(n => console.log(isEven(n)));
};

main();
