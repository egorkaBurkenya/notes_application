const createNote = require('./create')
const readAll = require('./read/readAll')
const readNoteById = require('./read/readNoteById')
const readNoteByTitle = require('./read/readNoteByTitle')
const deleteNote = require('./delete')
const updateNote = require('./update')

module.exports = (app, db) => {
    createNote(app, db)
    readAll(app, db)
    readNoteById(app, db)
    readNoteByTitle(app, db)
    deleteNote(app, db)
    updateNote(app, db)
}
