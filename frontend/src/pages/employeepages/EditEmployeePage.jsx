import React from 'react';
import EditEmployee from '../../components/employeemanage/EditEmployee';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';

export default function EditEmployeePage() {
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
          <EditEmployee id={id} />
        </div>
      </div>
    </>
  );
}
