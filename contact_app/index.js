const express = require('express');
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');


const db = require('./config/mongoose.js')
const Contact = require('./models/contact.js');
const {
    Console
} = require('console');


const app = express();

// need to install ejs for using ( npm install ejs for installing) 
app.set('view engine', 'ejs');
// app.set( path.join(__dirname,'views'));
/* or */
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({
    extended: false
}));

var contactList = [{
        name: 'jayakumar',
        number: '7358819933',
    },
    {
        name: 'harish',
        number: '7358819933',
    },
    {
        name: 'jaya.k',
        number: '7358819933',
    }


]


app.get('/', function (req, res) {

    Contact.find({}, function (err, contacts) {
        if (err) {
            console.log("error in database");
            return;
        } else {

        }
    })


    return res.render('index', {
        title: "My Contact List",
        contact_list: contacts
    });


})
// for practice.js 
app.get('/practice', function (req, res) {

    return res.render('practice', {
        title: "My practice site"

    });

})


// creating data 
app.post('/create-contact', function (req, res) {
    /*    return res.redirect('/practice');
        with out database
        contactList.push({
            name: req.body.name,
            number: req.body.number
        })

        or 

        contactList.push(req.body);

        inorder to going to back to last page uee
        return res.redirect('back');*/


    // updating contact using database

    Contact.create({
        name: req.body.name,
        number: req.body.number,
    }, function (err, newContact) {

        if (err) {
            console.log("error occured");
            return;
        } else {
            console.log('**********', newContact);
            return res.redirect('back');
        }
    })

})

// for deleting the contact

app.get('/delete-contact', function (req, res) {

    // get id from query using url
    let number = req.query.id;

// find the contact inthe database using id

  /*  let contactIndex = contactList.findIndex(contact => contact.number == number);
    if (contactIndex != -1) {
        contactList.splice(contactIndex, 1);
    } else {
        return res.redirect('back');
    }*/

    // deleting using database
    Contact.findByIdAndDelete(id, function (error) 
    {
        if (error) {
            console.log(error,'occured');
            return;
        }
        return res.redirect('back');
    })


})



app.listen(port, function (err) {
    if (err) {
        console.log("Error in running server")
    }

    console.log("yup! my express is runnings in port: ", port);
});