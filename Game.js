 const error = require('./errors')


 class Game {

     moves;
     rules;
     currentCompMove;
     secretKey;

     showMenu() {
         console.log('Available moves: ');
         this.moves.forEach((element, index) => {
             console.log(`${index+1} - ${element}`);
         });
         console.log('0 - exit');
         console.log('? - help');
     }

     getMoves() {

         const moves = process.argv.slice(2);
         error(this.checkInputMoves(moves));
         this.moves = moves;

     }

     checkInputMoves(moves) {
         let errors = [];

         if (moves.length < 3) errors.push(0);
         if (moves.length % 2 == 0) errors.push(1)
         let nonunique = moves.some((move, index, arr) => { if (index != arr.length) return arr.includes(move, index + 1) });
         if (nonunique) errors.push(2);

         return errors.length == 0 ? false : errors;
     }

     createRules(moves = this.moves) {

         this.rules = moves.reduce((cols, yourMove, index, array) => {
             cols[yourMove] = array.reduce((rows, compMove) => {
                 let centredMoves = this.centerMove(array.slice(0), yourMove);
                 let indexCompMove = centredMoves.indexOf(compMove);
                 rows[compMove] = (compMove == yourMove) ? 'draw' :
                     indexCompMove < Math.floor(array.length / 2) ? 'lose' :
                     'win';
                 return rows;
             }, {});
             return cols;
         }, {});

     }

     centerMove(a, moveToCenter) {
         while (a.indexOf(moveToCenter) != Math.floor(a.length / 2)) {
             a.unshift(a.pop())
         }
         return a
     }

     createCompMove() {
         let i = Math.floor(Math.random() * this.moves.length);
         this.currentCompMove = this.moves[i];
     }

     defineResult(yourMove, compMove) {
         return this.rules[yourMove][compMove];
     }


 }

 module.exports = Game