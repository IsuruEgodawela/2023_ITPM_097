import React, { useState, useEffect, useCallback } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function VetTable() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const PF = 'http://localhost:8080/image/';

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getdata = () => {
    axios
      .get('http://localhost:8080/api/Vet/getAllVet')
      .then((res) => {
        
        setData(res.data.Vet);
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
        row.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  const handleEdit = (id) => {
    // handle edit button click
    navigate(`/editvet/${id}`);
  };

  const handleDelete = (_id) => {
    // console.log(_id);
    const row = data.find((row) => row._id === _id);
    if (!row) {
      console.log(`Row with _id=${_id} not found in the table`);
      return;
    }
    axios
      .delete(`http://localhost:8080/api/Vet/DeleteVet/${_id}`)
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
            <a className="dropdown-item" href="/viewvet">
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

      <Link
        to="/addvet"
        className="btn btn-primary  justify-content-center"
        style={{
          borderRadius: '0.9em',
          backgroundColor: 'rgba(255, 31, 0, 0.25)',
          textTransform: 'capitalize',
          float: 'left',
          marginRight: '-210px',
        }}
      >
        Add new animal species
      </Link>
      <br />

      <div className="d-flex mt-5">
        <div>
          <form>
            <input
              className="form-control"
              type="text"
              placeholder="Search Here..."
              style={{
                backgroundColor: '#FFFFFF',
                width: '1000px',
                float: 'right',
                marginLeft: '80px',
                marginTop: '50px',
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MDBBtn
              className="btn btn-default "
              style={{ marginLeft: '650px', marginTop: '30px', marginBottom: '30px', borderRadius: '0.9em', background: 'rgba(36, 0, 255, 0.27)', }}
              //onClick={handleSearch}
            >
              Search
            </MDBBtn>
          </form>
        </div>
      </div>
      <br />

      

      <h1 className="mt-2 text-center" style={{ marginLeft: '200px' }}>
      Veterinary Database
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
        
        <MDBTableHead style={{ background: 'white' }}>
          <tr>
          <th>Species Code</th>
            <th>Species Name</th>
            <th>Gender</th>
            <th>Location of injury</th>
            <th>Date of injury</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {filteredData.map((row, index) => (
            <tr
              key={row.code}
              style={{
                width: '1280px',
                textAlign: 'center',
              }}
            >

              <td>{row.code}</td>
              <td>{row.name}</td>
              <td>{row.gender}</td>
              <td>{row.location}</td>
              <td>{row.date}</td>

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
                  onClick={() => handleEdit(row._code)}
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
                  onClick={() => handleDelete(row._code)}
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
