import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Paper,
  MenuItem,
  Select,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment, // Import InputAdornment for salary formatting
} from '@mui/material';

const EmployeeForm = ({ onAddEmployee }) => {
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    employeeNumber: '',
    salutation: '',
    profileColor: 'DEFAULT', // Default profile color
    grossSalary: '', // Gross Salary
    fullName: '', // Full Name
  });

  const salutationOptions = ['Dr.', 'Mr.', 'Ms.', 'Mrs.', 'M'];
  const profileColorOptions = ['DEFAULT', 'GREEN', 'RED', 'BLUE'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSave = () => {
    onAddEmployee(employee);
    setEmployee({
      firstname: '',
      lastname: '',
      gender: '',
      employeeNumber: '',
      salutation: '',
      profileColor: 'DEFAULT', // Reset to default profile color
      grossSalary: '', // Reset gross salary
      fullName: '', // Reset full name
    });
  };

  const handleCancel = () => {
    setEmployee({
      firstname: '',
      lastname: '',
      gender: '',
      employeeNumber: '',
      salutation: '',
      profileColor: 'DEFAULT', // Reset to default profile color
      grossSalary: '', // Reset gross salary
      fullName: '', // Reset full name
    });
  };

  const handleSalutationChange = (event) => {
    const salutation = event.target.value;
    // Automatically set the gender based on salutation
    let gender = '';
    if (salutation === 'Mr.') {
      gender = 'Male';
    } else if (salutation === 'Mrs.' || salutation === 'Ms.') {
      gender = 'Female';
    } else if (salutation === 'Mx.') {
      gender = 'Unspecified';
    }

    setEmployee({
      ...employee,
      salutation,
      gender,
    });
  };

  const formatGrossSalary = (value) => {
    // Format salary with digit grouping
    const parts = value.split('');
    const formattedValue = [];
    let count = 0;

    for (let i = parts.length - 1; i >= 0; i--) {
      formattedValue.unshift(parts[i]);
      count++;

      if (count === 3 && i !== 0) {
        formattedValue.unshift(' ');
        count = 0;
      }
    }

    return formattedValue.join('');
  };

  const handleGrossSalaryChange = (event) => {
    const rawValue = event.target.value;
    // Remove non-numeric characters and format the salary
    const formattedValue = formatGrossSalary(rawValue.replace(/\D/g, ''));
    setEmployee({
      ...employee,
      grossSalary: formattedValue,
    });
  };

  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5">Add Employee</Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'right' }}>
          <Button variant="contained" color={employee.profileColor} onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" color="default" onClick={handleCancel}>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            name="firstname"
            value={employee.firstname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            name="lastname"
            value={employee.lastname}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Salutation"
            variant="outlined"
            fullWidth
            name="salutation"
            value={employee.salutation}
            onChange={handleSalutationChange}
          >
            {salutationOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender"
              value={employee.gender}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="Unspecified"
                control={<Radio />}
                label="Unspecified"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Employee Number"
            variant="outlined"
            fullWidth
            name="employeeNumber"
            value={employee.employeeNumber}
            onChange={handleChange}
          />
        </Grid>
        {/* Add Full Name, Gross Salary, and Profile Color fields */}
        <Grid item xs={6}>
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            name="fullName"
            value={`${employee.firstname} ${employee.lastname}`}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Gross Salary"
            variant="outlined"
            fullWidth
            name="grossSalary"
            value={employee.grossSalary}
            onChange={handleGrossSalaryChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">$/PY</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Select
            label="Employee Profile Color"
            variant="outlined"
            fullWidth
            name="profileColor"
            value={employee.profileColor}
            onChange={handleChange}
          >
            {profileColorOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default EmployeeForm;