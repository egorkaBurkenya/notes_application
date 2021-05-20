const db = require('../db');

const noteSchema = new db.Schema({
    title: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports.Note = db.model('Note', noteSchema);