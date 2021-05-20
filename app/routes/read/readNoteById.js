module.exports = (app, db) => {
    app.get('/note/:uid', (req, res) => {
        const { Note } = require('../../schema');
        Note.findById(req.params.uid)
        .then(({_id, title, msg, created}) => {
            const note = { id: _id, title, msg, created}
            res.status(200).json(note)
        })
        .catch( err => {
            res.status(404).send('Note not find')
}
        )
    })
}