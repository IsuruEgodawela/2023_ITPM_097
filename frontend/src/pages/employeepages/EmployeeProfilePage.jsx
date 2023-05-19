import React from 'react';
import EmployeeProfile from '../../components/employeemanage/EmployeeProfile';
import NavBar from '../../components/navbar/NavBar';
import { useParams } from 'react-router-dom';

export default function EmployeeProfilePage() {
  const { id } = useParams();
  return (
    <>
      <div className="warm-flame-gradient color-block">
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '150px',
          }}
        >
          <NavBar />
        </div>
        <div>
          <EmployeeProfile id={id} />
        </div>
      </div>
    </>
  );
}
