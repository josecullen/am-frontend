'use strict'
const express    = require('express');
const path       = require('path');
const http       = require('http');
const bodyParser = require('body-parser');
const config     = require('./config')

const app = express();

require('./server/database').connect(config.database)

var hotels = require('./server/routes/hotels');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api/hotels', hotels)

app.get('/assets/:file', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/'+req.params.file));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
