import React, { useState, useEffect, useCallback } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function EmployeeProfile() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const PF = 'http://localhost:8080/image/';

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getdata = () => {
    axios
      .get('http://localhost:8080/api/employee/getAllEmployee')
      .then((res) => {
        // console.log(res.data.Employee); // Add this line/
        setData(res.data.Employee);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdata();
    // setFilteredData(data);
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((row) =>
        row.NIC.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  const handleEdit = (id) => {
    // handle edit button click
    navigate(`/editemployee/${id}`);
  };

  const handleDelete = (_id) => {
    // console.log(_id);
    const row = data.find((row) => row._id === _id);
    if (!row) {
      console.log(`Row with _id=${_id} not found in the table`);
      return;
    }
    axios
      .delete(`http://localhost:8080/api/employee/DeleteEmployee/${_id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="dropdown mt-2"
        style={{ float: 'right', marginRight: '-200px' }}
      >
        <Link
          className="dropdown-toggle d-flex align-items-center hidden-arrow mt-2"
          to="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="50"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
          <br />
          <h6 className="me-5 ms-2">R.M.N.Rathnayaka</h6>
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="/employeeprofile">
              My profile
            </a>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <br />

      <div className="d-flex mt-5">
        <div>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search by NIC"
              style={{
                backgroundColor: '#FFFFFF',
                width: '1350px',
                float: 'right',
                marginLeft: '50px',
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      </div>
      <br />

      <Link
        to="/addemployee"
        className="btn btn bg-info justify-content-center"
        style={{
          backgroundColor: 'black',
          width: '200px',
          textTransform: 'capitalize',
          float: 'right',
          marginRight: '-210px',
        }}
      >
        Insert
      </Link>
      <br />

      <h1 className="mt-2 text-center" style={{ marginLeft: '200px' }}>
        Employee List
      </h1>

      <br />

      <MDBTable
        striped
        hover
        style={{
          width: '1350px ',
          marginLeft: '50px',
          marginBottom: '500px',
        }}
      >
        <MDBTableHead style={{ background: 'rgb(0 200 260)' }}>
          <tr>
            <th>Profile Image</th>
            <th>Name</th>
            <th>Department</th>
            <th>DOB</th>
            <th>NIC</th>
            <th>Gender</th>
            <th>email</th>
            <th>Contact NO</th>
            <th>Job Title </th>
            <th>Good Name</th>
            <th>Permanent Address</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((row, index) => (
            <tr
              key={row.id}
              style={{
                width: '1280px',
                textAlign: 'center',
              }}
            >
              <td>
                {' '}
                <img
                  src={PF + row.image}
                  class="img-fluid rounded-circle mb-5 img-thumbnail shadow-sm"
                  alt=""
                  style={{ width: '100px', height: '100px' }}
                />
              </td>

              <td>{row.name}</td>
              <td>{row.department}</td>
              <td>{row.dob}</td>
              <td>{row.NIC}</td>
              <td>{row.gender}</td>
              <td>{row.email}</td>
              <td>{row.contactNo}</td>
              <td>{row.jobTitle}</td>
              <td>{row.goodName}</td>
              <td>{row.PermanentAddress}</td>
              <td>
                <MDBBtn
                  style={{
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.75rem',
                    borderRadius: '0.3rem',
                    width: '70px',
                  }}
                  backgroundColor="blue"
                  size="sm"
                  onClick={() => handleEdit(row._id)}
                >
                  Update
                </MDBBtn>
                <br />
                <br />
                <MDBBtn
                  style={{
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.75rem',
                    borderRadius: '0.3rem',
                    width: '70px',
                  }}
                  color="danger"
                  size="sm"
                  onClick={() => handleDelete(row._id)}
                >
                  Delete
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
}
