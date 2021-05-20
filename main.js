const express = require('express')

const port = 3000
const app = express()

app.listen(port, () => console.log('Listen...'))

const db = require('./app/db')
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(__dirname + '/public'));
app.use(express.json({type: ['application/json', 'text/plain']}));

app.get('/', (req, res) =>{
    res.status(200)
    res.sendFile(__dirname + '/pages/index.html')
})
app.get('/create', (req, res) =>{
    res.status(200)
    res.sendFile(__dirname + '/pages/create.html')
})
app.get('/openNote/:uid', (req, res) =>{
    res.status(200)
    const notePage = require('fs').readFileSync(__dirname + '/pages/note.html').toString().replace('noteUID', req.params.uid).replace('noteUID', req.params.uid)
    res.send(notePage)
})
app.get('/editNote/:uid', (req, res) =>{
    res.status(200)
    const notePage = require('fs').readFileSync(__dirname + '/pages/editNote.html').toString().replace('noteUID', req.params.uid).replace('noteUID', req.params.uid)
    res.send(notePage)
})

require('./app/routes')(app, db)

