// bringing in express from thrid party module 
//Create an express server that responds to the root get request ('/') with "Hello from the web server side...".
const express = require('express');


// sendfile
const path = require('path');


let app = express();

//went and got the index.html file and displayed to requester
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use

// turn on server
app.listen(3000);

// all the above is the basics of how to create an express web server


//line12 before we started creating index, css and app.js files
// app.get('/', (req, res) => {
//     res.send('Hello from the web server side');
//     console.log("success");
// });