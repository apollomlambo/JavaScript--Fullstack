import React, { useState } from 'react';
import './App.css';
import {
  CssBaseline,
  Container,
  Paper,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeTable from './components/EmployeeTable';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Employee Payroll System</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
            <EmployeeForm />
          </Paper>
          <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
            <EmployeeList employees={employees} />
          </Paper>
          <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
            <EmployeeTable employees={employees} />
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;