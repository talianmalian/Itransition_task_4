function error(errCodes) {

    const errorList = {
        '0': {
            code: '0',
            name: 'Size error',
            description: "Number of moves <3",
            example: 'paper scissors stone'

        },

        '1': {
            code: '1',
            name: 'Parity error',
            description: "Number of moves isn't odd",
            example: 'paper scissors stone'
        },

        '2': {
            code: '2',
            name: 'Uniqueness error',
            description: "Moves must be unique",
            example: 'paper scissors stone'
        }
    }

    if (errCodes) {
        errCodes.forEach(errCode => {
            const err = errorList[errCode];
            console.log(`---Error ${err.code}---
            Name: ${err.name}
            Description: ${err.description}
            Correct example: ${err.example} `);
        });
        process.exit();
    }



}

module.exports = error;