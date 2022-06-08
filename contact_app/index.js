const express = require('express');
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');


const db = require('./config/mongoose.js')


const app = express();

// need to install ejs for using ( npm install ejs for installing) 
app.set('view engine', 'ejs');
// app.set( path.join(__dirname,'views'));
/* or */
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: false}));

var contactList = [
    {
        name:'jayakumar',
        number:'7358819933',
    },
    {
        name:'harish',
        number:'7358819933',
    },
    {
        name:'jaya.k',
        number:'7358819933',
    }

    
]


app.get('/', function (req, res) {

    return res.render('index', {
        title: "My Contact List",
        contact_list : contactList
    });


})
// for practice.js 
app.get('/practice', function (req, res) {

    return res.render('practice', {
        title: "My practice site"

    });

})


// from data
app.post('/create-contact',function(req,res) {
    // return res.redirect('/practice');
    contactList.push({
        name: req.body.name,
        number: req.body.number
    })

    // or 

    // contactList.push(req.body);

    // inorder to going to back to last page uee
    return res.redirect('back');
})

// for deleting the contact

app.get('/delete-contact', function (req, res) {

    // get query from url
    let number = req.query.number;


    let contactIndex = contactList.findIndex(contact => contact.number == number);
    if(contactIndex != -1){
        contactList.splice(contactIndex, 1);
    }
    else{
        return res.redirect('back');
    }
    
})



app.listen(port, function (err) {
    if (err) {
        console.log("Error in running server")
    }

    console.log("yup! my express is runnings in port: ", port);
});