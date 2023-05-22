import React from 'react';
import EditVet from '../../components/VetManage/EditVet';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/navbar/NavBar';

export default function EditVetPage() {
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
          <EditVet id={id} />
        </div>
      </div>
    </>
  );
}
