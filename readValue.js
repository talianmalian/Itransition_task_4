const readline = require('readline')

const readValue = (question) => {
    return new Promise((res, rej) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question, (a) => {
            rl.close()
            res(a)
        })
    })
}

module.exports = readValue;