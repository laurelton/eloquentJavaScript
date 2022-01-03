const main = () => {
    for (let i = 0; i < 100; i++) {
        const num = i + 1;
        let output = '';

        if (num % 3 === 0) {
            output += 'Fizz';
        }

        if (num % 5 === 0) {
            output += 'Buzz';
        }

        if (output.length) {
            console.log(output);
        } else {
            console.log(num);
        }
    }
};

main();
