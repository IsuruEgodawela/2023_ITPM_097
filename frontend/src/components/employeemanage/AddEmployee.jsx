import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

export default function AddEmployee() {
  const [_id, setEmployeeID] = useState('');
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

  const [image, setImage] = useState('');

  const [file, setFile] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!file) {
      // If no file is selected, submit the form without the image
      submitForm();
      return;
    }

    // Create a new FormData object
    const formData = new FormData();
    const filename = Date.now() + file.name;
    formData.append('name', filename);
    formData.append('file', file);
    console.log(formData);

    try {
      // Upload the image file to the server
      await axios.post('http://localhost:8080/api/upload', formData);
    } catch (err) {
      alert(err);
      return;
    }

    // If the upload is successful, set the image property and submit the form
    const data = {
      name,
      department,
      jobTitle,
      dob,
      NIC,
      gender,
      contactNo,
      password,
      goodName,
      email,
      PermanentAddress,
      image: filename, // Set the image property to the filename of the uploaded image
    };

    submitForm(data);
  }

  async function submitForm(data) {
    if (
      name.length === 0 ||
      department.length === 0 ||
      jobTitle.length === 0 ||
      dob.length === 0 ||
      NIC.length === 0 ||
      gender.length === 0 ||
      contactNo.length === 0 ||
      password.length === 0 ||
      goodName.length === 0 ||
      email.length === 0 ||
      PermanentAddress.length === 0
    ) {
      swal(' Fields Cannot empty !', 'Please enter all data !', 'error');
    } else {
      console.log(data);
      try {
        const response = await axios.post(
          `http://localhost:8080/api/employee/NewEmployee`,
          data
        );
        console.log(response.data);

        // Reset the form fields
        setName('');
        setDepartment('');
        setJobTitle('');
        setDob('');
        setNIC('');
        setGender('');
        setContactNo('');
        setPassword('');
        setGoodName('');
        setEmail('');
        setPermanentAddress('');

        swal({
          text: 'Successfully Added',
          icon: 'success',
          button: 'Okay!',
        }).then((value) => {
          navigate(`/employeetable`);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      <div
        className="dropdown"
        style={{ float: 'right', marginRight: '-150px' }}
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
      <h1 className="mt-5 text-center" style={{ marginLeft: '250px' }}>
        PERSONAL DATA & DEPARTMENT
      </h1>
      <div
        className="d-flex justify-content-center"
        style={{ marginLeft: '250px' }}
      >
        <div className="card text-center bg-gradient mt-5 mb-5 w-70">
          <div
            className="card-body warm-flame-gradient color-block "
            style={{
              background: 'rgb(2,0,36)',
              background:
                'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(245,186,255,1) 0%, rgba(0,212,255,1) 100%)',
            }}
          >
            <br />
            <br />
            <div className="d-flex justify-content-center">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center align-items-center">
                  {file && (
                    <img
                      class="img-fluid rounded-circle mb-5 img-thumbnail shadow-sm"
                      src={URL.createObjectURL(file)}
                      alt=""
                      style={{ width: '200px', height: '200px' }}
                    />
                  )}
                </div>
                <MDBContainer className="d-flex justify-content-center">
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
                          htmlFor="gender"
                        >
                          Gender
                        </label>
                        <select
                          className="form-control w-50 float-end"
                          id="gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
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
                  />
                </div>

                <br />
                <br />

                <br />
                <br />

                <div className="position-relative">
                  <div
                    className="bg-white rounded p-2"
                    style={{
                      width: '150px',
                      height: '150px',
                    }}
                  >
                    <i className="fas fa-cloud-upload-alt fa-3x mb-2"></i>
                    <button
                      className="btn btn float-center"
                      style={{
                        backgroundColor: 'indigo',
                        width: '80px',
                        color: 'white',
                        textTransform: 'capitalize',
                        margin: '20px',
                      }}
                    >
                      Upload
                    </button>
                  </div>
                  <input
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                    type="file"
                    id="fileInput"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <br />
                <div
                  className="position-relative"
                  style={{ marginTop: '-120px', marginBottom: '100px' }}
                >
                  <Link
                    to="/employeetable"
                    className="btn btn float-end me-5"
                    style={{
                      backgroundColor: 'red',
                      width: '150px',
                      color: 'white',
                      textTransform: 'capitalize',
                    }}
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="btn btn float-end me-5"
                    style={{
                      backgroundColor: 'blue',
                      width: '150px',
                      color: 'white',
                      textTransform: 'capitalize',
                    }}
                  >
                    Insert
                  </button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
