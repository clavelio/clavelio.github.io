const data = {};

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('website'));


const server = app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
});

app.get('/all', (req, res) => {res.send(data)});

app.post('/add', addData);

function addData (req, res) {
    data.push(req.body);
    console.log(data);
};