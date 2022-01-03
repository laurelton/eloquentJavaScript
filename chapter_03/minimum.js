const minimum = (...nums) => {
    return nums.reduce((prev, curr) => (prev < curr ? prev : curr));
};

const main = () => {
    console.log(minimum(0, 10));

    console.log(minimum(0, -10));
};

main();
