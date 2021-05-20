module.exports = (app, db) => {
    app.get('/notes', (req, res) => {
        const { Note } = require('../../schema');
        Note.find({})
        .then(result => {
            const notes = {}; 
            result.forEach(({_id, title, msg, created}) => {
                notes[_id] = { title, msg, created }
             })
            res.status(200).json(notes);
        }) 
    })
};