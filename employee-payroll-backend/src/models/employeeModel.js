const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  gender: String,
  employeeNumber: String,
  salutation: String,
  profileColor: String,
  // Additional fields and validation as needed
});

module.exports = mongoose.model('Employee', employeeSchema);