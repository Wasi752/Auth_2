const { encrypt, decrypt} = require('./cryptography')
const express = require('express')
const app = express();
const port = 3001;
const userID = 77;
const userPassword = 'sec1234';
const encryptedPassword = 'c62f0a413b440463e46a85cc5542e75f';

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
// Get Encrypted Password
app.get('/kitab-4', (req, res) => {
    const { id, password } = req.query;
    if (parseInt(id) === userID && password === userPassword) {
        res.send(`Welcome to ${parseInt(id)}`)
    } else {
        res.send(encrypt('77'))
    }
})
app.get('/kitab-5', (req, res)=>{
    const {id, password} = req.query;
    if (parseInt(id) === userID && password === encryptedPassword){
        res.send(`Welcome to ${parseInt(id)}`)
    } else {
        res.send('Unauthorised Entry')
    }
})
app.listen(port, () => {
    console.log(`App Running on Port ${port}`)
});