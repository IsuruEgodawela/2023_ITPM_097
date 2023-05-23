import React from 'react';
import AddEmployee from '../../components/employeemanage/AddEmployee';
import NavBar from '../../components/navbar/NavBar';

export default function AddEmployeePage() {
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
              <AddEmployee />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="warm-flame-gradient color-block"> */}
      {/* <div
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
      </div> */}
      {/* </div> */}
    </>
  );
}
