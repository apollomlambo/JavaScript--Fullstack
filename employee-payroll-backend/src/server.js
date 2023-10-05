const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost/employeePayroll', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Define Employee Schema
const EmployeeSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  gender: String,
  employeeNumber: Number,
  salutation: String,
  profileColor: String,
});

const Employee = mongoose.model('Employee', EmployeeSchema);

// API Routes
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving employees' });
  }
});

app.post('/api/employees', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: 'Invalid employee data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});