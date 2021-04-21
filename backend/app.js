/* const bodyParser = require('body-parser')
const express = require('express');
const morgan = require('morgan');
const path = require("path");

const app = express();

// Middleware

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'))

app.use(( req, res, next) => {
    console.log('host: ', req.hostname)
    console.log('path: ', req.path)
    console.log('method: ', req.method)
    next();
});

app.use(function (req, res, next) {
    'use strict';

    res.header('Access-Control-Allow-Origin', '*');

    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    }

    res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else  {
        next();
    }
});

// our post request for pushing our notes to our json server

app.get('allnotes', (req, res) => {
    const data = 
})

/* app.get('/', (req, res) => {
    //res.send('<p>Hi</p>')
    //res.sendFile('index.html', {root: "../public" + __dirname})
    res.sendFile('index.html', {root: __dirname + "../public"})
});
 */



/* module.exports = app; */

