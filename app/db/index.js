const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Egor:egor1234@notes.8ftic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

module.exports = mongoose;