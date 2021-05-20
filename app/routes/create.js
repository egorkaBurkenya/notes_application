module.exports = (app, db) => {
    app.post('/note', (req, res) => {
        const { Note } = require('../schema');
        const note = new Note({
            title: req.body.title,
            msg: req.body.msg
        })
        note.save()
            .then(result => res.status(201).send(result._id))
            .catch(err => res.status(409).send('Create error'))
    })
};