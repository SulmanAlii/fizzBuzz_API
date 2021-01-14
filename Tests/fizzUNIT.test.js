const {startFizzBuzz} = require('../FizzBuzz');
const {LIMIT_NUMBER} = require('../config/config')


//test 1
test('should return the number passed are not divisible by 3 and 5',  () => {
    expect(startFizzBuzz(1,LIMIT_NUMBER)).toEqual(console.log(1));
})

//test 2
test('should return "fizz" if number passed is divided by 3', () => {
    expect(startFizzBuzz(3,LIMIT_NUMBER)).toEqual(console.log('fizz'));

})
//test 3
test('should return "buzz" if number passed is divided by 5',  () => {
    expect(startFizzBuzz(5,LIMIT_NUMBER)).toEqual(console.log('buzz'));
    expect(startFizzBuzz(10,LIMIT_NUMBER)).toEqual(console.log('buzz'));

})

//test 4
test('should return "fizzbuzz" if number passed is divided by 15', () => {
    expect(startFizzBuzz(15,LIMIT_NUMBER)).toEqual(console.log('fizzbuzz'));

})

