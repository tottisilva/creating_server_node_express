var express = require('express');
var fs = require('fs');


var server = express();

//Creating the routes
server.get('/', (req, res) => {
    res.send('<h1>Express Works</h1>')
});

server.get('/tasks', (req, res) => {
    // Implementing the JSON file
    fs.readFile('./db.json', (err, data) =>{
        if(!err){
            var tasks = JSON.parse(data.toString()).tasks;
            res.json(tasks);
        }
        else{
            console.log('Error on server', err);
        }
    })
});

// Creating a listener 
server.listen(5000, () =>{
    console.log('Server is listener on port 5000')
});