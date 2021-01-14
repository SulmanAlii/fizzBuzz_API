const {LIMIT_NUMBER,MIN_NUMBER} = require('./config/config');
const {getDate} = require('./Date');
const fs = require('fs');

// retorn a random number between 1 and 15(defined in config.js file)
var randomNumber = Math.floor(Math.random() * ( LIMIT_NUMBER - MIN_NUMBER ) + MIN_NUMBER);

const resultsList = [];

const startFizzBuzz = (randomNumber,LIMIT_NUMBER) => {

    try {
        if (randomNumber > LIMIT_NUMBER) throw "El numero random incorrecto, porfavor intentalo de nuevo.";

        for (let index = randomNumber; index <= LIMIT_NUMBER; index++) {

            if (index % 3 == 0 && index % 5 == 0) {
                resultsList.push(`fizzbuzz`);
                console.log('fizzbuzz');
            }else if (index % 5 == 0){
                resultsList.push('buzz');
                console.log('buzz');

            }else if (index % 3 == 0){
                resultsList.push('fizz');
                console.log('fizz');
            }else{
                resultsList.push(index);
                console.log(index);
            }
        }
        return fs.appendFileSync('FizzbuzzResults.txt', resultsList.join('-').toString() + " || at " + getDate() + "\n");
                
    } catch (error) {
      console.log(error);
    }
}


// setInterval(() => {
//     startFizzBuzz(randomNumber,LIMIT_NUMBER);
// }, 16);


startFizzBuzz(randomNumber,LIMIT_NUMBER);

module.exports = {startFizzBuzz,randomNumber,resultsList}