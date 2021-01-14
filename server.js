const express = require('express');
const {resultsList} = require('./FizzBuzz');


const PORT = process.env.PORT || 5000;

const app = express();


app.get('/' ,(req,res) => {
    res.send('WELCOME TO FIZZ BUZZ GAME')
});

app.get('/FizzBuzz', (req,res) => {
    try {
        res.send(resultsList.join('-'))
    } catch (error) {
        res.send('Error on get data');
    }
});

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});