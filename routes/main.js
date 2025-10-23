// Create a new router
const express = require("express");
const router = express.Router();
const path = require('path');

// Handle the main routes

//Contents of localhost:8000
router.get("/", (req, res) => res.send("Hello World!")); 

//Contents of localhost:800/about
router.get('/about', (req, res) => res.send('<h1>This is the about page</h1>'));

//Contents of localhost:800/contact which shows contact details
router.get('/contact', (req, res) => res.send('<h1>This is the contact page</h1><p>Email address: aisla011@gold.ac.uk<br>Address: Goldsmiths University</p>'));

//Contents of localhost:800/date which shows the current date and time
router.get('/date', (req, res) => { const date = new Date();
    res.send(`<h1>Todays date and time is: ${date} </h1>`);
});

//extention tasks: 
// The route /welcome shows the name of user passed in the URL
router.get("/welcome/:name", (req, res) => { const userName = req.params.name;
    res.send(`<h1>Welcome, ${userName}!</h1>`);
});

// chaining routes
router.get("/chain", (req, res, next) => { console.log('First chain...');
    next()},(req, res) => {
        res.send('chain complete!')} )

//sending files
router.get('/file', (req,res) => {
    res.sendFile(path.join(__dirname, 'a.html'));
});

// Export the router object so index.js can access it
module.exports = router;
