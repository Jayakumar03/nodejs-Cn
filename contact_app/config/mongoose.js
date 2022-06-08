// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1/contact_app_db');


// this one will show if there is an error
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));


// if no error is detected then this one will show
db.once('open', function () {
    console.log('successfully connected to the database')
})