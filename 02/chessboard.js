const main = () => {
    const size = process.argv[2] || 8;

    for (let i = 0; i < size; i++) {
        let row = '';

        for (let j = 0; j < size; j++) {
            row += (i + j) % 2 ? '#' : '_';
        }

        console.log(row);
    }
};

main();
