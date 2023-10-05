const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Define routes for employee-related operations
router.get('/employees', employeeController.getAllEmployees);
// Define other routes for creating, updating, and deleting employees, etc.

module.exports = router;