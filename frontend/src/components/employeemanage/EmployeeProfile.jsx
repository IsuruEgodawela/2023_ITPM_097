import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';
// import { useParams } from 'react-router-dom';
const EmployeeProfile = ({ id }) => {
  console.log(id);

  // const [_id, setEmployeeID] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [dob, setDob] = useState('');
  const [NIC, setNIC] = useState('');
  const [gender, setGender] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [goodName, setGoodName] = useState('');
  const [email, setEmail] = useState('');
  const [PermanentAddress, setPermanentAddress] = useState('');
  const navigate = useNavigate();
  const PF = 'http://localhost:8080/image/';
  const [image, setImage] = useState('');

  id = '6459110da929aad5cb6142df';

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/employee/getEmployee/${id}`)

      .then((res) => {
        console.log(res.data.Employee);
        // setEmployeeID(res.data.Employee._id);
        setName(res.data.Employee.name);
        setDepartment(res.data.Employee.department);
        setJobTitle(res.data.Employee.jobTitle);
        setDob(res.data.Employee.dob);
        setNIC(res.data.Employee.NIC);
        setGender(res.data.Employee.gender);
        setContactNo(res.data.Employee.contactNo);
        setPassword(res.data.Employee.password);
        setGoodName(res.data.Employee.goodName);
        setEmail(res.data.Employee.email);
        setPermanentAddress(res.data.Employee.PermanentAddress);
        setImage(res.data.Employee.image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    // handle edit button click
    navigate(`/editemployee/${id}`);
  };

  return (
    <>
      <div className="dropdown" style={{ float: 'right' }}>
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
          <h6 className="me-5 ms-2">Rathnayaka</h6>
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
      <h1 className="mt-5 text-center" style={{ marginLeft: '150px' }}>
        EMPLOYEE PROFILE
      </h1>
      <div
        className="d-flex justify-content-center"
        style={{ marginLeft: '150px' }}
      >
        <div className="card text-center bg-gradient mt-5 mb-5  w-70">
          <div
            className="card-body"
            style={{
              background: 'rgb(2,0,36)',
              background:
                'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(245,186,255,1) 0%, rgba(0,212,255,1) 100%)',
            }}
          >
            <br />
            <br />
            <div className="d-flex justify-content-center">
              <form>
                <img
                  src={PF + image}
                  class="img-fluid rounded-circle mb-5 img-thumbnail shadow-sm"
                  alt=""
                  style={{ width: '200px', height: '200px' }}
                />
                <MDBContainer>
                  <MDBRow>
                    <MDBCol size="md">
                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Name with Initial:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled
                        />
                      </div>

                      {/* <MDBInput
                      className='bg-light'
                        label="Name with Initial"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      /> */}

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Gender
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          disabled
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Contact Number:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="contactNo"
                          value={contactNo}
                          onChange={(e) => setContactNo(e.target.value)}
                          disabled
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Permanent Address:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="permanentAddress"
                          value={PermanentAddress}
                          onChange={(e) => setPermanentAddress(e.target.value)}
                          disabled
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Job Title:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="jobTitle"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          disabled
                        />
                      </div>

                      <br />
                      <br />
                    </MDBCol>
                    <MDBCol size="md">
                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Good Name:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="goodName"
                          value={goodName}
                          onChange={(e) => setGoodName(e.target.value)}
                          disabled
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Date of Birthday:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="date"
                          id="dob"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          disabled
                        />
                      </div>
                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Email:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled
                        />
                      </div>
                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          NIC:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="NIC"
                          value={NIC}
                          onChange={(e) => setNIC(e.target.value)}
                          disabled
                        />
                      </div>

                      <br />
                      <br />

                      <div>
                        <label
                          className="float-start font-weight-bold fs-6"
                          htmlFor="name"
                        >
                          Department:
                        </label>
                        <input
                          className="form-control w-50 float-end"
                          type="text"
                          id="department"
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          disabled
                        />
                      </div>

                      <br />
                      <br />
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>

                <div>
                  <label
                    className="float-start font-weight-bold fs-6"
                    htmlFor="password"
                  >
                    Password:
                  </label>
                  <input
                    className="form-control w-60 float-end mt-2 mb-5"
                    type="password"
                    id="password"
                    placeholder=" Your password must be 8-20 characters long and contain at
                    least one letter and one number."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$"
                    disabled
                  />
                </div>

                <br />
                <br />
                <br />
                <Link
                  to="/employeetable"
                  className="btn btn  float-end me-5"
                  style={{
                    backgroundColor: 'red',
                    width: '100px',
                    color: 'white',
                    textTransform: 'capitalize',
                  }}
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="btn btn float-end me-5"
                  style={{
                    backgroundColor: 'blue',
                    width: '100px',
                    color: 'white',
                    textTransform: 'capitalize',
                  }}
                  onClick={() => handleEdit(id)}
                >
                  Modify
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
