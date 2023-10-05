const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Example middleware

// Middleware setup
app.use(bodyParser.json());

// Routes setup
const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api', employeeRoutes); // Define your API routes

module.exports = app;