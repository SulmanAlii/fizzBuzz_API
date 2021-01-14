const fs = require('fs');
const {startFizzBuzz,resultsList} = require('../FizzBuzz');
const {getDate} = require('../Date');

const createFileAndSaveString = fs.appendFileSync('FizzbuzzResults.txt', resultsList.join('-').toString() + " || at " + getDate() + "\n");

test('should save string in a file', () => {
    expect(startFizzBuzz()).toEqual(createFileAndSaveString);
})
