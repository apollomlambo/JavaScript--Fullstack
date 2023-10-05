import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const EmployeeTable = ({ employees }) => {
  return (
    <Paper elevation={3} style={{ marginTop: '16px', padding: '16px' }}>
      <h2>Current Employees</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Number</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Salutation</TableCell>
              <TableCell>Profile Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell>{employee.employeeNumber}</TableCell>
                <TableCell>{employee.firstname}</TableCell>
                <TableCell>{employee.lastname}</TableCell>
                <TableCell>{employee.salutation}</TableCell>
                <TableCell>
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      backgroundColor: employee.profileColor,
                      borderRadius: '50%',
                    }}
                  ></div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EmployeeTable;