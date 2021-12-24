const Game = require('./Game')
const SecretKey = require('./SecretKey')
const secureMessage = require('./HMAC');
const readValue = require('./readValue');


const gm = new Game();
const secret = new SecretKey();
const sm = new secureMessage();


gm.getMoves();

gm.createRules();

app();


function app() {

    console.log('New game!');

    gm.createCompMove();

    gm.secretKey = secret.create();

    sm.createHMAC(gm.secretKey, gm.currentCompMove);

    console.log('HMAC: ', sm.hmac);

    gm.showMenu();

    interface();
}


async function interface() {
    const ans = await readValue('Choose move: ');
    if ((ans >= 0 && ans <= gm.moves.length) || ans == '?') {
        switch (ans) {

            case '?':
                console.table(gm.rules);
                interface();
                break;
            case '0':
                break;
            default:
                {
                    console.log('Your move: ', gm.moves[ans - 1]);
                    console.log('Computer move: ', gm.currentCompMove);
                    console.log('Result: ', gm.defineResult(gm.moves[ans - 1], gm.currentCompMove));
                    console.log('HMAC key: ', gm.secretKey);

                    const exit = await readValue('Do you wanna play again? (y/n): ');

                    if (exit == 'y') {
                        app();
                    } else if (exit == 'n') {
                        break;
                    }
                }
        }
    } else {
        console.log('The wrong command was entered! (Exapmle: 1 ). Please, try again.');
        interface();
    }
}