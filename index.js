const express = require('express');
const app = express()
const port = process.env.port || 5000;


const data = require('./data/data.json')


app.get('/', (req, res) => {
    res.send('hello world i am ok')
})

app.get('/data', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log('example check in site', port)
})