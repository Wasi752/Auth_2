const { encrypt, decrypt} = require('./cryptography')
const express = require('express')
const app = express();
const port = 3001;
const userID = 77;
const userPassword = 'sec1234';

app.get('/', (req, res) => {
    res.send('Allahu Akbar')
})
app.get('/kitab', (req, res) => {
    res.send('Subhanallahe wa bi-Hamdihi')
})
app.get('/kitab-1/:id', (req, res) => {
    const { id } = req.params;
    if (parseInt(id) === userID) {
        res.send(`Welcome to ${parseInt(id)}`)
    } else {
        res.send('Unauthorised Entry')
    }
})
app.get('/kitab-2', (req, res) => {
    const { id } = req.query;
    if (parseInt(id) === userID) {
        res.send(`Welcome to ${parseInt(id)}`)
    } else {
        res.send('Unauthorised Entry')
    }
})
app.get('/kitab-3', (req, res) => {
    const { id, password } = req.query;
    if (parseInt(id) === userID && password === userPassword) {
        res.send(`Welcome to ${parseInt(id)}`)
    } else {
        res.send('Unauthorised Entry')
    }
})
app.get('/kitab-4', (req, res) => {
    const { id, password } = req.query;
    if (parseInt(id) === userID && password === userPassword) {
        res.send(`Welcome to ${parseInt(id)}`)
    } else {
        res.send(encrypt('77'))
    }
})
app.listen(port, () => {
    console.log(`App Running on Port ${port}`)
});