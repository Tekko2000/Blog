const express = require('express');

const fs = require('fs');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.listen(5000, () => {
    console.log('http://localhost:5000');
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index')
});
