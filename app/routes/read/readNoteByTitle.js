module.exports = (app, db) => {
    app.get('/note/title/:title', (req, res) => {
        const { Note } = require('../../schema');
        console.log(req.params.title);
        Note.findOne( {title: req.params.title} )
        .then(({_id, title, msg, created}) => {
            const note = { id: _id, title, msg, created}
            res.status(200).json(note)
        })
        .catch( err => {
            res.status(404).send('Note not find')
        })
    })
}