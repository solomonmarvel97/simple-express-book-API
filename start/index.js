const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/books')

const express = require('express');
const app = express();

const bodyParser = require('body-parser')

//middleare
app.use(express.json())



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const {taskRoute} = require('./route/tasks')
app.use('/api/tasks', taskRoute)

app.listen(3000, () =>
    console.log('App is listening on port 3000!'),
);



