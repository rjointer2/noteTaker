
var express = require('express');
var jsonServer = require('json-server');

var server = express();

server.use(function (req, res, next) {
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

server.use('/api', jsonServer.router('database/db.json'));


server.listen(3001);