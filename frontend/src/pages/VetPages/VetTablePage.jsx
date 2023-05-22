import React from 'react';
import VetTable from '../../components/VetManage/VetTable';
import NavBar from '../../components/navbar/NavBar';

export default function VetTablePage() {
  return (
    <>
      <div className="warm-flame-gradient color-block">
        <div class="container">
          <div class="row">
            <div
              class="col-md-1"
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

            <div class="col-md-11">
              <VetTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
