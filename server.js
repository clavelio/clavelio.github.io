const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`App listening on port: ${port}`));


const data = [];

app.post('/addMovie', function addMovie (req, res) {
    let newData = req.body;
    let newEntry = {
        key: newData.key
    };
    data.push(newEntry);
    console.log(newEntry);
});

app.get('/addMovie', (req, res) => res.send(data));

console.log(data);



// app.post('/add', (req, res) => {data.push(req.body)});

//app.post('/all', (req, res) => {
//    let data = req.body;
//    console.log(data);
//});