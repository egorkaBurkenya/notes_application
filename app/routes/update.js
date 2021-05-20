module.exports = (app, db) => {
    app.put('/note/:uid', (req, res) => {
        console.log(req.body);
        const { Note } = require('../schema');
        Note.findById(req.params.uid)
        .then((note) => {
            note.title = req.body.title
            note.msg = req.body.msg
            // note.created = Date.now
            note.save()
            .then(({_id, title, msg, created}) => {
                const note = { id: _id, title, msg, created}
                res.status(202).json(note)
            })
            .catch(err => res.status(204).send('Create error'))
        })  
        .catch(err => res.status(404).send('Note found'))   
    })
}