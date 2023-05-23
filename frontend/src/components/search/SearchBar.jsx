import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup,
} from 'mdb-react-ui-kit';

export default function SearchBar() {
  return (
    <>
        <MDBContainer fluid className='mt-5'>
          <MDBInputGroup tag="form" className="d-flex w-auto mb-3">
            <input
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              type="Search"
            />
            <MDBBtn outline>Search</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>
    </>
  );
}
