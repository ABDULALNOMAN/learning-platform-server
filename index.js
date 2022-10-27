const express = require('express');
const app = express()
const cors = require("cors")
const port = process.env.port || 5000;


const data = require('./data/data.json')
const items = require('./data/item.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world i am ok')
})

app.get('/courses', (req, res) => {
    res.send(data)
})

app.get('/coursesdetails/:id', (req, res) => {
    const id = req.params.id;
    const details = items.filter(item=>item._id === id)
    res.send(details)
})

app.get('/courses/coursesdetails/checkout/:index',(req,res)=>{
    const index = req.params.index
    const item = items.find((n) => n.index == index);
    res.send(item)
})

app.listen(port, () => {
    console.log('example check in site', port)
})