// import dependecies
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// init express library
const server = express()
server
// use static files
.use(express.static('public'))

// template engine config
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// create route
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)


// call server
server.listen(5500)