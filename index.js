const { encrypt, check } = require('./cryptography')
const express = require('express')
const app = express();
const port = 3001;
const userID = 77;
const userName = 'Wasi';
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
// Get Encrypted Code
app.get('/kitab-4', (req, res) => {
    const { id, password } = req.query;
    if (parseInt(id) === userID && password === userPassword) {
        res.send(`Welcome to ${parseInt(id)}`)
    } else {
        res.send(encrypt('77'))
    }
})
app.get('/kitab-5', (req, res) => {
    const { id, password } = req.query;
    if (parseInt(id) === userID && password === encryptedPassword) {
        res.send(`Welcome to ${userName}`)
    } else {
        res.send('You are not Allowed')
    }
})
app.get('/kitab-6', (req, res) => {
    const { code } = req.query;
    if (check(userPassword, JSON.parse(code))) {
        res.send('Secret Message!')
    } else {
        res.send('Unauthorised Entry')
    }
})
app.get('/login', (req, res) => {
    const { password} = req.query;
    if (password === userPassword) {
        res.send(encrypt(password))
    } else {
        res.send('Unauthorised')
    }
})
// Query ID, Password & Encrypt Password
app.get('/login-2', (req, res) => {
    const { id, password } = req.query
    if (parseInt(id) === userID && password === userPassword) {
        res.send(encrypt(password))
    } else {
        res.send('Unauthorized')
    }
})

//Login with Encrypted Password [iv, code]
app.get('/kitab-7', (req, res) => {
    const code = req.header('Authorization');
    const iv = req.header('IV');
    if (check(userPassword, { code, iv })) {
        res.send('Secret Message!')
    } else {
        res.send('Unauthorised Entry')
    }
})
app.listen(port, () => {
    console.log(`App Running on Port ${port}`)
});