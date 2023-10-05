import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.firstname} {employee.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;