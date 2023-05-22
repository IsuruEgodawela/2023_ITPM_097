import React from 'react';
import ViewVet from '../../components/VetManage/ViewVet';
import NavBar from '../../components/navbar/NavBar';
import { useParams } from 'react-router-dom';

export default function ViewVetPage() {
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
          <ViewVet id={id} />
        </div>
      </div>
    </>
  );
}
