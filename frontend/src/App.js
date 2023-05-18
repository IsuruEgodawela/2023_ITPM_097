import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddEmployeePage from './pages/employeepages/AddEmployeePage';
import EditEmployeePage from './pages/employeepages/EditEmployeePage';
import EmployeeProfilePage from './pages/employeepages/EmployeeProfilePage';
import EmployeeTablePage from './pages/employeepages/EmployeeTablePage';
import './App.css';

function App() {
  return (
    <div className="gradient-custom">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/addemployee" element={<AddEmployeePage />} />
          <Route path="/editemployee/:id" element={<EditEmployeePage />} />
          <Route path="/employeeprofile" element={<EmployeeProfilePage />} />
          <Route path="/employeetable" element={<EmployeeTablePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
