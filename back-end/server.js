//===================================================
// DEPENDENCIES
//===================================================
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Records = require('./models/records')
const cors = require('cors')

//===================================================
// CONFIGURATI0NS
//===================================================
app.use(express.json())
app.use(cors())
app.use(express.static('public'))

//===================================================
// ROUTES
//===================================================

//CREATE
app.post('/records', (req, res) => {
    Records.create(req.body)
    .then((createdRecord) => {
        res.json(createdRecord)
    })
})

//READ
app.get('/records', (req, res) => {
    Records.find({})
    .then((foundRecord) => {
        res.json(foundRecord)
    })
})

//UPDATE
app.put('/records/:id', (req, res) => {
    Records.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedRecord) => res.json(updatedRecord))
})

//DELETE
app.delete('/records/:id', (req, res) => {
    Records.findByIdAndRemove(req.params.id)
    .then((deletedRecord) => {
        res.json(deletedRecord)
    })
})

//===================================================
// CONNECTIONS
//===================================================
app.listen(3000, () => {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/records')
mongoose.connection.once('open', () => {
    console.log('connected to mongod');
})